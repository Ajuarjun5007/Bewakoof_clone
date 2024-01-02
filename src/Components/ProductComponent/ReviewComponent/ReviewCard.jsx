import shield from  "../../../assets/green-shield.svg"
import reviewStar from  "../../../assets/ash-star.webp"
import userImage from  "../../../assets/pexels-review-stock.webp"

const ReviewCard = ({ ratings, text, color }) => {
    return (
        <div className="reviewWrapper py-3 border-b-2">
            <div className="flex items-center gap-3">
                <div className="flex gap-1 items-center">
                    {
                        [...Array(5)]?.map((_, i) => (
                            <img className={`${i + 1 > ratings ? 'grayscale' : color} w-3 h-3 object-cover`} key={i} src={reviewStar} alt="" />
                        ))
                    }
                </div>
                <div className="flex gap-1 items-center text-[#2ca003] bg-[#f4faf2] px-1">
                    <img src={shield} alt="" />
                    <p className="text-[10px]">Verified Buyer</p>
                </div>
            </div>
            <div className="reviewText text-xs opacity-70 mt-2">{text}</div>
            <div className="reviewImages my-3">
                <img className="w-16 object-cover aspect-square rounded-md" src={userImage} alt="" />
            </div>

        </div>
    )
}

export default ReviewCard;