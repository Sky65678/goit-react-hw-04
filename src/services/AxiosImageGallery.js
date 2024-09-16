import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchImage, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: searchImage,
      page,
      client_id: "S46MFdQUo6Bv7iVjTg2lTReq6ktjM50U3gK5xFMpWgY",
    },
  });
  return response.data;
};
