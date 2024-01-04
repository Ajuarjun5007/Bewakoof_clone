import { memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productReview } from '../ProductService';
import ReviewContainer from './ReviewContiner';
// import { useSelector } from 'react-redux';
// import useApi from '../../Hooks/useApi';

function ReviewWrapper(props){
    const [selectedProdTab, setSelectedProdTab] = useState(true);
    const [productReviews,setProductReviews] = useState([]);
    const selectProdReview = () => setSelectedProdTab(true);
    const selectBrandReview = () => setSelectedProdTab(false);
    const user  =JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();


    useEffect(() => {
        productReview(productId).then((res) => {
          setProductReviews(res?.data);
        });
      }, []);
      const openWriteReview = () => {
        if(localStorage.getItem("userInfo")){
            navigate(`/ReviewEditPage/${productId}`, {state: productReviews });
        }else{
            navigate("/LoginPage");
        }
    }
    const {productId} = props;
    const handleViewAllReviews = () => {
        navigate(`/ReviewPage/${productId}`, { state: productReviews });
    }
       
    const alreadyReviewed = productReviews.some((review) => user?._id === review?.user);


      
    return(
        <>
          <div className=''>
            <div className="tab-wrapper flex items-center cursor-pointer h-11 text-center font-bold text-sm text-[#8f98a9]">
                <button  className={`element flex-1 flex items-center 
                justify-center h-full border-b-4 ${selectedProdTab ? 'border-b-[#ffd232] text-[#292d35]' : ''}`}>
                    <h2 >PRODUCT REVIEWS</h2>
                </button>
                <button disabled onClick={selectBrandReview} className={`element disabled flex-1 flex 
                items-center justify-center cursor-no-drop h-full border-b-4 ${selectedProdTab ? '' : 'border-b-[#ffd232] text-[#292d35]'}`}>
                    <h2 className=''>BRAND REVIEWS</h2>
                </button>
            </div>
            <div className="ratingsWrapper w-full">
                {!alreadyReviewed &&
                    (<div className="noRevsWrpr border-b flex items-center justify-between gap-3 py-2">
                        <p className='text-[#000000b3] text-xs'>{productReviews.length === 0 ? `Be the first one to review this product.` : 'Review the product'}</p>
                        <button onClick={openWriteReview} className='font-semibold px-4 py-2 rounded-md border text-sm text-[#42a2a2] hover:shadow-md transition-all'>RATE</button>
                    </div>)}
                {
                    productReviews.length > 0 &&
                    <div className='reviewsWrapper'>
                        <ReviewContainer reviews={productReviews.slice(0, 2)} />
                        <button onClick={handleViewAllReviews} className='border my-4 border-[#207bb4] flex rounded-md w-4/5 m-auto'>
                            <div className='text-[#207bb4] text-sm font-semibold px-5 py-3 m-auto'>View All Reviews</div>
                        </button>
                    </div>
                }

            </div>
        </div>
        </>
    )
}
export default ReviewWrapper;