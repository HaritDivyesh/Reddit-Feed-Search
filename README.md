# Reddit Feed Search

[Click here](https://reddit-feed-search.firebaseapp.com/) to use the application.

## Development environment

The application was developed in Angular using Angular CLI(https://github.com/angular/angular-cli) v1.6.3, Node v8.9.4 and Express.js v4.16.2.

## Installation

1. git clone https://github.com/HaritDivyesh/Reddit-Feed-Search.git
2. cd Reddit-Feed-Search
3. npm install

## Execution

This can be done in two ways:

1. Using Angular CLI:
	i. ng serve
	ii. Open localhost:4000 in a browser

2. Using Node:
	i. ng build
	ii. node app.js
	iii. Open localhost:3001 in a browser

## Application features

The application uses a clean and responsive UI.

There are various types of search queries avaiable:

1. **Customized search:** Search for a subreddit you want by name, and by the number of posts you want displayed.
2. **Pre-defined search:** Just click on a popular subreddit from the choices avaiable, with a default of 10 posts.
3. **Randomized search:** If you're feeling adventurous, just click the "I'm feeling lucky!" button, and have a semi-random number of posts and subreddit displayed (randomized from a dozen pre-defined subreddits).

The posts thus displayed have the following clickable items:

1. Link to the post. This has the following properties:
	i. Image. If there's no image avaiable("self", "default", "spolier" etc. posts), a reddit image is displayed.
	ii. Title.
	iii. Creation date.
	iv. Name of OP.
2. Link to the actual reddit thread with the comments (Same as 1 for self posts).

There are errors and warning displays when queried for a non-existing subreddit, and when the number of posts available is less than requested, respectively.

## How it works

At a high level, the application uses the Reddit API to query for a subreddit's top posts. The subreddit and number of posts chosen (or randomized) are provided to the reddit search service, which sents an HTTP GET request with these two parameters to Reddit's API. If available, the response is stored, parsed, and displayed with relevant information and links.

For errors, instead of searching for a subreddit by the name provided, a regular reddit search with this name is tried. If nothing works, an appropriate error/warning is displayed otherwise.

