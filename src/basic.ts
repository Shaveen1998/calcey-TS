let myArray:Number[] = [1,2,3,4,5,6]

for(let i of myArray){
    console.log(i)
}

//tuple
let myTuple:[String, Number] = ["RTX600",4512]

//interface

class Animal{
    public name:String;
    public country:String

    constructor(n:String, c:String){
        this.name= n;
        this.country = c
    }

    public getInfo():String{
        return this.name + 'is from' + this.country
    }
}