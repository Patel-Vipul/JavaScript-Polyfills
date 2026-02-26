const num = [1,2,3,4,5,6,7,8,,9,10]

const evenNumber = num.filter((value)=>(value%2===0))

// console.log(num.length)
// console.log(evenNumber.length)
// console.log(evenNumber)

Array.prototype.myFilter = function(cb) {
    if(typeof(cb) !== "function"){
        throw new TypeError("Callback must be a Function")
    }

    let result = []
    let bool = false
    for(let i=0; i<this.length; i++){
        if(i in this){
            bool = (cb(this[i], i, this))
            if(bool) result.push(this[i])
        }

    }

    return result
}

const oddNumber = num.myFilter((n)=>(n%2!==0))
console.log(oddNumber)
console.log(oddNumber.length)