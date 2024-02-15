import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://job-management-server-eight.vercel.app/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
