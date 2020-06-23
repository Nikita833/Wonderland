/*const name = "Danil";
const letters = 5;
const txt= "Hello " + name + ", you have " + letters + " letters in your inbox";

const calibrum = "_calibr_";
const weapon = {
    [calibrum + "name"]: 'RPX35',
    [calibrum + "ammo"]: '5/50'
};
console.log(weapon);
const x=10;
const y=30;
const point = {
    x,
    y,
    draw(){
        console.log(X*y);
    }
};
point.draw();*/

/*const baseObject={
    host: "localhost",
    dbName: "info",
    user: "admin"
};
const userObject ={
    user : "Danil",
    password: "DanilMolodec"
};
const port = 8890
Object.assign(baseObject, userObject);
console.log(baseObject);

const res = {...baseObject, ...userObject, port};
console.log(res);*/

/*const animal= {
    say(){
        console.log(this.name, 'goes', this.voise);
    }
};
const sheep= Object.create(animal);
sheep.name= "sheep";
sheep.voise= "bleating";
const cow= Object.create(animal);
cow.name= "cow";
cow.voise= "mooing";
sheep.say();
cow.say();*/

/*class Bird{
    constructor(name, voice, canFly, canSwim, slide){
    this.name= name;
    this.voice= voice;
    this.canFly= canFly;
    this.canSwim= canSwim;
    this.slide= slide;
    }
    say(){
        console.log(this.name, 'goes', this.voice);
    }
    fly(){
        console.log(this.name, 'flying hight!');
    }
    swim(){
        console.log(this.name, this.canSwim);
    }
}


class Duck extends Bird{
    constructor(name, voice, canFly){
        super(name, voice, canFly);
        
    }
    
}
const myDuck= new Duck('Utka Zinaida', 'quack', true, 'swim very well');
myDuck.say();
myDuck.fly();
myDuck.swim();


class Pingvin extends Bird{
    constructor(name, voice, canFly, canSwim, slide){
        super(name, voice, canFly, canSwim, slide);
    }
    fly(){
        console.log(this.name, 'can not fly');
    }
    CanSlide(){
        console.log(this.name, this.slide)
    }
}
const myPingvin= new Pingvin('Pingvin Pin', 'scream', true, 'swim very well', 'can slide');
myPingvin.say();
myPingvin.fly();
myPingvin.swim();
myPingvin.CanSlide();

class Chicken extends Bird{
    constructor(name, voice, canFly){
        super(name, voice, canFly);
        
    }
    fly(){
        console.log(this.name, 'can not fly');
    }
}
const myChicken= new Chicken('Chicken Cheese', '"KOKOKO"', true);
myChicken.say();
myChicken.fly();*/