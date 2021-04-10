import axios from "axios";
const fetchByName = async (searchTerm, setStateName, setLoaderStatus) => {
  setLoaderStatus(true);
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7cd9b002",
      s: searchTerm,
    },
  });
  if (response.data.Error) {
    setStateName([]);
    setLoaderStatus(false);
    return;
  }
  setStateName(response.data.Search);
  setLoaderStatus(false);
};

export default fetchByName;
