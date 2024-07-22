import React,{lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

//not using keys(not acceptable)<<<<index as key<<<<<<unique id(best practice)
//Chunking
//Code Splitting 
//Dynamic Bundling
//lazy loading
//On demand loading
const Grocery=lazy(()=>import("./components/Grocery"))
const About=lazy(()=>import("./components/About"))
const AppLayout=()=>{
 const [userName,setUserName]=useState();
    //Authentication
    useEffect(()=>{
        //make an API call and send username and password
        const data={
            name:"Akshay Saini"  
        };
        setUserName(data.name)
    },[])
    return(
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header></Header>
            <Outlet/>
            {/* <Body/> */}
        </div>
        </UserContext.Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading About us..</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    },
   
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);