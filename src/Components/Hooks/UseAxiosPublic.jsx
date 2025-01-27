import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-eta-roan.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
