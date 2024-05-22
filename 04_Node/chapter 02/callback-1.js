const order = (name, callback) => {
    console.log(`${name} 주문 접수`);
    setTimeout(() => {
        callback(name);
    }, 3000);
};
const display = (result) => {
    console.log(`${result} 완료!`);
};
order('아메리카노', display);
