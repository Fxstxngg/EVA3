const SearchBar = ({ searchTerm, onSearchChange }) => {
 return (
 <div className="search-container">
 <label htmlFor="search">Buscar curso:</label>
 <input
 id="search"
 type="text"
 value={searchTerm}
 onChange={(event) => onSearchChange(event.target.value)}
 placeholder="Ejemplo: programación, seguridad, react..."
 maxLength={50}
 />
 </div>
 );
};
export default SearchBar;
