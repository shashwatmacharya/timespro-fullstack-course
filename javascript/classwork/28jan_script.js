// function age(){
//     var age=prompt('Please enter your age');
//         if (age>=18){
//             alert('you are an adult');
//         }
//         else{
//             alert('you are not an adult');
//         }
// }
//age();
//var names=['shashwat','abishek','neeraj','ganehs'];
//console.log(names);


// var a=parseInt(prompt('enter first number'));
// var b=parseInt(prompt('enter second number'));    
// function add(a,b){
//     var sum=a+b;
//     return(sum);
// }
// document.write("addition is "+add(a,b));


let arr1=['shashwat','abishek','neeraj','ganesh'];
let arr2=['mohan','satish','jagdeesh',10,20,30];
let outputarr1=arr1.concat(arr2);
console.log(arr1.concat(arr2));

// document.write("first array:"+arr1);
// document.write("<br>second array:"+arr2);
// document.write("<br>output array:"+outputarr1);

// for(let i=0;i<=outputarr1.length;i++){
//     document.write("<br>element "+i+" is "+outputarr1[i]);
// }
 
// outputarr1.forEach(function display(e) {
//     document.write("<br>"+e);
// });

function disp(){
    //function body
}
var output=(a,b)=>{
    return(a+b);
}
document.write(output(4,5));
function add(a,b){
    return(a+b);
}