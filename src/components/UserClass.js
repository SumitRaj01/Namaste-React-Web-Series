import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name:'Dummy User',
                location:'Default',
            }
        }
        console.log(this.props.name +"Child Constructor");
    }
    async componentDidMount(){
        console.log(this.props.name +'Child Component did mount');
        //API calls
        const data= await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log('Component will Unmount');
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo
        console.log(this.props.name +'ChildRender');
        return(
        <div className="user-card"> 
        <img src={avatar_url}  />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @TimApple </h4>
        </div>
        )
    }
}
export default UserClass;


/**
 * 
 * --MOUNTING---
 * 
 * Constructor(dummy)
 * Render(dummy)
 *   <HTML Dummy>
 * component Did Mount
 *  <API call>
 *  <this.setState> --> State Variable is updated
 * 
 * --UPDATE
 * render(API data)
 * <HTML (new API data>)
 * 
 * Component Did Update
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */