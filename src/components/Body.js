import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body=()=>{
    // Local State Variable-- Super powerful variable
    const [listOfRestaurants,setListOfRestaurants]=useState(resList);
 
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                 onClick={()=>{
                //Filter  logic here
                let filteredList=listOfRestaurants.filter(
                    (res)=>res.data.avgRating>4
                );
                setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[6]}/>
                <RestaurantCard resData={resList[7]}/> */}
                {listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}></RestaurantCard>)}
            </div>
        </div>
    )
}
export default Body;