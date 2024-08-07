import RestaurantCard,{withHighRatedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    // Local State Variable-- Super powerful variable
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("");
    const RestaurantCardHighRated=withHighRatedLabel(RestaurantCard)
    console.log("Body rendered",listOfRestaurants);
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
    const {loggedInUser,setUserName}=useContext(UserContext)
    return listOfRestaurants.length===0?<Shimmer></Shimmer>:(
        <div className="body">
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" data-testid="searchInput" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                <button className="px-4 py-1 bg-green-100 m-4 rounded-md" onClick={()=>{
                    //Filter the restaurant cards and update the UI
                    //searchText
                    console.log(searchText);
                    const filteredRestaurant=listOfRestaurants.filter(
              (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
                    setFilteredRestaurant(filteredRestaurant);   
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-md"
                 onClick={()=>{
                //Filter  logic here
                let filteredList=listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4
                );
                setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <label>UserName</label>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map(restaurant=>(<Link key={restaurant.info?.id} to={"/restaurants/" +restaurant.info?.id} >
                {/**if the avgRating is beyond 4.5 add High Rated hotel label to it */
                restaurant.info.avgRating>=4.5?(<RestaurantCardHighRated resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/>)
                }
                </Link>))}
            </div> 
        </div>
    )
}
export default Body;