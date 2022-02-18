let checkbool = false;
let testDiv = document.getElementsByClassName("testDiv");

function checksize() {
  let elements = document.getElementById("contents");
  console.log(window.innerWidth);

  let posterwrap = document.getElementsByClassName("posterwrap");
  let contentsWidth = document.getElementById("contents").clientWidth;
  let poster = document.getElementsByClassName("poster");
  //console.log("contents width: ", contentsWidth);
  let movieName = document.getElementsByClassName("movieName");
  console.log(contentsWidth);
  //console.log("contents width: ", contentsWidth);
  if (contentsWidth >= 600) {
    let foo = (contentsWidth - 600) / 4;
    for (i = 0; i < posterwrap.length; i++) {
      posterwrap[i].style.marginLeft = foo;
      poster[i].style.width = 200;
      movieName[i].style.fontSize = "large";
      movieName[i].style.width = poster[i].style.width;
    }
  } else if (contentsWidth >= 500) {
    let foo = (contentsWidth - 450) / 4;
    for (i = 0; i < posterwrap.length; i++) {
      poster[i].style.width = 150;
      posterwrap[i].style.marginLeft = foo;
      movieName[i].style.fontSize = "large";
      movieName[i].style.width = poster[i].style.width;
    }
  } else if (contentsWidth >= 400) {
    let foo = (contentsWidth - 360) / 4;
    for (i = 0; i < posterwrap.length; i++) {
      poster[i].style.width = 120;
      posterwrap[i].style.marginLeft = foo;
      movieName[i].style.fontSize = "large";
      movieName[i].style.width = poster[i].style.width;
    }
  } else {
    let foo = (contentsWidth - 240) / 4;
    for (i = 0; i < posterwrap.length; i++) {
      poster[i].style.width = 80;
      posterwrap[i].style.marginLeft = foo;
      movieName[i].style.fontSize = "small";
      movieName[i].style.width = poster[i].style.width;
    }
  }

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

// 0 = 죽은 시인의 사회
// 1 = 셔터아일랜드
// 2 = 굿 윌 헌팅

function ticketBuyWindow(num) {}
