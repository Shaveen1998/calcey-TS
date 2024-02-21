

// or create a type 

type User = {
    readonly _id:number
    name:string;
    email:string;
    isActive:boolean;
    creditCardDetails?: number
}

function createUser(user:User): User {
    return {_id:12,name:"sds",email:"eeef",isActive:false}
}



function createCourse():{name:string,price:number}{
    return {name:"ss", price:12}
}

export {} 