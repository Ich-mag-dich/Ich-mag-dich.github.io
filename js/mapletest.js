function ggcharImg() {
  if (document.querySelector("#character-card") == null) {
    var charName = document.getElementById("fname");

    if (charName.value == "" || charName.value == null) {
      alert("이름을 입력해주세요");
      return false;
    }
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.status);
          //console.log(xmlHttp.responseText);
          var el = document.createElement("html");
          el.innerHTML = xmlHttp.responseText;
          var getgg = el.querySelector("#character-card");
          //getgg.style.backgroundColor = "#535353";

          getgg.querySelector("#character-avatar").src = "";
          getgg.querySelector("#character-avatar").onerror = "";
          getgg.querySelector(
            "#character-card > div > ul.character-card-summary > li:nth-child(1) > img"
          ).src = "";
          var charsrc = getgg.querySelector("#character-avatar").src;
          getgg.querySelector(
            "#character-card > img.character-background"
          ).src = "";
          getgg.querySelector(
            "#character-card > img.character-background"
          ).style.top = 0;
          getgg.querySelector(
            "#character-card > img.character-background"
          ).style.left = 0;
          $("#imgDiv").append(getgg);
        } else {
          alert("errer");
        }
      }
    };
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/http://maple.gg/u/${charName.value}`
    );
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}
//값이 변경될때 호출 되는 이벤트 리스너
function finput(e) {
  var file = e.target.files[0]; //선택된 파일
  var reader = new FileReader();
  reader.readAsDataURL(file); //파일을 읽는 메서드
  reader.onload = function () {
    document.querySelector("#character-card > img.character-background").src =
      reader.result;
  };
}
function finput2(e) {
  var file = e.target.files[0]; //선택된 파일
  var reader = new FileReader();
  reader.readAsDataURL(file); //파일을 읽는 메서드
  reader.onload = function () {
    document.querySelector("#character-avatar").src = reader.result;
  };
}

// 위 = 38 아래 = 40 오른쪽 = 39 왼쪽 = 37 엔터 = 13
window.onkeydown = event => {
  var backname = document.querySelector(
    "#character-card > img.character-background"
  );
  if (event.keyCode == 13) {
    var charName = document.getElementById("fname");
    if (charName.value != "" || charName.value != null) {
      ggcharImg();
    }
  } else if (event.keyCode == 37) {
    //왼쪽
    if (backname != null) {
      backname.style.left = backname.style.left.replace("px", "") - 1 + "px";
    }
  } else if (event.keyCode == 39) {
    // 오른쪽
    if (backname != null) {
      backname.style.left =
        (backname.style.left.replace("px", "") * -1 - 1) * -1 + "px";
    }
  } else if (event.keyCode == 38) {
    //위
    if (backname != null) {
      backname.style.top = backname.style.top.replace("px", "") - 1 + "px";
    }
  } else if (event.keyCode == 40) {
    //아래
    if (backname != null) {
      backname.style.top =
        (backname.style.top.replace("px", "") * -1 - 1) * -1 + "px";
    }
  }
  //console.log(event.keyCode);
};

function backColorChn(e) {
  document.body.style.backgroundColor = e;
  document.querySelector("#imgInputdiv").style.backgroundColor = e;
  document.querySelector("#notice").style.backgroundColor = e;
  if (document.querySelector("#character-card") != null) {
    document.querySelector("#character-card").style.backgroundColor = e;
  }
}

function textColorChn(e) {
  document.querySelector("#textColor").style.color = e;
  document.querySelector("#bodyColor").style.color = e;
  document.querySelector("#notice").style.color = e;
  document.querySelector("#imgInputdiv").style.color = e;
  document.querySelector(".character-card-name").style.color = e;
  document.querySelector(".character-card-summary-item").style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-summary > li:nth-child(3) > span"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-summary > li:nth-child(5) > span"
  ).style.color = e;
}

function textColorChn2(e) {
  document.querySelector(
    "#character-card > div > div:nth-child(3) > b:nth-child(1)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > div:nth-child(3) > b:nth-child(2)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > div:nth-child(4) > b"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(1) > b"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(2) > b"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(3) > b"
  ).style.color = e;
}
function textColorChn3(e) {
  document.querySelector(
    "#character-card > div > div:nth-child(3)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > div:nth-child(4) > span:nth-child(2)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(1)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(2)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > ul.character-card-additional > li:nth-child(3)"
  ).style.color = e;
  document.querySelector(
    "#character-card > div > div:nth-child(4) > span:nth-child(3)"
  ).style.color = e;
}

function partShot() {
  //특정부분 스크린샷
  html2canvas(document.getElementById("character-card"), {
    proxy: "html2canvas-proxy",
    useCORS: true,
  })
    //id container 부분만 스크린샷
    .then(function (canvas) {
      var ctx = canvas.getContext("2d");
      var myImage = document.querySelector("#character-avatar").src;
      addToCanvas(ctx, myImage);
      //jpg 결과값
      //이미지 저장
      //document.body.appendChild(canvas);
      saveAs(
        canvas.toDataURL(),
        `${document.getElementById("fname").value}.jpg`
      );
    })
    .catch(function (err) {
      console.log(err);
    });
}

function saveAs(uri, filename) {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}

function addToCanvas(ctx, image, x, y) {
  var img = new Image();
  img.src = image;
  img.onload = function () {
    ctx.drawImage(img, x, y);
  };
}
