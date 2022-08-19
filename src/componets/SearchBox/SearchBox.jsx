import "./SearchBox.scss";

const SearchBox = (props) => {
    const { label, searchTerm, handleInput} = props;

    return (
      <form className="search-box">
        <input
          placeholder={label}
          type="text"
          name={label}
          value={searchTerm}
          onChange={(event) => 
            {
              handleInput(event)
            }
          }
          className="search-box__input"
        />
      </form>
    );
}

export default SearchBox;