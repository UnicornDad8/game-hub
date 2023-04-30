import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1f27b788d22c40db9d2bf628c12016f8",
  },
});
