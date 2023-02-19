// function change(){
//     document.getElementById('p').innerHTML="<h2>NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE NIGHTMARE </h2>";
//     document.getElementById('p').style.color='red';
// }
// function display(){
//     alert('button is clicked');
//     document.getElementById('div-container').innerHTML="<h1>Clicked !</h1>"
//     document.getElementById('div-container').style.backgroundColor='blue';
//     document.getElementById('p').style.visibility='hidden';
// }

class vehicle{
    constructor(){
        this.wheels=2;
        this.brand='honda';
        this.mileage='40 kmpl';
        this.color='blue';
    }
    display(){
        document.write("Brand is "+this.brand+"color is"+this.color);
    }
}
let scooter= new vehicle(2,'bajaj','30 kmpl','black');
scooter.display();
let maruti= new vehicle(4,'maruti','40 kmpl','red');
scooter.display();
let bike= new vehicle();
bike.display();
let fname= new String('Shashwat');
console.log(fname);