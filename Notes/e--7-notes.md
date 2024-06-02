# Ep-7 finding the path

## When is the useEffect is called?
useEffect is called after every render of the component. Means every time the component renders the useEffect hook will be called. 
By using the dependency array inside the useEffect hook we can change the behaviour of its render. 
- When you don't use any dependency array then useEffect will render every time the component renders.
- if the dependency array is empty [], then useEffect will be called on only initial render and just once when the component is rendered for the first time.
- When you will put something inside dependency array then it will be only called when the dependencies changes.

## Routing
- React uses React router library for routing
- Whenever we need to add route, we have to create routing configuration(information that will tell browser router that what will happen on specific path)

## What are the two types of Routing in Web App?
- Client Side Routing
- Server Side Routing