import User from './User'
import UserClass from './UserClass';
import React from 'react';
import UserContext from '../utils/UserContext';
class About extends React.Component{
    constructor(props){
    super(props)
    // console.log('Parent Constructor');
    }
    componentDidMount(){
        // console.log('Parent Component did mount');
    }
    render(){
        // console.log('Parent render');
        return(
        <div>
        <h1>About Class Component</h1>
        <div>LoggedIn User
        <UserContext.Consumer>
            {({loggedInUser})=><h1 className='text-xl font-bold'>{loggedInUser}</h1>}
        </UserContext.Consumer>
        </div>
        <h2>This is namaste react web series</h2>
        <UserClass name={"First "} location={"Dehradun Class"}/>
    </div>
        )
    }
}
// const About=()=>{
//     return<div>
//         <h1>About</h1>
//         <h2>This is namaste react web series</h2>
//         <UserClass name={"Akshay Saini (class)"} location={"Dehradun Class"}/>
//     </div>
// }
export default About;