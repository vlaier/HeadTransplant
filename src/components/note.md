## New dawn

I little bit of an apocalypse is happening right now but it will be all for the better. I deleted a lot of code and did some rewriting plus GraphQL is here so changes changes changes. I finallly started working on better folder structure (see products folder) and started to give meaningfull types to my objects instead of any :>

## To do

- Start research for authentication - [auth](https://woographql.com/guides/understanding-the-user-session)
- Start writing cart components
- Redo infinite scrolling products component
- Redo pagination
- Redo sorting
- Redo filtering

## My problems with infinite scrolling

I continue to think that the infinite scrolling is a great idea and I still want it but I'm starting to have problem with it. It's hard to seprate logic from the description of the looks. Should I call for products inside a component or should products be given as a props? If I would call for a products inside of a components all my problems seems to go away but something doesn't seems right with that solution. On the other hand if I would choose to take products as a prop there is a problem with loading more products I would have to send information from component (child) to a page(parent) that there is a need to load more products this solution seems to be stragne as weel ahhh :< I think I will procrastinate on redoing Infinite Scrolling for now as it seems I don't have any good solutions for my problems.

## My problem with nesting

Just came to a realisation my immageArray (should change name to galleryImages btw) will have a nesting problem. The galleryImages will contain edges and nodes. I should probably think about some kind of a deep checking inside a graphqlDataToProductsData function so I won't have this problem with any component in the future.
While thinking about it I realised that it's probably a very common problem because of that it probably already have a solution I should look for a built in functions.
It seems that I was incorrect after spending couple of minutes doing google searches I was unable to find a solution. I have to come back to the idea of writing my own deep check function for nodes and edges that simplyfies returned object to an object I can actually work with inside of a React components. I will start googling deep object checks now.  
[Dealing with API on the frontend](https://blog.xmartlabs.com/2020/07/09/frontend-architecture-and-best-practices/)
I think I might want to do something similar to that, maybe inside of an api folder structure I could create controllers that would adapt graphQL data to my personal needs. As author of the article notices practice of creating API controllers seems to add extra layer of protection against changes that might be given to an API in the future (ex: if someone change key from name to productName I would have to make change only in my controller instead of whole app and risking changing wrong variables). I could have my graphql respones denested inside my controller it's worth to take a look at this solution.

## What will happen on 28 of february?

I don't think anymore that starting the project from a scratch is a good idea but I think there is a need for a change. I want to start a new next.js project a configure everything inside of it properly and then copy all of the files to the new project and continue from there

## To read

- [Article 1](https://aroundreact.com/react-best-practices-for-software-design-and-architecture/)
