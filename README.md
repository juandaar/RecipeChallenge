# Recipe Challenge
The Recipe Challenge is an application made in NodeJS to return a list of recipes from some ingredients.

## Summary 
The Recipe challenge management an integration with two externals APIS: [Recipe Puppy API](http://www.recipepuppy.com/about/api/) that lets you search recipes through recipe puppy databases by ingredients, and [Giphy API](https://developers.giphy.com/docs/) , the first and largest GIF search engine.

## Prerequisite
[Node.js](https://nodejs.org/pt-br/download/)

[GIT](https://git-scm.com/downloads)

### Optional

[Docker](https://www.docker.com/get-started)

## Installation

### Environment Variables (Mandatory)
```
APP_PORT= Port number
PUPPY_URL= http://www.recipepuppy.com/api/

GIPHY_API_TOKEN=TOKEN *
```
* you can create your Giphy API Key [here](https://developers.giphy.com/docs/api#quick-start-guide)
### standalone 
Recipe Challenge was implemented on npm version **6.14.6** and node version **v12.18.4**.

1. Clone the [repository](https://github.com/juandaar/RecipeChallenge)
```
 git clone https://github.com/juandaar/RecipeChallenge.git
```
2. Enter in the project folder
```
cd RecipeChallenge or cd ABSOLUTE_ROUTE
```
3. Install the dependencies by npm
```
npm install
```
4. Run the application
```
npm start
```
or
```
npm run start-dev
```

### Docker
1. Clone the [repository](https://github.com/juandaar/RecipeChallenge)
```
git clone https://github.com/juandaar/RecipeChallenge.git
```
2. Enter in the project folder
```
cd RecipeChallenge or cd ABSOLUTE_ROUTE
```
3. Create the image
```
 docker build -t image_name .
```
4. Show images
```
docker image lists
```
5. Run the image
```
docker run -p 3000:3000 image_name:latest
```
## Services
### Request

This API only has an endpoint (for now)
`http://{HOST}/recipes?i={ingredient_1},{ingredient_2}`

Example:
`http://localhost/recipes?i=onions,tomato`

#### Reply
```
{
    "keywords": [
        "onions",
        "tomato"
    ],
    "recipes": [
        {
            "title": "ali's amazing bruschetta",
            "ingredients": [
                "olive oil",
                "onions",
                "parmesan cheese",
                "tomato"
            ],
            "link": "http://allrecipes.com/Recipe/Alis-Amazing-Bruschetta/Detail.aspx",
            "gif": "https://giphy.com/gifs/spotify-wow-rob-riggle-sarah-tiana-UQsAGZAkai8xsQxCmu"
        },
        {
            "title": "basic guacamole dip",
            "ingredients": [
                "avocado",
                "lemon juice",
                "onions",
                "tomato"
            ],
            "link": "http://allrecipes.com/Recipe/Basic-Guacamole-Dip/Detail.aspx",
            "gif": "https://giphy.com/gifs/guacamole-I3eVhMpz8hns4"
        }
    ]
}
```

## Testing
you should be in the proyect folder:
```
npm test
```
### Expected response
```
   /recipes?i=ingredient - 200
    √ GET onion recipes 

  /recipes?i=1,2,3 - 200
    √ GET recipes with onions, carrots and tomatoes as ingredients 

  /recipes -422
    √ HTTP CODE 422 for not sending ingredients

  /recipes?i=1,2,3,4 -422
    √ HTTP CODE 422 for sending more than 3 ingredients

  /pizza -422
    √ HTTP CODE 404

  orderRecipes function
    √ Return the recipes list in alphabetical order

  Search Giphy
    √ Search giphy return a URL 

  recipeSearch puppyApi
    √ GET recipes by ingredients from puppy API 


  8 passing 
```




