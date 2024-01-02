import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewCard";
const  ReviewPage = ({productReviews})=>{
    const { state } = useLocation();

    const reviewData = productReviews ? productReviews : state;

    return (
        <div className="mt-[120px] ml-[100px]">
        <div className='reviewsWrapper md:container px-4 md:px-0'>
            {
               reviewData?.slice(0)?.reverse()?.map((productReview) => (
                    <ReviewCard color={productReviews ? 'grayscale invert' : ''} key={productReview._id} {...productReview} />
                ))
            }
        </div>
        </div>
    )

}
export default ReviewPage;