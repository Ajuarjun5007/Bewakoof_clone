import 'animate.css';
import Coming_Soon from "../assets/coming_soon_1.jpeg"
function ComingSoon(){
    return(
        <>
        {/* animate__bounce */}
       
        <div className="animate__animated animate__zoomInDown relative flex items-center">
            <img src={Coming_Soon} alt="" />
            <div className="absolute backdrop-opacity-50 bg-[rgba(0,0,0,0.5)] py-4 w-full flex justify-center">
                <p className='text-white text-[40px]'>Temporarily unavailable</p>
            </div>
        </div>
        </>
    )
}
export default ComingSoon;