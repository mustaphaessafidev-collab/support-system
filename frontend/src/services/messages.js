import axios from "axios";

const API = "http://localhost:5000/api/message"; // بدّلها إذا عندك /api/messages

export const sendMessageApi = (token, data) => {
  return axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getMessagesApi = (token, ticketId) => {
  return axios.get(`${API}/${ticketId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};