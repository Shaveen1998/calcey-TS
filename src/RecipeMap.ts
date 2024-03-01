import Recipe from "./Recipe";

class RecipeHashMap{
    private recipeMap:Map<number, Recipe>;

    constructor(){
        this.recipeMap = new Map<number, Recipe>()
    }

    addRecipe(recipe:Recipe):void{ //O(1)
        this.recipeMap.set(recipe.id, recipe)
    }

    getRecipeById(id:number):Recipe|undefined { //O(1)
        return this.recipeMap.get(id);
    }

    getAllRecipes():Recipe[]{ //O(n)
        return Array.from(this.recipeMap.values())
    }
}

const recipe1 = new Recipe(1,4.5,"Tomatoes,onions,garlic");
const recipe2 = new Recipe(2,3.3, "Chicken, bellpeper, spices");


const recipeHashMap = new RecipeHashMap();

recipeHashMap.addRecipe(recipe1);
recipeHashMap.addRecipe(recipe2);

const retrieveRecipe = recipeHashMap.getRecipeById(1);

if(retrieveRecipe){
    console.log("Recipe Found: ", retrieveRecipe);

}else{
    console.log("Recipe Not Found");
}

const allRecipes = recipeHashMap.getAllRecipes();
console.log("All recipes", allRecipes)