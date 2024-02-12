import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';
import { subCategories } from "../TypeConstants";
import { setSearchValue } from "../ProductComponent/Slices/FilterSlice";
import SearchResultsList from "../NavbarMain/SearchResultsList";

function MobileSearch(){
  //  const history = useHistory();
  // console.log("subCategories",subCategories);
   const navigate = useNavigate();
    const [searchResultsListHandler, setSearchResultsListHandler] =
    useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    useEffect(() => {
        if (location.pathname == "/") {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setSearchResultsListHandler(false);
      }, [location.pathname]);
    
      function searchHandler(e) {
        const value = e.target.value;
        setSearchInput(value);
        if (value.length >= 2) {
          setSearchResultsListHandler(true);
        } else {
          setSearchResultsListHandler(false);
        }
    
        dispatch(
          setSearchValue({
            id: "",
            type: "GET",
            suffix: "&limit=30",
            searchQuery: value,
          })
        );
      }
      function searchInputHandler() {
        setSearchInput("");
      }
      function enterKeyHandler(event){
        if (event.key === "Enter") {
            console.log("Enter");
            // history.push({
            //   pathname: "/ProductListPage/Search Results",
            //   state: { searchResults: "searchResults" }
            // });
            console.log("end");
            navigate("/ProductListPage/Search Results");
            // window.location.href="/ProductListPage/Search Results";
      }
      }
    return(
        <>

        <div className=" md:hidden fixed top-0 left-0 z-50 right-0 flex items-center h-14 bg-white">
            <Link className="px-1 flex items-center" to={'../'}>
                <BsChevronLeft className="w-7 h-7 object-cover" />
            </Link>
            <div  className=" relative flex-1 mr-2 w-[120px]  flex items-center h-11  bg-[#f2f2f2] rounded-md">
                <span className="pl-2 opacity-80"><FiSearch className="w-6 h-6 object-cover" /></span>
                <input
                 onChange={(e) => searchHandler(e)}
                 onKeyDown={(event)=>enterKeyHandler(event)}
                 value={searchInput}
                 className="bg-[#f2f2f2] border-none w-[120px] font-medium outline-none flex-1 pl-2 pr-10" 
                 placeholder="Type here to search" 
                 type="text" />
              
                 {searchResultsListHandler && (
                <div className="absolute left-0 right-0 top-full bg-white border border-t-0 mt-2">
                  <SearchResultsList
                    searchInputHandler={searchInputHandler}
                  />
                </div>
              )}
            </div>
        </div>
        <div className="mt-[80px] flex items-center justify-center">

            <p>POPULAR SEARCHES</p>
        </div>
            <div className=" 
            mt-[60px] w-full h-[300px] flex pl-5 flex-wrap gap-5 mb-10">
                  {
                    subCategories.map((item,index)=>(
                      <Link
                      key={index * Math.random()}
                      to={`/ProductListPage/${item}`}
                    >
                        <div className="px-2 flex items-center justify-center rounded-3xl border-2 w-[100px] border-black border-opacity-10">
                          {item}
                        </div>
                        </Link>
                    ))
                  }
            </div>
        </>
    )
}
export default MobileSearch;