import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchValue } from "../ProductComponent/Slices/FilterSlice";

const SearchResultsList = () => {

    const dispatch = useDispatch();
    const searchValueResult = useSelector(
        (state) => state.productReducer.searchValue
      );
    const handleResults = () => {
        dispatch(setSearchValue(''));
    }

    return (
        <div className="md:border-0 border lg:container">
            <ul className="flex flex-col">
                {
                    searchValueResult?.data?.map((item) => (
                        <Link
                                key={product._id}
                                to={{
                                  pathname: `/ProductDetailsPage/${product._id}`,
                                }}
                              >
                            <li  className="text-xs font-medium p-3 truncate hover:bg-gray-100 w-full">{name}</li>
                        </Link>
                    ))
                }
            </ul>
            {/* <Link 
            onClick={handleResults} to={`/search/Search Results for "${searchValue}"?name=${searchValue}`}> */}
                <p className="text-xs text-[#42a2a2] font-medium p-3 border-t md:border-0 hover:bg-gray-200">See All Results</p>
            {/* </Link> */}
        </div>
    )
}

export default SuggestionList;