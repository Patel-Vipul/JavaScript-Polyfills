Array.prototype.myForEach = function(cb) {
    if(typeof(cb) !== "function"){
        throw new TypeError("Callback must be a Function")
    }

    for(let i=0; i<this.length; i++){
        if(!(i in this)) continue;
        cb(this[i], i, this)
    }

}

const arr = [1,2,,4,5]
let sum  = 0
arr.forEach(item => console.log(item))
arr.myForEach(item => console.log(item))

arr.myForEach(item => sum+=item)
console.log(sum)