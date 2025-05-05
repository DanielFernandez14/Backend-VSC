import {recipes} from "./recipes.js";

const ingredients = process.argv[2];



console.log(ingredients, "<- nombre del ingrediente que se busca")

const founRecipes = recipes.filter(recipe => recipe.ingredients.includes(ingredients));

console.log(founRecipes)
