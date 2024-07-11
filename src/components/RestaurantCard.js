import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    // console.log(resData);
    const {name,cuisines,
      cloudinaryImageId,avgRating,costForTwo,sla}=resData?.info;
    return(
        <div className="m-4 p-4 w-[160px] rounded-lg bg-gray-100 hover:bg-gray-200" >
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
        </div>
    )
}
export default RestaurantCard;