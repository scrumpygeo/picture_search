import axios from "axios";
require("dotenv").config();

export default axios.create({
  // create instance of axios
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_API_ACCESS_KEY
  }
});
