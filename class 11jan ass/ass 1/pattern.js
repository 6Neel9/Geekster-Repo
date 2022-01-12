let n = parseInt(prompt("Enter Num"));
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i+1 ; j++) {
    string += "*";
  }
  string += "<br/>";
}
document.write(string);