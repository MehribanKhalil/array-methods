// arrays

// ---------------------------------

// const arr = [3,4,9,0]

// let yaddas;

// for (let i = 0; i < arr.length; i++) {
    
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {

//             yaddas=arr[j]
//             arr[j]=arr[i]
//             arr[i]=yaddas

//             console.log(arr)
            
//         }
//     }
// }

// -------------------------------

// 1

// const eded=[1,6,8,3,2,8,90,22]

// eded.forEach(element => {
    
//     if (element%2===0) {
//         console.log(element)
//     }

// });



// 2




// 3

// const arr=[2,4,1,3,5,1,7,9]

// newArr= arr.slice(0,4)
// console.log(newArr)


//4

// const arr1=[2,3,6]
// const arr2=[3,8,9]

// const newArr=arr1.concat(arr2)
// console.log(newArr);



//5
// const arr=[1,8,9,1,2,6,1]

// const newArr=arr.filter((i)=>i===1)


// console.log(newArr)


//6

// const arr=[1,8,9,1,2,6,1]

// const newArr=arr.filter((i)=>i!==1)


// console.log(newArr)


//7

// const add = ['zuzu','lala']

// add.unshift('mehi')

// console.log(add)



//8
// const add = ['zuzu','lala']

// add.push('mor')

// console.log(add)



//9
// const add = ['zuzu','lala']

// add.shift()

// console.log(add)



//10

// const add = ['zuzu','lala']

// add.pop()

// console.log(add)


//11

// const arr=['salam',1,'sagol']

// arr.splice(1,1)

// console.log(arr)



//12

// const arr1=[1,8,3]

// const arr2=[...arr1]

// arr1[1]=5

// console.log(arr2)
// console.log(arr1)



// 13

// const arr=[1,2,4,1,3,5,1,7,9]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 !==0) {
//         console.log(i)
//     }    
// }



//14
// const arr=[1,2,4,1,3,5,1,7,9]

// for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i]%2===0) {
//         console.log(i)
//     }
// }


//15

// massivin tek indexli elementi

// const arr=[1,2,4,1,3,5,1,7,9]

// for (let i = 0; i < arr.length; i++) {
//     if (i%2!==0) {
//         console.log(arr[i])
//     }    
// }



//16
// massivin cut indexli elementi
// const arr=[1,2,4,1,3,5,1,7,9]

// for (let i = 0; i < arr.length; i++) {
//     if (i%2===0) {
//         console.log(arr[i]);
//     }    
// }


//17
// massivin en boyuk elementi

// const arr=[1,2,4,1,3,5,1,7,9]

// arr.sort((a,b)=>a-b)

// const last = arr[arr.length - 1];

// console.log(last)



//18
// massivin en kicik elementi

// const arr=[1,2,4,1,3,5,1,7,9]
// arr.sort((a,b)=>b-a)
// console.log(arr[arr.length-1])


//19

// massivin cut elementlerinden en boyuk element

// const arr=[1,2,4,1,3,5,1,7,9,8,4,2,4,1,34,2,1,3,1,1,1,32341]
// arr.sort((a,b)=>a-b)
// console.log(arr);

// for (let i = arr.length; i  > 0; i-- ){
//     if (arr[i] %2 ==0) {
//         console.log(arr[i]);
//         break
//     }
// }

// console.log(arr[arr.length-1])
