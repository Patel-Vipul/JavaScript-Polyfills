Array.prototype.MyReduce = function(cb,initialValue) {
    if(typeof(cb) !== "function"){
        throw new TypeError("Callback must be a function")
    }

    let startsWith;
    let accumulator;

    if(initialValue === undefined) {
        startsWith = 1;
        accumulator = this[0]
    }
    else {
        startsWith = 0
        accumulator = initialValue
    }

    for(let i=startsWith; i<this.length; i++){
        if(i in this){
            accumulator = cb(accumulator,this[i], i, this)
        }
    }

    return accumulator
}

console.log([1,2,3,4,5].MyReduce((accum, item)=>(accum+item),0))