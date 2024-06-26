import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    // Local State Variable-- Super powerful variable
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("");
    console.log("Body rendered");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        //To host without cors plugin use this
        // const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        // console.log( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        // setListOfRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false) return( <h1>Looks like you are offline!! Please check your internet connection</h1>)

    //Conditional rendering
    // if(listOfRestaurants.length===0){
    //     return <Shimmer></Shimmer>
    // }
 
    return listOfRestaurants.length===0?<Shimmer></Shimmer>:(
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button onClick={()=>{
                    //Filter the restaurant cards and update the UI
                    //searchText
                    console.log(searchText);
                    const filteredRestaurant=listOfRestaurants.filter(
              (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
                    setFilteredRestaurant(filteredRestaurant);   
                }}>Search</button>
            </div>
                <button className="filter-btn"
                 onClick={()=>{
                //Filter  logic here
                let filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant=>(<Link key={restaurant.info?.id} to={"/restaurants/" +restaurant.info?.id} ><RestaurantCard  resData={restaurant}></RestaurantCard></Link>))}
            </div> 
        </div>
    )
}
export default Body;