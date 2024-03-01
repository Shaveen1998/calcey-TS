"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Recipe_1 = require("./Recipe");
class RecipeHashMap {
    constructor() {
        this.recipeMap = new Map();
    }
    addRecipe(recipe) {
        this.recipeMap.set(recipe.id, recipe);
    }
    getRecipeById(id) {
        return this.recipeMap.get(id);
    }
    getAllRecipes() {
        return Array.from(this.recipeMap.values());
    }
}
const recipe1 = new Recipe_1.default(1, 4.5, "Tomatoes,onions,garlic");
const recipe2 = new Recipe_1.default(2, 3.3, "Chicken, bellpeper, spices");
const recipeHashMap = new RecipeHashMap();
recipeHashMap.addRecipe(recipe1);
recipeHashMap.addRecipe(recipe2);
const retrieveRecipe = recipeHashMap.getRecipeById(1);
if (retrieveRecipe) {
    console.log("Recipe Found: ", retrieveRecipe);
}
else {
    console.log("Recipe Not Found");
}
const allRecipes = recipeHashMap.getAllRecipes();
console.log("All recipes", allRecipes);
