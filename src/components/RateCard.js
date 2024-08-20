import CardComponent from "./CardComponent";
import { useState,useEffect } from "react";

const RateCard = () => {
    const [cards, setCards] = useState([]);

    const populateCards = () => {
        const newCards = [];
        for (let i = 1; i <= 15; i++) {
            newCards.push({
                name: `Metal ${i}`,
                price: `$${i * 10}`
            });
        }
        setCards(newCards);
    };

    useEffect(() => {
        populateCards();
    }, []);

    return (
        <div className="m-4 p-4 flex flex-wrap justify-center gap-4">
            {cards.map((card, index) => (
                <CardComponent key={index} card={card} />
            ))}
        </div>
    )
};

export default RateCard;