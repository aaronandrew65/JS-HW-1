// Question 1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


let findWords = (str, li) => {
    for (let i=0; i < li.length; i++){
        if (str.toLowerCase().includes(li[i].toLowerCase())){
            console.log(`${li[i]}: Matched dog_name`)
        } else {
            console.log(`${li[i]}: No Matches`)
        }
    }
}


//Call method here with parameters
let ans = findWords(dog_string, dog_names);

// Question 2
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

let replaceEvens = (arr) => {
    for (let i=0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i,1,'even index')
        }
    } return arr
}

let arr2 = replaceEvens(arr);
console.log(arr2)