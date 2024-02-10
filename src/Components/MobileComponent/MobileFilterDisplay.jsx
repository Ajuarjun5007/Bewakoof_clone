import { useDispatch } from "react-redux";
import { IoCheckmarkSharp } from "react-icons/io5";

const MobileFilterDisplay = ({ name, value }) => {
    const { filter } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleFilterClick = (value) => {
        dispatch(setFilters({ name, value }));
    }


    return (
        <li onClick={() => handleFilterClick(value)} className={`cursor-pointer capitalize p-4 text-sm flex items-center gap-3`}>
            <div className={`inline-block border  ${filter[name]?.includes(value) ? 'bg-[#42a2a2] border-[#42a2a2]' : 'border-[#0000008a]'} `}><IoCheckmarkSharp className={`text-white`} /></div>
            {value}
        </li>
    )
}
export {MobileFilterDisplay};