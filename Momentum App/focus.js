
function showFocus() {
    var a = document.getElementById("goal").value;
    document.getElementById("focusDisplay").innerHTML = a;
  }
  
  function hideFocus() {
    var b = document.getElementById("hideThis2");
    if (b.style.display === "none") {
        b.style.display = "block";
      } else {
       b.style.display = "none";
      }
  }

function displayFocus() {
  var c = document.getElementById("hideFocus");
  if (c.style.display === "block ") {
      c.style.display = "none";
    } else {
      c.style.display = "block";
    }
}

