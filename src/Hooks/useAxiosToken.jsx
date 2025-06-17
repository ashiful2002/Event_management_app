import axios from "axios";
import React, { use, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://event-management-server-five.vercel.app",
});

const useAxiosToken = () => {
  const { user } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return axiosInstance;
};

export default useAxiosToken;
