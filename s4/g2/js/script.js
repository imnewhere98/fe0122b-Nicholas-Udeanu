/*let + somma*/
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

/*let + sottrazione*/
{
let x = 10;
let y = 20;
let z = x - y;
window.alert(z);
}

window.alert(x);


/*const*/
const broccoli = 10;
console.log(broccoli);
{
const broccoli = 2;
console.log(broccoli);
}
console.log(broccoli);

/*boleano*/

function funzione(){
let a = 10;
let b = 9;
document.getElementById("demo").innerHTML = Boolean(a > b);
}

function funzione2(){
let c = 11;
let d = 10;

document.getElementById("numero").innerHTML = Boolean(c < d);
}