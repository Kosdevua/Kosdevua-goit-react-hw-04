// import { CiSearch } from "react-icons/ci";

import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a search query.");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <header className={s.search_bar_wrapper}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
          <button type="submit">{/* <CiSearch /> */}Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;

// Хедер з формою пошуку
// Компонент SearchBar приймає один проп onSubmit – функцію для передачі значення інпуту під час сабміту форми. Створює DOM-елемент наступної структури.

// Якщо під час натискання кнопки відправки форми текстове поле порожнє, покажи користувачеві сповіщення про те, що необхідно ввести текст для пошуку зображень. Ця перевірка виконується в компоненті SearchBar в момент відправки форми. Для сповіщень використовуй бібліотеку React Hot Toast.
