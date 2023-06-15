function openNav() {
  var x = document.getElementById("navigation");

  if (x.className === "navigation") {
    x.className += " menujs";
    document.getElementById("threeline").innerHTML = "&Cross;";
  } else {
    x.className = "navigation";
    document.getElementById("threeline").innerHTML = "&#9776;";
  }
}

var mybutton = document.getElementById("myBtn");
