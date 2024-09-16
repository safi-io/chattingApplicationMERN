import { useEffect } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { setOtherUsers } from "../redux/userSlice";

export default function UseGetOtherUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get("http://localhost:7000/user");
        // Store
        dispatch(setOtherUsers(res.data))
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
}
