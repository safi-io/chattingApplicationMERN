import converstaion from "../models/conversation-model.js";
import message from "../models/message-model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

// Sending Message Controller

export const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { messageData } = req.body;

    let getConversation = await converstaion.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If conversion is not found, we will create it

    if (!getConversation) {
      getConversation = await converstaion.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await message.create({
      senderId,
      receiverId,
      message: messageData,
    });

    if (newMessage) {
      getConversation.messages.push(newMessage._id);
    }

    await Promise.all([await getConversation.save(), await newMessage.save()]);

    // SOCKET IO

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res.status(200).json({
      newMessage,
    });
  } catch (error) {
    console.log("Error in Send-Message Controller", error);
  }
};

// Getting Message Controller

export const getMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    // Conversation Finder
    const getConversation = await converstaion
      .findOne({
        participants: { $all: [senderId, receiverId] },
      })
      .populate("messages");
    // If conversation is found, return all messages
    return res.status(200).json(getConversation?.messages);
  } catch (error) {
    console.log(`Error in Get-Message Controller ${error}`);
  }
};
