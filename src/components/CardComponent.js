import { useNavigate } from "react-router-dom";

const CardComponent = ({card}) => {
    const navigate = useNavigate();
    const handleRateCard = () => {
        navigate("/scrap-sell")
    }
    return (
        <div 
            className="m-4 p-4 w-full flex sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 bg-black rounded-2xl hover:shadow-xl hover:shadow-black cursor-pointer transition-colors duration-300"
                onClick={handleRateCard}>
            <img 
                className="w-1/2 h-10 object-cover rounded-full mb-2" 
                alt="scrap-img" 
            />
            <div>
                <h3 className="text-lg text-white">{card.name}</h3>
                <h4 className="text-sm text-white">{card.price}</h4>
            </div>
        </div>
    )
}

export default CardComponent;