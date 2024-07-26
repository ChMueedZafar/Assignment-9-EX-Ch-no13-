// EX 13.1
function greet(name){
    console.log(`Hello, I am ${name[0]} ${name[1]}`)
}

function secondfun(fullName,callback){
    let nameArr = fullName.split()
    callback(nameArr)
}

secondfun("Abdul Mueed",greet)

// EX 13.2
let prom = new Promise((resolve, reject) => {
    resolve("start counting")
});

function counter (value){
    console.log(value);
}
prom
.then((res) => {
    counter(res)
    return "one"
})
.then((res) => {
    counter(res)
    return "Tow"
})
.then((res) => {
    counter(res)
    return "Three"
})
.catch((res) => {
    counter(res)
    return "Three"
})

// EX no 13.3

let counter = 0 
function func1(args1){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            counter++
            resolve([counter, args1])
        }, 1000)
    })
}
let func2 = async (value) => {
    console.log("counter:",counter)
    console.log("value:", value)
    let returnedValue = await func1(value)
    console.log("returnedValue:", returnedValue)
}
for (let index =1;index <= 10; index++){
    func2(index)
}