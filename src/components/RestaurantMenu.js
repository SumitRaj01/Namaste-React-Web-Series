import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{

    const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId)

    if(resInfo===null)return <Shimmer></Shimmer>
    const {name,cuisines,cloudinaryImageId,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log('itemCards',itemCards);
    return (
        <div className="menu"> 
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} {costForTwoMessage}</p>
        <h3>Menu</h3>
        <ul>
        {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            {/* <li>
            {itemCards[0].card.info.name}
            </li>
            <li>
            {itemCards[1].card.info.name}
            </li>
            <li>
            {itemCards[2].card.info.name}
            </li> */}
        </ul>
        </div>
    )  
}

export default RestaurantMenu;