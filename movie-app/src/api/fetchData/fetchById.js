import axios from "axios";
const fetchById = async (id, setState, setLoaderStatus, setMoviesData, setSugestedMovies) => {
  if (!id) return;
  setLoaderStatus(true);

  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7cd9b002",
      i: id,
    },
  });

  if (response.data.Error) {
    setState([]);
    setLoaderStatus(false);
    setSugestedMovies(false)
    return;
  }
  setMoviesData([])
  setState([response.data]);
  setLoaderStatus(false);
  setSugestedMovies(false)
  console.log(response.data)
  const input = document.querySelector("input");
  input.value = response.data.Title
  return;
};

export default fetchById;
