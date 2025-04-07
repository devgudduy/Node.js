let a = 50;
let b = 140;

let waitingData = new Promise((res, rej) => {
  setTimeout(() => {
    res(150);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
