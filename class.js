class Car{
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }

    displayCarType(){
        console.log(`${this.brand} is ${this.color}`);
    }
}



const car = new Car('Toyota', 'red')
const car2 = new Car('Benz', 'Black')
const car3 = new Car('Jaguar', 'Twilight')

car.displayCarType();
car2.displayCarType();
car3.displayCarType();
