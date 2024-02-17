import { memo, useEffect, useState } from "react";
// import Portal from "../Portal";
import Portal from "./Portal";
import { AiOutlineClose } from "react-icons/ai";
import { IoCheckmarkSharp } from "react-icons/io5";
import sort_img from "../../assets/mobile_sort.svg";
import filter_img from "../../assets/mobile_filter.svg";
import { useDispatch, useSelector } from "react-redux";
const MobileFilter = ({ onFilterChange, filteredProducts, onSortChange }) => {
  // console.log("filteredProducts",filteredProducts);
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [filterDisplay, setFilterDisplay] = useState("");
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleSort, setToggleSort] = useState(false);
  const [emptyFilter,setEmptyFilter]=useState(true);
  let filteredItems = [];
  const [filteredSubCategories, setFilteredSubCategories] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredSizes, setFilteredSizes] = useState([]);
  // console.log("fp", filteredProducts);
  useEffect(() => {
    filteredItems = [...filteredProducts];
    // console.log("fiteredItems", filteredItems);
    setFilteredSubCategories([
      ...new Set(filteredItems?.map((item) => item.subCategory)),
    ]);
    setFilteredBrands([...new Set(filteredItems?.map((item) => item.brand))]);
    setFilteredColors([...new Set(filteredItems?.map((item) => item.color))]);
    setFilteredSizes([...new Set(filteredItems?.flatMap((item) => item.size))]);
  }, [filteredProducts]);
  const [activeFilters, setActiveFilters] = useState({
    size: false,
    subCategory: false,
    color: false,
    brand: false,
    ratings: false,
  });
  const sortByFilterTypes = [
    "Top Rated",
    "New Arrival",
    "Price:High To Low",
    "Price:Low To High",
  ];
  const filterTypes = ["size", "subCategory", "brand", "color"];
  const [selectedFilterItems, setSelectedFilterItems] = useState()
  const [sizeFilter, setSizeFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [updatedValues, setUpdatedValues] = useState({});
  function updateFilters(filterType, value) {
    switch (filterType) {
      case "size":
        setSizeFilter((prev) => {
          console.log("value", value);
          const updatedSizes = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
          setUpdatedValues((prevValues) => ({
            ...prevValues,
            [filterType]: updatedSizes,
          }));
          onFilterChange(updatedValues);
          return [...new Set(updatedSizes)];
        });
        break;
      case "subCategory":
        setSubCategoryFilter((prev) => {
          const updatedSubCategories = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
          setUpdatedValues((prevValues) => ({
            ...prevValues,
            [filterType]: updatedSubCategories,
          }));
          return [...new Set(updatedSubCategories)];
        });
        break;
      case "color":
        setColorFilter((prev) => {
          const updatedColors = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
          setUpdatedValues((prevValues) => ({
            ...prevValues,
            [filterType]: updatedColors,
          }));
          return [...new Set(updatedColors)];
        });
        break;
      case "brand":
        setBrandFilter((prev) => {
          const updatedBrands = prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value];
          setUpdatedValues((prevValues) => ({
            ...prevValues,
            [filterType]: updatedBrands,
          }));
          return [...new Set(updatedBrands)];
        });
        break;

      default:
        break;
    }
  }
  function handleSortByFilter(value) {
    setSelectedSortBy(value);
    console.log("SortBy", value);
    let changedValue = value.toLowerCase();
    onSortChange(changedValue);
    // console.log("handleSort",filteredProducts);
  }
  function handleFilterType(value) {
    setFilterDisplay(value);
    switch (value) {
      case "size":
        setSelectedFilterItems(filteredSizes);
        break;
      case "subCategory":
        setSelectedFilterItems(filteredSubCategories);
        break;
      case "brand":
        setSelectedFilterItems(filteredBrands);
        break;
      case "color":
        setSelectedFilterItems(filteredColors);
        break;
      default:
        break;
    }
  }
  // console.log("filterDisplay", filterDisplay);
  // console.log(
  //   "filtered",
  //   filteredBrands,
  //   filteredColors,
  //   filteredSizes,
  //   filteredSubCategories
  // );
  
  useEffect(() => {
    onFilterChange(updatedValues);
    for(let key in updatedValues) {
      if (updatedValues[key].length > 0) {
          setEmptyFilter(false);
      }else{
        setEmptyFilter(true);
      }
  }
  }, [updatedValues]);

  const openSortBy = (e) => {
    e?.stopPropagation && e.stopPropagation();
    setToggleSort(true);
    document.body.style.overflowY = "hidden";
  };

  const closeSortBy = (e) => {
    e?.stopPropagation && e.stopPropagation();
    setToggleSort(false);
    document.body.style.overflowY = "";
  };

  const openFilterBy = (e) => {
    e?.stopPropagation && e.stopPropagation();
    setToggleFilter(true);
    document.body.style.overflowY = "hidden";
  };

  const closeFilterBy = (e) => {
    e?.stopPropagation && e.stopPropagation();
    setToggleFilter(false);
    document.body.style.overflowY = "";
    console.log("close");
  };
  const handleClose = (e) => {
    e?.stopPropagation && e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  // console.log("selected",selectedFilterItems);
  // console.log("updatedValues", updatedValues);
  // console.log("selectedSortBy",selectedSortBy);
  // console.log("keys",Object.keys(updatedValues));
  // console.log("object",Object.keys(updatedValues).every(key => updatedValues[key].length === 0));
  // console.log("object",Object.keys(updatedValues).length != 0);
  return (
    <div className="fixed md:hidden z-50 bottom-0 left-0 right-0 bg-white h-14 flex items-center shadow">
      <div
        onClick={openSortBy}
        className="sortBox cursor-pointer flex items-center justify-center gap-2 flex-1 border-r h-full"
      >
        <div className={`dot w-[10px] h-[10px] ml-2  rounded-full 
         ${selectedSortBy!='' ? 'bg-[#42a2a2]' : 'bg-black opacity-10'}`} />
        <img src={sort_img} alt="" />
        <div className="flex flex-col capitalize">
          <h3 className="text-xs text-[#525252] font-bold">Sort</h3>
          <p className="text-[10px] text-[#737373]">{selectedSortBy}</p>
        </div>
        {toggleSort && (
          <Portal onClose={closeSortBy}>
            <div
              onClick={closeSortBy}
              className="relative w-full h-full bg-[#0000008a]"
            >
              <div className="bg-white absolute w-full bottom-0">
                <div className="p-4 flex items-center justify-between border-b shadow-sm">
                  <h4 className="font-bold">Sort By</h4>
                  <AiOutlineClose
                    onClick={closeSortBy}
                    className="w-5 h-5 object-cover"
                  />
                </div>
                <ul className="flex flex-col text-xs">
                  {sortByFilterTypes?.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSortByFilter(item)}
                      className={`${
                        selectedSortBy === item ? "font-bold" : ""
                      } capitalize hover:bg-gray-100 p-4 flex`}
                    >
                      {item}
                      {selectedSortBy === item && (
                        <div className={`dot w-[10px] h-[10px] ml-1 ${selectedSortBy !== '' ? 'bg-[#42a2a2]' : 'bg-[#fff] opacity-0'} rounded-full`}></div>
                        // <div className={`dot w-[10px] h-[10px] ml-1 ${selectedSortBy!=''?}"bg-[#42a2a2]":"bg-[#fff] opacity"} rounded-full`}></div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Portal>
        )}
      </div>
      {/* FilterBy */}
      <div
        onClick={openFilterBy}
        className="filterBox cursor-pointer flex items-center justify-center gap-2 flex-1 border-l h-full"
      >
        <div className={`dot w-[10px] h-[10px] ml-2  rounded-full ${!emptyFilter ? 'bg-[#42a2a2]' : 'bg-black opacity-10'}`} />
        <img src={filter_img} alt="" />
        <div className="flex flex-col capitalize">
          <h3 className="text-xs text-[#525252] font-bold">Filter</h3>
          <p className="text-[10px] text-[#737373]">
  {filterDisplay !== '' ? (
    Object.keys(updatedValues).every(key => updatedValues[key].length === 0) ? 
    "None" : 
    Object.keys(updatedValues).join('')
  ) : (
    "None"
  )}
</p>

        </div>
        {toggleFilter && (
          <Portal
          >
            <div
              className="relative w-full h-full bg-[#0000008a]"
            >
              <div className="bg-white absolute w-full bottom-0 h-4/5 overflow-y-auto pb-10">
                <div className="p-4 flex items-center justify-between border-b shadow-sm sticky top-0 bg-white z-10">
                  <h4 className="font-bold">Filter</h4>
                </div>
                <div className="flex relative ">
                  <ul
                    className="flex flex-col text-xs bg-[#0000000d] flex-1 h-max border 
                  border-r-0 sticky top-14 w-32"
                  >
                    {filterTypes.map((item) => (
                      <li
                        onClick={() => handleFilterType(item)}
                        className={`p-4 cursor-pointer ${
                          filterDisplay === item ? "bg-white font-bold" : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="h-[700px] overflow-y-auto flex-[2]">
                    {selectedFilterItems?.map((item) => (
                      <li
                        onClick={() => updateFilters(filterDisplay, item)}
                        className={`cursor-pointer capitalize p-4 text-sm flex items-center gap-3`}
                      >
                        <div
                          className={`inline-block border  ${
                            updatedValues[filterDisplay]?.includes(item)
                              ? "bg-[#42a2a2] border-[#42a2a2]"
                              : "border-[#0000008a]"
                          } `}
                        >
                          <IoCheckmarkSharp className={`text-white`} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex font-medium items-center justify-center text-center bg-white absolute bottom-0 w-full shadow border-t">
                <div
                  onClick={closeFilterBy}
                  className="flex-1 px-4 py-3 cursor-pointer opacity-70"
                >
                  CLOSE
                </div>
                <div
                  onClick={closeFilterBy}
                  className="flex-1 px-4 py-3 cursor-pointer bg-[#42a2a2] text-white "
                >
                  APPLY
                </div>
              </div>
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
};

export default memo(MobileFilter);

const SortBy = ({ onClose, selectedSortBy, setSelectedSortBy }) => {
  const handleClose = (e) => {
    e?.stopPropagation && e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  // useEffect(() => {
  //     if (clearedFilters) {
  //         setSelectedSortBy(sortByFilters.options[0]);
  //     }
  // }, [clearedFilters]);

  // const handleClick = (e) => {
  //     const value = e.target.textContent;
  //     if (value.includes('Price')) {
  //         const sortOrder = value === sortByPrice[0]?.name ? sortByPrice[0]?.value : sortByPrice[1]?.value;
  //         dispatch(sortProducts(sortOrder));
  //     } else {
  //         const name = sortByFilters.name
  //         dispatch(setFilters({ name, value }));
  //     }
  //     setSelectedSortBy(value);
  //     onClose(e);
  // }

  return (
    <div
      onClick={handleClose}
      className="relative w-full h-full bg-[#0000008a]"
    >
      <div className="bg-white absolute w-full bottom-0">
        <div className="p-4 flex items-center justify-between border-b shadow-sm">
          <h4 className="font-bold">Sort By</h4>
          <AiOutlineClose onClick={onClose} className="w-5 h-5 object-cover" />
        </div>
        <ul className="flex flex-col text-xs">
          {/* {
                        filters.at(-1).options?.slice(0, 2)?.map((value, i) => (
                            <li onClick={handleClick} key={i} className={`${selectedSortBy === value ? 'font-bold' : ''}  capitalize hover:bg-gray-100 p-4 flex`}>{value}{selectedSortBy === value && <div className="dot w-[10px] h-[10px] ml-1 bg-[#42a2a2] rounded-full"></div>}</li>
                        ))
                    }
                    {
                        sortByPrice?.map(({ name }) => (
                            <li onClick={handleClick} key={name} className={`${selectedSortBy === name ? 'font-bold' : ''}   capitalize hover:bg-gray-100 p-4 flex`}>{name}{selectedSortBy === name && <div className="dot w-[10px] h-[10px] ml-2 bg-[#42a2a2] rounded-full"></div>}</li>
                        ))
                    } */}
        </ul>
      </div>
    </div>
  );
};

const FilterBy = ({ onClose }) => {
  const [expanded, setExpanded] = useState(0);

  const handleClose = (e) => {
    e?.stopPropagation && e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const handleApply = (e) => {
    onClose(e);
  };

  return (
    <div
      onClick={handleClose}
      className="relative w-full h-full bg-[#0000008a]"
    >
      <div className="bg-white absolute w-full bottom-0 h-4/5 overflow-y-auto pb-10">
        <div className="p-4 flex items-center justify-between border-b shadow-sm sticky top-0 bg-white z-10">
          <h4 className="font-bold">Filter</h4>
        </div>
        <div className="flex relative ">
          <ul className="flex flex-col text-xs bg-[#0000000d] flex-1 h-max border border-r-0 sticky top-14 w-32"></ul>
          <ul className="h-[700px] overflow-y-auto flex-[2]"></ul>
        </div>
      </div>
      <div className="flex font-medium items-center justify-center text-center bg-white absolute bottom-0 w-full shadow border-t">
        <div
          onClick={onClose}
          className="flex-1 px-4 py-3 cursor-pointer opacity-70"
        >
          CLOSE
        </div>
        <div
          onClick={handleApply}
          className="flex-1 px-4 py-3 cursor-pointer bg-[#42a2a2] text-white "
        >
          APPLY
        </div>
      </div>
    </div>
  );
};

const CategoryAccordionMobile = ({ name, value }) => {
  const dispatch = useDispatch();

  const handleFilterClick = (value) => {
    dispatch(setFilters({ name, value }));
  };

  return (
    <li
      // onClick={() => handleFilterClick(value)}
      className={`cursor-pointer capitalize p-4 text-sm flex items-center gap-3`}
    >
      <div className="inline-block border border-[#0000008a]">
        <IoCheckmarkSharp className={`text-white`} />
      </div>
    </li>
  );
};
