let checkbool = false;
let testDiv = document.getElementsByClassName("testDiv");

function checksize() {
  let elements = document.getElementById("contents");
  console.log(window.innerWidth);
  if (window.innerWidth < 1000) {
    if (checkbool === false) {
      elements.style.width = "100%";
      document.getElementById("pageName").style.fontSize = "25px";
      document.getElementById("pageName").style.marginTop = "0px";
      console.log(testDiv.length);
      for (i = 0; i < testDiv.length; i++) {
        testDiv[i].style.fontSize = "25px";
        testDiv[i].style.marginTop = "0px";
      }
      //document.getElementsByClassName("testDiv").style.fontSize = "25px";
      //document.getElementsByClassName("testDiv").style.marginTop = "0px";
      checkbool = true;
    }
  } else {
    if (checkbool === true) {
      elements.style.width = "50%";
      document.getElementById("pageName").style.fontSize = "50px";
      document.getElementById("pageName").style.marginTop = "-10px";
      for (i = 0; i < testDiv.length; i++) {
        testDiv[i].style.fontSize = "50px";
        testDiv[i].style.marginTop = "-10px";
      }
      //document.getElementsByClassName("testDiv").style.fontSize = "50px";
      //document.getElementsByClassName("testDiv").style.marginTop = "-10px";
      checkbool = false;
    }
  }
}
