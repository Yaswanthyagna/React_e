
import "./index.css"
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="search-bar">Search Products</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Products"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;