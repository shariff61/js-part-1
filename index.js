const btn = document.querySelector("#btn");
const header = document.querySelector("#header");
const input = document.querySelector("#input");

//rgb random color `rgb(255,255,200)`

// btn.addEventListener("click", function () {
//   const color = randomColor();

//   setInterval(() => {
//     document.body.style.backgroundColor = color;
//     input.value = color;
//   }, 1000);
// });

// const randomColor = () => {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);

//   const random = `rgb(${red},${green},${blue})`;

//   return random;
// };

//haxColor rondom....`#444`
btn.addEventListener("click", function () {
  const color = hexColor();

  setInterval(() => {
    document.body.style.backgroundColor = color;
    input.value = color;
  }, 1000);
});

const hexColor = () => {
  const red = Math.floor(Math.random() * 9999);
  const color = `#${red}`;
  return color;
};
