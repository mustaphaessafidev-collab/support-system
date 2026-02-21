const Message = require("../models/Message");
const Tickets = require("../models/Tickets");

const sendMessage = async (req, res) => {
  try {
    const { ticket, text } = req.body;
    if (!ticket || !text) {
      return res.status(400).json({ message: "ticket and text are required" });
    }

    // (اختياري ولكن مهم) تأكد المستخدم عندو الحق يرسل فهاد ticket
    const foundTicket = await Tickets.findById(ticket);
    if (!foundTicket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    // مثال: ticket فيه client و agent
    // عدّل حسب schema ديالك
    const userId = req.user.id;
    const isClient = foundTicket.client?.toString() === userId;
    const isAgent = foundTicket.agent?.toString() === userId;

    if (!isClient && !isAgent && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not allowed" });
    }

    const message = await Message.create({
      ticket,
      sender: userId,
      text,
    });

    const populated = await Message.findById(message._id).populate(
      "sender",
      "name role"
    );

    // ✅ Real-time: صيفط لكلشي لي داير join لنفس room (ticketId)
    req.io?.to(ticket).emit("newMessage", populated);

    return res.status(200).json({ message: populated });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMessage = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const messages = await Message.find({ ticket: ticketId })
      .populate("sender", "name role")
      .sort({ createdAt: 1 });

    return res.status(200).json({ message: messages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMessage, getMessage };