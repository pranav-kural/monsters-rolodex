import "./search-box-styles.css";

const SearchBox = ({className, placeholder, searchEventHandler}) => (
  <input
    className={className}
    type="search"
    placeholder={placeholder}
    onChange={searchEventHandler}
  />
);
export default SearchBox;
