function displayA() {
    console.log('A');
}
function displayB(Callback) {
    setTimeout(() => {
        console.log('B');
        Callback();
    }, 2000);
}
function displayC() {
    console.log('C');
}
displayA();
displayB(displayC);
