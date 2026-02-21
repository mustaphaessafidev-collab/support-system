const router = require("express").Router();
const { sendMessage, getMessage } = require("../controllers/messageController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", authMiddleware, sendMessage);
router.get("/:id", authMiddleware, getMessage);

module.exports = router;