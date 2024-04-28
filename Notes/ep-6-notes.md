# Ep-6 Exploring the World

## What is monolithic architecture?
Earlier the apps which were developed , they were on monolith architecture as we had huge big project consisting of API code , UI code , Authentication code , database connectivity code , sending notifications code inside the same project. In the same project we had frontend written , backend written and authentication written. 
- refer this doc [monolith vs microservice](https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith#:~:text=A%20monolithic%20architecture%20is%20a%20singular%2C%20large%20computing%20network%20with,of%20the%20service%2Dside%20interface.)

## What is microservice architecture?
In microservice we have different service for different job. We have a separate backend service , separate UI service, separate Auth service, separated DB service etc. These all services combined together forms a big app. This is known as **separation of concern** and **single responsibilty principle** where each and every service has its own job

## Why do we even need state variable when we have normal variable in javascript?
If you want to make your component dynamic , something should change in your component we use local state variable from useState for that case. Whenever state variables update, react triggers reconcilation cycle(it re- renders the component).

## Why React is fast?
React is not fast because it has virtual DOM, React fibre and the new react reconciliation algorithm which finds out the difference between two virtual DOM and updates the DOM only when it is required and updates only that portion which is required that is why React is fast