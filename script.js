/**
 * Created by HP on 10/20/2016.
 */
function myFunction5(symbol) {
  var x = document.getElementById("first_number").value;
  var y = document.getElementById("second_number").value;

  if (symbol == '+') {
    document.getElementById("demo").value = parseFloat(x) + parseFloat(y);
  }
  else if (symbol == '-') {
    document.getElementById("demo").value = parseFloat(x) - parseFloat(y);
  }
  else if (symbol == '*') {
    document.getElementById("demo").value = parseFloat(x) * parseFloat(y);
  }
  else if (symbol == '/') {
    if (y == 0) {
      document.getElementById("demo").value = "Error";
    }
    else {
      document.getElementById("demo").value = parseFloat(x) / parseFloat(y);
    }
  }
}