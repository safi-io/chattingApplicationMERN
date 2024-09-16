import { useEffect } from "react";
import axios from "axios";

const fetchMessages = async () => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.get(`http://localhost:7000/message/${s}`);
  } catch (error) {
    console.log(error);
  }
};

const useGetMessages = () => {
  useEffect(() => {
    return () => {};
  }, []);
};
export default useGetMessages;
