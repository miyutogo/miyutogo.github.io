function greetMe() {
    var x = document.getElementById("formID").value;
    document.getElementById("greetingDisplay").innerHTML = x;
  }

function hideInput() {
    var y = document.getElementById("hideThis");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}

function showInput() {
  var z = document.getElementById("goodDisplay");
  if (z.style.display === "block ") {
      z.style.display = "none";
    } else {
      z.style.display = "block";
    }
}

