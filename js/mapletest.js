function ggcharImg() {
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
        getgg.querySelector(
          "#character-card > div > ul.character-card-summary > li:nth-child(1) > img"
        ).src = "";

        getgg.querySelector("#character-card > img.character-background").src =
          "";
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
var checkbull = false;

function checkchar() {
  if (document.querySelector("#character-card") == null) {
    alert("캐릭터를 먼저 불러와주세요.");
    return 0;
  } else {
    checkbull = true;
  }
}
//값이 변경될때 호출 되는 이벤트 리스너
function finput(e) {
  if (checkbull == true) {
    var file = e.target.files[0]; //선택된 파일
    var reader = new FileReader();
    reader.readAsDataURL(file); //파일을 읽는 메서드
    reader.onload = function () {
      document.querySelector("#character-card > img.character-background").src =
        reader.result;
    };
  }
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
      console.log(
        document.querySelector("#character-card > img.character-background")
          .style.left
      );
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
