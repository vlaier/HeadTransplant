## How to do query prediction?

    - My one idea is to have local array of all product names check the query against them and do 3 requests for the most similar product names.

## Things to do:

    - Remove Searchbar as a seprate component
    - Rewrite Searchbar component
    - Change search logic to make multiple smaller requests but with diffrent parameters.
    - Add skeleton loading to searchbar results.

## Would be nice:

    - It would be nice if every SearchItem had it's own loading state.

## Notes to self:

    - God damn it man do something about types in this project ;<
    - In the future I'd like to show your most recent search quries as suggestions as a placeholder data. List would be stored in localStorage.

## Entries

    1. Much of the searchbar is done but there is a problem with state, I want to avoid props drilling and I'm considering adding SearchContext to look up the queries. If I do search results page it could also come in handy.

    2. I like the idea of sending props to function and then destructuring it inside a function with giving default values like in SearchItem

    3. Headless UI joins the game. Let's make a fun SearchBar and see what headless ui really has to offer.

    4. Storybook looks like a handy tool will try to use it for creating searchbar.

    5. Storybook might be cool but I couldn't use it after trying to configure it with tailwindcss. Decided to go back before installing storybook and try again until success. ref.current = 1

    6. ref.current = 2

    7. This time I'm using storybook guide up to the dot

    8. Ok, ref.current = 3. This time I will use this https://storybook.js.org/addons/@storybook/addon-postcss

    9. Added middle step this time and commited after configurating storybook but before adding tailwind support.

    10. Stopped counting how many times I have started over, but finally it somehows started to magically work YEAAAH! This projects works on duct tape and glue right now it needs some cleaning up and I hope storybook will help me with that.
    11. Pretty quick decision Storybook is not for me right now.
