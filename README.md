# Northcoders News - Front End Project

## Project Summary
This front end app utilises the Northcoders News API - Back End Project which is a restful API. The app has been built in React.js and makes use of custom components and state to render the pages. 
Users are able to look through the articles and have the option to filter the topics and sort by certain queries. Users are also able to view a specific article and vote on the article as well as posting a comment or deleting previous comments, these are optimistically rendered first before the API call has completed to provide instant user feedback.

### Hosted link:
[https://northcodersnews-frontend-project.netlify.app/](https://northcodersnews-frontend-project.netlify.app/)

### Github link:
[https://github.com/SamAshurst/nc-news-frontend-project](https://github.com/SamAshurst/nc-news-frontend-project)

### Backend Project that this app uses:
[https://github.com/SamAshurst/Project-NC-News](https://github.com/SamAshurst/Project-NC-News)

## How to Install
First please make sure that you are running Node on version 17.0 or above.
This repo can be forked and your own Github account and then you can clone it to your machine.

In the root directory of your cloned repo run `npm i` to install the dependencies.

Once the dependencies have installed you can run `npm start` and this will run the app in development mode where you can view it in your browser at [http://localhost:3000](http://localhost:3000), if it doesn’t open for you automatically.

If you wish to host your app you can run `npm run build` this will optimise the build for best performance and ‘bundle’ your code using Webpack and Babel.
