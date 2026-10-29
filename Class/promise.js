const delayedPrompts = () => {
    return new Promise((resolve, reject) => {
        const promptDelivered = true;

        if (!promptDelivered) {
            reject("Not Delivered")
        }

            resolve("Prompt on it's way")
    })
}

const wrongPrompts = () => {
    return new Promise((resolve, reject) => {
        const promptSent = true;

        if(!promptSent){
            reject("Not Sent")
        }

        resolve("Prompt sent successfully")
    })
}


delayedPrompts().then(value => {console.log(value); return wrongPrompts()})
                .then(value => {console.log(value);
                })