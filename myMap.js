Array.prototype.myMap = function(cb) {
    if(typeof(cb) !== "function"){
        throw new TypeError("Callback must be a function")
    }

    const result = new Array(this.length)

    for(let i=0; i<this.length; i++){
        if(i in this) {
            result[i] = cb(this[i], i, this)
        }
    }

    return result
}

console.log([1,2,3,4,5].myMap((item)=> {item**2}))