import converstaion from "../models/conversation-model.js";
import message from "../models/message-model.js";

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { messageData } = req.body;

    let gotConversation = await converstaion.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If conversion is not found, we will create it

    if (!gotConversation) {
      gotConversation = await converstaion.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await message.create({
      senderId,
      receiverId,
      message: messageData,
    });

    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
    }

    await gotConversation.save();

    return res.status(200).json({
      status: "Message sent",
    });

    // SOCKET IO
  } catch (error) {
    console.log("Send Message Controller", error);
  }
};
