import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResultsList = ({searchInputHandler}) => {
    const dispatch = useDispatch();

  const searchValueResult = useSelector(
    (state) => state?.productReducer?.searchValueList
  );
  // console.log("search",searchValueResult);

  return (
    <div className="md:border-0 border lg:container">
      <ul className="flex flex-col">
        {searchValueResult?.data?.slice(0,6).map((item) => (
          <Link
             onClick={()=>searchInputHandler()}
            key={item._id}
            to={{
              pathname:`/ProductDetailsPage/${item._id}`,
            }}
          >
            <li className="text-xs font-medium p-3 truncate hover:bg-gray-100 w-full">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
      <Link 
             onClick={()=>searchInputHandler()}
            to="/ProductListPage/Search Results"
            state={{searchResults:"searchResults"}}
            >
      <p className="text-xs text-[#42a2a2] font-medium p-3 border-t md:border-0 hover:bg-gray-200">
        See All Results
      </p>
      </Link>
    </div>
  );
};

export default SearchResultsList;
