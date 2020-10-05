#Recipe Challenge
The Recipe Challenge is an application made in NodeJS to return a list of recipes from some ingredients.

## Summary 
The Recipe challenge management an integration with two externals APIS: [Recipe Puppy API](http://www.recipepuppy.com/about/api/) that lets you search  through recipe puppy databases by ingredients, and [Giphy API](https://developers.giphy.com/docs/) , the first and largest GIF search engine.

## Prerequisite
[Node.js](https://nodejs.org/pt-br/download/)
[GIT] (https://git-scm.com/downloads)

## Installation
### Environment Variables
APP_PORT=3000 
PUPPY_URL=http://www.recipepuppy.com/api/
GIPHY_API_TOKEN=RDsg9MYu12IDx3HJiBTZAvSQc4qeeUYO*
* you can create your Giphy API Key [here](https://developers.giphy.com/docs/api#quick-start-guide)

##Services
###Search Recipes
###Request
This API only has and endpoint (for now)
`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

Example:

`http://127.0.0.1/recipes/?i=onion,tomato`

#### Reply
```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}
```



