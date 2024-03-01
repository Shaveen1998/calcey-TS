"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recipe {
    constructor(id, ratings, ingredients) {
        this.id = id;
        this.ingredients = ingredients;
        this.ratings = ratings;
    }
}
exports.default = Recipe;
//maps are good for quick retrieval and real time scenarios
