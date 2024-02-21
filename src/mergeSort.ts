function mergeSort(arr:number[]):number[]{

    if(arr.length<=1){
        return arr
    }

 
    let middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))

    return merge(left, right);
}

function merge(left:number[], right:number[]):number[]{
    var result: number[] = [];

    var i:number = 0;
    var j: number = 0;

    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i])
            i++
        }else{
        result.push(right[j])
            j++
        }
    }


    return result.concat(left.slice(i).concat(right.slice(j)))
    
}

let unsortedArray = [18,27,43,3,9,82,10]

console.log(mergeSort(unsortedArray))