import axios from "axios";

const ACCESS_KEY = "O7U5dOnoGYwYOaRryfvd7sxVIRkYfWDTjLymq8vRRt0";
axios.defaults.baseURL = "https://api.unsplash.com";

const fetchData = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      per_page: 12,
      page,
      orientation: "landscape",
    },
  });
  return response.data;
};
export default fetchData;
