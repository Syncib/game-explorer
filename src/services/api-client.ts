import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a0f1fe76183144598690c43b810de5b6",
  },
});
