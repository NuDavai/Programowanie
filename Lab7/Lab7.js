// zad 1
class Rectangle
{
    constructor(height, windth, name)
    {
        this.height = height
        this.windth = windth
        this.name = name
    }
    wypisz()
        {
            console.log("Wysokosc to: " + this.height);
            console.log("Szerokosc to: " + this.windth);
            console.log("Nazwa to: " + this.name);
            const obw=2*this.height+2*this.windth
            console.log("Obwod wynosi: " + obw);
        }
    Pole()
    {
        return this.height*this.windth
    }
    Porownaj(innyRectangle)
    {
        if(this.Pole() > innyRectangle.Pole())
        {
            return this.name
        }
        else if(this.Pole() < innyRectangle.Pole())
        {
            return innyRectangle.name
        }
        else
        {
            console.log("Prostokąty są równe");
        }
    }

    //zad 6 (cz1)

    changeName(newName)
    {
        this.name = newName;
        return this.name
    }

}

const Rec1 = new Rectangle(10, 10, "kwadrat")
Rec1.wypisz();
console.log(Rec1.Pole());
const Rec2 = new Rectangle(30, 10, "prostokat")
Rec2.wypisz();
console.log(Rec2.Pole());
const Rec3 = new Rectangle(5, 5, "kwadracik")
Rec3.wypisz();
console.log(Rec3.Pole());
console.log(Rec1.Porownaj(Rec2));

//zad 3
class Trapez
{
    constructor(height, base1, base2, name) 
    {
        this.height = height
        this.base1 = base1
        this.base2 = base2
        this.name = name
    }
    wypisz()
    {
        console.log("Wysokosc to: " + this.height);
        console.log("Podstawa pierwsza to: " + this.base1);
        console.log("Podstawa druga to: " + this.base2);
        console.log("Nazwa to: " + this.name);
    }
    Pole()
    {
        return (this.base1+this.base2)*this.height/2
    }
}

const Trap1 = new Trapez(10,5,10, "trapez")
Trap1.wypisz();
console.log(Trap1.Pole());
const Trap2 = new Trapez(5,2,6, "minitrapez")
Trap2.wypisz();
console.log(Trap2.Pole());
const Trap3 = new Trapez(30,20,50, "maxitrapez")
Trap3.wypisz();
console.log(Trap3.Pole());

//zad 4

function maks(rectangle,trap)
{
    if(rectangle.Pole() > trap.Pole())
    {
        console.log("Wiekszy jest "+ rectangle.name + " o polu " + rectangle.Pole())
    }
    else if(rectangle.Pole() < trap.Pole())
    {
        console.log("Wiekszy jest " + trap.name + " o polu " + trap.Pole())
    }
    else
    {
        console.log("Prostokat i trapez jest rowny")
    }
}

maks(Rec1, Trap1);

// zad 6 (poczatek zadania 6 jest w zadaniu 1)

console.log(Rec1.changeName("Nowa nazwa"));

//zad 1. (lab 6+)

const n=5
const tab = []
tab.push(1,2,3,4,5)
for(int i=0; i<n; i++)
{
    
}