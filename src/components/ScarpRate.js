import Header from "./Header";
import RateCard from "./RateCard";
import SearchRate from "./SearchRate";

const ScarpRate = () => {
    return (
        <div>
            <Header />
            <SearchRate />
            <RateCard />
            <ul className="m-4 p-4 text-[#0cc0df] text-lg">
                <li>Notes</li>
                <ol className="mx-4 px-4">
                    <li>
                        - The prices may vary with fluctuation in Scrap Market.
                    </li>
                    <li>
                        - Prices may be ifferent for bulk pickups. Call us at +91-8252587109 to get a quote for bulk pickup.
                    </li>
                </ol>
            </ul>
        </div>
    )
};

export default ScarpRate;