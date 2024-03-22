# Ep-5 Let's get hooked

/**
 * Header
 * ----Logo
 * ----Nav Items
 * Body
 * ----Search
 * ----RestaurantContainer
 * ----RestaurantCard
 * ------Img
 * ------Name of res, Star rating, cuisine, delivery time
 * Footer
 * ----Copyright
 * ----Links
 * ----Address
 * ----Contact
 */

 **Never ever keep hard coded data in the component file, keep the hard coded data inside the utility folder like utils or config folder.**

 ## What are the two different types of exports?
 There are two types of export 
 - default export
 - named export
 In a file you can have only one default export , to export multiple things we use named exports by just writing export in front of var , component const etc.
 To import named export use curly braces like in RestaurantCard.js Component. In default export we do not use {}.

 ```export default Component;```
 ```import Component from "path";```

 ```export const Component;```
 ```import {Component} from "path";```

 ## What is React hooks?
 These are normal JS functions written by react developers. They are kind of utility function.
 *useState() and useEffect() are two of the most used hooks in React*.

 -useState() - Superpowerful state Variables in React. Whenever a state variable updates or changes, React re renders the component

 ## What is Diffing Algorithm?
 [Diffing Algorithm](https://legacy.reactjs.org/docs/reconciliation.html#the-diffing-algorithm) finds out the difference between two VITUAL DOM, the updated virtual DOM and the previous virtual DOM and it calculated the differences between the both DOM and it actually updates the DOM after calculating on every render cycle.

 - Read about [React fibre](https://github.com/acdlite/react-fiber-architecture)
 - Read abput [Virtual DOM](https://legacy.reactjs.org/docs/faq-internals.html#:~:text=What%20is%20the%20Virtual%20DOM,This%20process%20is%20called%20reconciliation.)