class Recipe{
    public id:number
    public ratings:number;
    public ingredients:String

    constructor(id:number, ratings:number, ingredients:String){
        this.id = id;
        this.ingredients=ingredients;
        this.ratings=ratings
    }
}

export default Recipe
//maps are good for quick retrieval and real time scenarios