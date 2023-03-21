//zad 1
var a=20;
var b=10;
var add=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
// a)
console.log("Wynik dodawania to: "+add);
console.log("Wynik odejmowania to: "+sub);
console.log("Wynik mnożenia to: "+mul);
console.log("Wynik dzielenia to: "+div);
// b)
document.getElementById("addR").innerHTML = "Wynik dodawania to: "+add;
document.getElementById("subR").innerHTML = "Wynik odejmowania to: "+sub;
document.getElementById("mulR").innerHTML = "Wynik mnożenia to: "+mul;
document.getElementById("divR").innerHTML = "Wynik dzielenia to: "+div;
// zad 2
var a=6;
var b=8;
var c=10;
var p=(a+b+c)/2;
var Pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("Pole trójkąta wynosi: "+Pole);
document.getElementById("PoleR").innerHTML = "Pole trójkąta wynosi: "+Pole;
// zad 3
var rand = Math.ceil(Math.random());
var x = prompt("Podaj liczbę, zobacz czy zgadłeś: ")
if (x == rand)
{
    console.log("Dobra robota"); 
    document.getElementById("guessR").innerHTML = "Dobra robota";   
}
else
{
    console.log("Nie zgadleś ;/"); 
    document.getElementById("guessR").innerHTML = "Nie zgadleś ;/"; 
}
//zad 4
var y = prompt("Podaj liczbę, zobaczymy czy jest największa: ")
var z = prompt("Podaj kolejną liczbę: ")
var q = prompt("Podaj kolejną liczbę: ")
if (y>z)
{
    console.log(y+" jest największa"); 
    document.getElementById("3LR").innerHTML = y+" jest największa";
}
else if (z>q)
{
    console.log(z+" jest największa"); 
    document.getElementById("3LR").innerHTML = z+" jest największa";
}
else
{
    console.log(q+" jest największa"); 
    document.getElementById("3LR").innerHTML = q+" jest największa";
}