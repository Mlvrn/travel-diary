import styles from './SearchBar.module.scss';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Find Journey"
        className={styles.search__bar}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className={styles.search__button}>Search</button>
    </div>
  );
};

export default SearchBar;
