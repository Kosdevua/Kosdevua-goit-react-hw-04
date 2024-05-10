// import axios from "axios";
// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

import fetchData from "./components/service/fetchAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(12);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
    console.log("subMiT");
  };

  useEffect(() => {
    if (!query) return;

    fetchData(query, page)
      .then(({ data }) => {
        setImages((prev) => [...prev, ...data.results]);
        // setShowBtn(page < Math.ceil(total_results / per_page));
      })
      .catch(() => setError(true));
    // .finally(() => setIsLoading(false));
    fetchData();
  }, [query, page]);

  console.log(images);

  return (
    <>
      {/* <div>hello</div> */}
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} />
    </>
  );
}

export default App;
