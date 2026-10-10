function createWebsite() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            const websiteCreated = true;
            if (!websiteCreated) {
                reject("Yo what you doing don't be lazy man get back to work!");
            }

            reslove("You have to create a website!")
        }, 4500)
    })
}

const debugCode = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const codeDebugged = true;
            if (!codeDebugged) {
                reject("You better get up your lazy as now!")
            }

            resolve("get to work and start debugging your code")
        }, 3000)
    })

}


function shipProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productShipped = true;

            if (!productShipped) {
                reject("Yo bro what you doing? ship that thing now!")
            }

            resolve("You ship the product")
        }, 300)
    })
}






createWebsite().then(value => { console.log(value); return debugCode() })
    .then(value => {
        console.log(value); return shipProduct()
    }).then(value => {
        console.log(value); console.log("You've completed your achievements for today well done we go again tomorrow!");

    })
    .catch(error => console.error(`${error}: fix it now`)
    )