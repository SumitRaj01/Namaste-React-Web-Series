import User from './User'
import UserClass from './UserClass';
import React from 'react';
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