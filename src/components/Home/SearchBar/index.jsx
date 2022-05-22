import React from "react";
import "./styles.css";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Kategoriye Göre Ara"
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>x</span>}
      <button>Ara</button>
    </form>
  </div>
);

export default SearchBar;
