import React, { useState, useEffect, forwardRef } from "react";
import SearchIcon from "../../../../public/icons/search.svg";
import styles from "./searchInput.module.css";

interface SearchInput {
  value: string;
  onChange: (value: string) => void;
}

// eslint-disable-next-line react/display-name
const SearchInput = forwardRef<HTMLInputElement, SearchInput>(
  ({ value, onChange }, ref) => {
    const [search, setSearch] = useState(value || "");

    useEffect(() => {
      onChange(search);
    }, [search, onChange]);

    return (
      <div className={styles.searchInput}>
        <SearchIcon className={styles.searchIcon} />
        <input
          ref={ref}
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
    );
  }
);

export default SearchInput;
