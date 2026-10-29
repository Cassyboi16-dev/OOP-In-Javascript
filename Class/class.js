class Calculate {
    constructor(n, o, p = 12, name) {
        this.n = n * p - 32
        this.o = n - o / p - 56 / 2
        this.name = name;
    }

    showCalculations() {
        console.log(`${this.n} is the calculation for ${this.o}`);
    }


}


// class Information {
//     constructor(username){
//         this.username = username;
//     }

//     information() {
//      const storage = localStorage.setItem("username", this.username);
//      console.log(storage);

//     }
// }


const num = new Calculate(45, 32, true, "Samantha Puckett",)
const num2 = new Calculate(56, 32, true, "Carly Shay")


// const name = new Information("Samuel")


setTimeout(() => {
    num.showCalculations();
    num2.showCalculations();
}, 30000)



// name.information();

// console.log(localStorage.getItem("username"));


