
import "./search.css";

import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../Slice/productSlice";
function Search() {

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);
 

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  
  return (
    <>
      <div className="search_bar">
        <input
          id="search_in"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search Perfumes"
        ></input>
       
      </div>
    </>
  );
}

export default Search;
