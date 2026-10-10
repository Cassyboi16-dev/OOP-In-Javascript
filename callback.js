


const screenContent = () => {
    console.log('Hello from the other side');

}



const loadingScreen = (callback) => {
    setTimeout(() => {
        console.log('Screen Loading')
        callback();
    }, 6000)


}


loadingScreen(screenContent);