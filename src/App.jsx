import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import fetchData from "./components/service/fetchAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [desc, setDesc] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      try {
        const data = await fetchData(query, page);
        setImages((prev) => [...prev, ...data.results]);

        setShowBtn(page < data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const openLargeImage = (largeImage, desc) => {
    setLargeImage(largeImage);
    setDesc(desc);
    openModal();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLargeImage("");
    setDesc("");
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {error ? (
        <ErrorMessage />
      ) : (
        images && (
          <ImageGallery openLargeImage={openLargeImage} images={images} />
        )
      )}
      {loading && <Loader />}
      {showBtn && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {largeImage && (
        <ImageModal
          largeImage={largeImage}
          desc={desc}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
}

export default App;
