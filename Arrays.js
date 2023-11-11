// arrays []
/*
let arr = [1, 'Hello', false, [1,2,3],
{
    name: 'Akshay',
    age : 23
},
function(){
    console.log('Akshay ');
}];

console.log(arr[3][1]); // 2
arr[5](); // call inside function of array


//Assessing Array Function

const fruits =['Mango', 'pineapple', 'Apple']

console.log(fruits[2]); // it calls only index 2 element

//Adding Element In array

//1) PUSH

let myarr =[1,2,3,4]

myarr.push(55); //adds element at end
console.log(myarr);

//2) unshift()

myarr.unshift(0);//insert at start of array 
console.log(myarr)


//Change Elements in array (Modify or Add New)

let city= ['pune', 'latur', 'omerga']

city[1]='Lonavla' //Change city latur at i=1 to 'Lonavala'
console.log(city)
city[3]= 'Mumbai' //Add mumbai in city at i=3
city[5]= 'Mumbai' //Add mumbai in city at i=6 **in betn 4,5 show - undefined
console.log(city);


//Removing Elements From Array

//1) POP

city.pop(); //Remove From Last
console.log(city);

city.shift(); // it will remove from start
let x =city.shift(); // it shows removed last item
console.log(x);

//length of array
console.log(city.length); //it won't count empty elements
*/

/*
1) slice();  // in thst(start,end) slect from which index to end at which index **in that (index,element)
Provides a shallow duplicate of a part of an array.
const subArr = arr.slice(1, 3); // here index- 1 and element-3 so it'll display from 1 to element 3

2)splice(); // (index , howmany, index1 .....index'x');
Inserts and/or deletes elements within an array.
arr.splice(1, 0, 2, 3);

3)indexOf()
Gives back the first index where a specified element is located.
const index = arr.indexOf(3);

4)lastIndexOf()
Supplies the final index where a particular element is situated.
const lastIndex = arr.lastIndexOf(3);

5) includes()
Establishes if an array contains a specific element.
const isIncluded = arr.includes(2);

6)find()
Offers the initial element in the array that meets a certain criterion.
const found = arr.find(num => num > 2);

7)filter()
Forms a new array containing elements that pass a certain test.
const filtered = arr.filter(num => num > 2);

8)map()
Produces a new array by applying a function to each array element.
const doubled = arr.map(num => num * 2);

9)reduce()
Condenses an array into a single value using a function.
const sum = arr.reduce((acc, num) => acc + num, 0);

10)concat()
Unites two or more arrays into a fresh array.
const merged = arr1.concat(arr2);

11)join()
Combines all elements of an array into a single string.
const str = arr.join(', ');

12)reverse()
Inverts the sequence of the elements within an array.
arr.reverse();

*/
/*
let aa= [1,2,3,'hello',true,'india']
let ab= [4,5,6,'akshay',false,'mh']

//aa.reverse()  //reverse array
const str = aa.join(',') //combine as string
let connect = aa.concat(ab); //connect aa with ab
const sum = aa.reduce((acc, num) => acc + num, 0); //*
const doubled = aa.map(num => num * 2); 
console.log(aa);
console.log(str);
connect.sort(); // here sorting arrays
console.log(connect)
console.log(sum)
console.log(doubled)
*/

// NEW
/*
let numbers = [3, 5, 1, 8, 2];
numbers.sort();
let nan =numbers.slice(1,3)
console.log(nan)
let index = numbers.indexOf(2);
console.log(index);

numbers.sort();

numbers.push(3,5);
console.log(numbers);

let moreNums= [55,66]
let connect2= numbers.concat(moreNums);
console.log(connect2);

let cc = connect2.includes(55);
console.log(cc);

let cv = connect2.find(numbers=>numbers>55);
console.log(cv)


let moto = ['g52', 'motorola','tabA','iphone14']// here we want to add element at index 2('tabA')without deleting it
moto.splice(2,0, 'IdeapadS','ThinkpadS'); //if we want to delete add (index, **howmany we want to delete)
moto.splice(3,1); // here thinkpad will delete as index no-3

console.log(moto);

let sub=moto.indexOf('tabA');
let indexL =numbers.lastIndexOf(2); //give index no of that particular element.
console.log(indexL);
console.log(sub);

let inClude= moto.includes('iphone14'); //Boolean if no or string present in main array it'll give true otherwise false
console.log(inClude);
*/

//Working As Array[{}]

//Arrays in JavaScript are implemented as objects and their indices are treated as object keys.
//any modification to it will also be reflected in an original array.

/*
let arr = [{name :'Akshay'},{age:23}]
//let arr1 = arr.push({surName:'Mugale'}); it showing no.
let arr1 = arr;
//arr1.push({salary:'120000'}); 
//OR for adding
arr1.splice(1,0,{surName:'Mugale'})
console.log(arr);
console.log(arr1); 
arr[0].name = 'Ajay'; //it'll change name from akshay-Ajay
console.log(arr1); 


//You can also store values by passing a named key in an array.
let arr2 = ['h', 'e'];
arr2.name1 = 'John';
arr2.salary = 120000;
console.log(arr2); // ["h", "e"]

console.log(arr2.name1); // "John"
console.log(arr2['salary']); // "John"


//Practise -

const fruit =['apple','banana','oranges','kiwi']
fruit.push('grapes')
console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.shift()
console.log(fruit);


//multidimensionl array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log(matrix);

  let x = [
    ['Jack', 24],
    ['Sara', 25],
    ['Peter', 26]
    ];
    
    // accessing the first item
    console.log(x[0]); // ["Jack", 24]
    
    // accessing the first item of the first inner array
    console.log(x[0][0]); // Jack
    
    // accessing the second item of the third inner array
    console.log(x[1][1]); // 25

    let studentsData = [['Jak', 23], ['Sara', 24],];
    studentsData[1][2] = 'hello';
    studentsData[1].push('Hello')
    console.log(studentsData); // [["Jack", 23], ["Sara", 24, "hello"]]

    let studentData =[['Akshay',23],["ajay",25]]

    studentData.forEach((student) => {
        student.forEach((data) =>{
            
        console.log(data) // iterating over student
        });

   });


   let studentData2 = [['Akkie',26],['Ajju',26]];

   for(let i of studentData2){
    for(let j of i){
         console.log(j);
    }
   }


   let arrr = [11,12,22,28,33,26,44,55]
   
   var newArr = arrr.filter((item)=>{ // filter which are divided by 11/11 ==0
    return item % 11 ==0
   } );

   console.log(newArr)


   // accumulator and currentvalue = (acc, curr)
   
   // Currentvalue - Actual elments eg. x= [1,2,"Hello","Wprld"]
   // accumulator (initially 0) - final value ** we basiclay display accumulator in use of (acc, curr)

   let sumOfall= arrr.reduce((acc, curr)=>{
    return acc + curr  // 0+ 11 + 12 +22 +......
   });

   console.log(sumOfall) ; // total of arrr stored in somOfall == 231

   function findEleven(item){
    return item % 11 == 0
   }

   //or for function side
   let findUse = arrr.find((acc, curr)=>{
    return acc +curr
   })

   console.log('here find codee:')
   console.log(findUse)

   var newFind = arrr.find(findEleven);
   console.log('Find')
   console.log(newFind);

    console.log(matrix);
    matrix[1][2]= 222
    console.log(matrix);

    matrix.splice(1,0,[23,22]);
    console.log(matrix)
*/

    let mulArr = new Array();
    
    mulArr.push([11,22,33])
    mulArr.push([22,33,44])
    mulArr.push([33,44,55])

    console.log(mulArr);

    mulArr.push([100,200,300]);
    console.log(mulArr)

   mulArr[1][1] = 'New Element' //Row index 1 ,column index 1
    console.log(mulArr);

    console.log(mulArr[1])
    //mulArr[1].splice(2,1)

   // mulArr.splice(1,0, [0,0,0])
   // console.log(mulArr);

   // mulArr[1].splice(1,3,1111)
    console.log(mulArr)

   /* console.log('noraml for loop')
    //normal for loop
    for(var i=0; i<mulArr.length; i++){ // for 1Dimension only [] 
        for(var j =0; j<mulArr[i].length; j++){ // for 2D eg. [[]]
            console.log(mulArr[i][j]);
        }
    }
  */

    //for..of //Display All the elements..

/* for(let item of mulArr){ // it give otput as console.log(mulArr)
        for(let x of item){  // this bcoz 2D- 2 Dimensions are used
            console.log(x);
        }
    }
*/          
        
// For...Each

     mulArr.forEach((item)=>{ //1D
        item.forEach((element)=>{
            console.log(element) // 2D
        })
     });

     
   
     let fun = function(x,y){
        return x/y;
     }
     let x = 50
     let y = 5;
     console.log(fun(x,y))
     