"use client";
import axios from "axios";

let development = process.env.NEXT_PUBLIC_DEVELOPMENT;

const baseURL =
  development === "true"
    ? "http://localhost:3001/custom/utils"
    : "https://server.bunikasolutions.com/custom/utils";
const backupUrl1 = "https://bunika.cyclic.app/custom/utils";
const backupUrl2 = "https://bunika-api.onrender.com/custom/utils";
let instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const mtoken = localStorage.getItem("token");
    if (mtoken) {
      config.headers["Authorization"] = `Bearer ${mtoken}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (config) => {
    return config;
  },

  async (error) => {
    let config = error.config;
    if (!config || config.baseURL === backupUrl2) {
      return Promise.reject(error);
    }
    if (config.response) {
      return config;
    }

    if (config.baseURL === backupUrl1) config.baseURL = backupUrl2;
    else config.baseURL = backupUrl1;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, config.retryDelay || 1000);
    });

    try {
      const retryResponse = await instance(config);
      return retryResponse;
    } catch (retryError) {
      return Promise.reject(retryError);
    }
  }
);

export default instance;
