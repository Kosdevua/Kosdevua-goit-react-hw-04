import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import s from "./SearchBar.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      iziToast.info({
        message: "Please enter a search query",
        position: "topLeft",
      });
      return;
    }
    setSearchQuery("");
    onSubmit(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <header className={s.search_bar_wrapper}>
        <form className={s.form_wrapper} onSubmit={handleSubmit}>
          <button type="submit">
            <CiSearch />
          </button>
          <input
            value={searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
