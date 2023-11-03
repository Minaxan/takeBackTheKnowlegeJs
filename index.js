let x = 4;
let y = 5;
let z = x + y;
document.getElementById("changeText").innerHTML = z;
document.getElementById("changeText").style =
  "background-color:blue; color:white; width: 10vw; height: 10vh";
console.log(z); // đây là thử console

function myFunction() {
  document.getElementById("changeText").style =
    "background-color:blue; color:white; width: 20vw; height: 10vh";
}

myFunction() 
// 3/11 thực hành đến trang 10 
