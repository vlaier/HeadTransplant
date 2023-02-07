## How to do query prediction?

    - My one idea is to have local array of all product names check the query against them and do 3 requests for the most similar product names.

## Things to do:

    - Remove Searchbar as a seprate component
    - Rewrite Searchbar component
    - Change search logic to make multiple smaller requests but with diffrent parameters.
    - Add skeleton loading to searchbar results.

## Notes to self:

    - God damn it man do something about types in this project ;<
    - In the future I'd like to show your most recent search quries as suggestions as a placeholder data. List would be stored in localStorage.

Much of the searchbar is done but there is a problem with state, I want to avoid props drilling and I'm considering adding SearchContext to look up the queries. If I do search results page it could also come in handy.

I like the idea of sending props to function and then destructuring it inside a function with giving default values like in SearchItem
