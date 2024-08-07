import { render,act,screen, fireEvent } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA_NAME)
    })
})
xit("should load restaurant menu component",async()=>{
    await act(async()=>render(<BrowserRouter><Provider store={appStore}><Header/><RestaurantMenu/><Cart/></Provider></BrowserRouter>));
    const accordianHeader=screen.getByText("Recommended (14)");
    fireEvent.click(accordianHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(14);
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDoucment();
    const addBtns=screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDoucment();
    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDoucment();
    expect(screen.getAllByTestId("foodItems").length).toBe(14)
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(12)
    expect(screen.getByText("Your item cart is empty, Add items to the cart!")).toBeInTheDoucment();
    
})