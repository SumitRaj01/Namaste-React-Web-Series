import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {loggedInUser}=useContext(UserContext)
    console.log(loggedInUser);
    // console.log(resData);
    const {name,cuisines,
      cloudinaryImageId,avgRating,costForTwo,sla}=resData?.info;
    return(
        <div data-testid="resCard" className="m-4 p-4 w-[160px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
        className="rounded-lg" 
        src={ CDN_URL +
          cloudinaryImageId}
          alt="res-logo" />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
        <h4>USer: {loggedInUser}</h4>
        </div>
    )
}
//Higher Order Component
// input - Restaurant Card==> Restaturant Card High Rated hotel
export const withHighRatedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >High Rated Hotel </label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;