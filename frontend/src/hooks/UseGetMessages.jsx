import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from "../redux/messageSlice";

const UseGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(
          `http://localhost:7000/message/${selectedUser?._id}`
        );
        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedUser?._id) {
      fetchMessages(); // Call only if user exists
    }
  }, [selectedUser]); // Re-run if selectedUser changes
};

export default UseGetMessages;
