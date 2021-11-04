function ggcharImg() {
  if (document.querySelector("#character-card") != null) {
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
          el.querySelector("#character-card > img.character-frame").src = "";
          getgg.querySelector(".character-frame").src = "";
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
          $("#character-card").append(
            el.querySelector("#character-card > img.character-background")
          );
          $("#character-card").append(el.querySelector("#character-avatar"));
          $("#character-card").append(
            el.querySelector("#character-card > div")
          );
          //apech();
        } else {
          alert("error");
        }
      }
    };
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://maple.gg/u/${charName.value}`
    );
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}
/*
function theseed() {
  if (document.querySelector("#character-card") != null) {
    var charName = document.getElementById("fname");
    //document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr.search_com_chk > td:nth-child(3)")
    if (charName.value == "" || charName.value == null) {
      alert("이름을 입력해주세요");
      return false;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.status);
          var el = document.createElement("html");
          el.innerHTML = xmlHttp.responseText;
          try {
            for (i = 1; i <= 10; i++) {
              if (
                el.querySelector(
                  `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${i}) > td.left > dl > dt > a`
                ).innerText == charName.value
              ) {
                document.querySelector(
                  "#character-card > div > ul.character-card-additional > li:nth-child(3) > span"
                ).innerText =
                  el.querySelector(
                    `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${i}) > td:nth-child(4)`
                  ).innerText + "층";
                document.querySelector(
                  "#character-card > div > ul.character-card-additional > li:nth-child(3) > small"
                ).innerText = el.querySelector(
                  "#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(4) > td:nth-child(5)"
                ).innerText;
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    };
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Seed/ThisWeek?c=${charName.value}&w=0`
    );
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}
*/
function imgToBase64ByFileReaderServer(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      let reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
        console.log(reader.result);
        document
          .getElementById("serverimg1")
          .setAttribute("src", reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    url1 = `https://cors-anywhere.herokuapp.com/${url}`;
    xhr.open("GET", url1);
    xhr.responseType = "blob";
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send();
  });
}

function imgToBase64ByFileReaderChar(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      let reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
        console.log(reader.result);
        document
          .getElementById("character-avatar")
          .setAttribute("src", reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    url1 = `https://cors-anywhere.herokuapp.com/${url}`;
    xhr.open("GET", url1);
    xhr.responseType = "blob";
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send();
  });
}

function unionlevelcalc(level) {
  if (level >= 10000) {
    return "그랜드마스터 V";
  } else if (level >= 9500) {
    return "그랜드마스터 IV";
  } else if (level >= 9000) {
    return "그랜드마스터 III";
  } else if (level >= 8500) {
    return "그랜드마스터 II";
  } else if (level >= 8000) {
    return "그랜드마스터 I";
  } else if (level >= 7500) {
    return "마스터 V";
  } else if (level >= 7000) {
    return "마스터 IV";
  } else if (level >= 6500) {
    return "마스터 III";
  } else if (level >= 6000) {
    return "마스터 II";
  } else if (level >= 5500) {
    return "마스터 I";
  } else if (level >= 5000) {
    return "베테랑 V";
  } else if (level >= 4500) {
    return "베테랑 IV";
  } else if (level >= 4000) {
    return "베테랑 III";
  } else if (level >= 3500) {
    return "베테랑 II";
  } else if (level >= 3000) {
    return "베테랑 I";
  } else if (level >= 2500) {
    return "노비스 V";
  } else if (level >= 2000) {
    return "노비스 IV";
  } else if (level >= 1500) {
    return "노비스 III";
  } else if (level >= 1000) {
    return "노비스 II";
  } else if (level >= 500) {
    return "노비스 I";
  }
}

function charunion() {
  if (document.querySelector("#character-card") != null) {
    var charName = document.getElementById("fname");
    //document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr.search_com_chk > td:nth-child(3)")
    if (charName.value == "" || charName.value == null) {
      alert("이름을 입력해주세요");
      return false;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.status);
          var el = document.createElement("html");
          el.innerHTML = xmlHttp.responseText;
          try {
            for (i = 1; i <= 10; i++) {
              var charuname = el.querySelector(
                `#container > div > div > div:nth-child(4) > table > tbody > tr:nth-child(${i}) > td.left > dl > dt > a`
              ).innerText;
              if (charuname == charName.value) {
                var unionlevel = el.querySelector(
                  `#container > div > div > div:nth-child(4) > table > tbody > tr:nth-child(${i}) > td:nth-child(3)`
                ).innerText;
                unionlevel = unionlevel.replace(",", "");
                document.querySelector(
                  "#character-card > div > ul.character-card-additional > li:nth-child(2) > span"
                ).innerText = unionlevelcalc(unionlevel);
                document.querySelector(
                  "#character-card > div > ul.character-card-additional > li:nth-child(2) > small"
                ).innerText = "Lv." + unionlevel;
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    };
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/Union?c=${charName.value}&w=0`
    );
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}

function getguild(guildlink, charlevel) {
  if (document.querySelector("#character-card") != null) {
    var charName = document.getElementById("fname");
    //document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr.search_com_chk > td:nth-child(3)")
    if (charName.value == "" || charName.value == null) {
      alert("이름을 입력해주세요");
      return false;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.status);
          xmlHttp.responseText1 = xmlHttp.responseText.replace(
            /<img/g,
            "<noload"
          );
          var el = document.createElement("html");

          el.innerHTML = xmlHttp.responseText1;
          try {
            var mooFloor = el.querySelector(".user-summary-floor").innerText;
            var mooTime = el.querySelector(".user-summary-duration").innerText;
            mooFloor = mooFloor.replace(
              "                                                ",
              ""
            );
            mooFloor = mooFloor.replace("\n", "");
            mooTime = mooTime.replace(" ", "");
            document.querySelector(
              "#character-card > div > ul.character-card-additional > li:nth-child(1) > span"
            ).innerText = "최고 " + mooFloor;
            document.querySelector(
              "#character-card > div > ul.character-card-additional > li:nth-child(1) > small"
            ).innerText = mooTime;
            var charrankW = el.querySelector(
              "#user-profile > section > div.row.row-normal > div.col-lg-8 > div.row.row-normal.user-additional > div:nth-child(4) > span"
            ).innerText;
            var charrank = el.querySelector(
              "#user-profile > section > div.row.row-normal > div.col-lg-8 > div.row.row-normal.user-additional > div:nth-child(5) > span"
            ).innerText;
            document.querySelector(
              "#character-card > div > div:nth-child(4) > span:nth-child(2)"
            ).innerText = "월드" + charrankW;
            document.querySelector(
              "#character-card > div > div:nth-child(4) > span:nth-child(3)"
            ).innerText = "(전체 " + charrank + ")";
            //console.log(charrankW, charrank);
            //console.log(mooFloor, mooTime);
          } catch (e) {
            console.log(e);
            console.log("error");
            document.querySelector(
              "#character-card > div > ul.character-card-additional > li:nth-child(1) > span"
            ).innerText = "기록없음";
          }
          try {
            var seedFloor = el.querySelectorAll(
              ".user-summary-floor.font-weight-bold"
            )[1].innerText;
            var seedTime = el.querySelectorAll(".user-summary-duration")[1]
              .innerText;
            seedFloor = seedFloor.replace(
              "                                               ",
              ""
            );
            seedFloor = seedFloor.replace(" ", "");
            seedFloor = seedFloor.replace("\n", "");
            document.querySelector(
              "#character-card > div > ul.character-card-additional > li:nth-child(3) > span"
            ).innerText = "최고 " + seedFloor;
            document.querySelector(
              "#character-card > div > ul.character-card-additional > li:nth-child(3) > small"
            ).innerText = seedTime;
            console.log(seedFloor, seedTime);
          } catch (e) {
            console.log(e);
          }
          charunion();
        }
      }
    };
    charlevel = charlevel.replace("Lv.", "");
    if (charlevel > 200) {
      var moo =
        "https://maplestory.nexon.com/Ranking/World/Dojang/ThisWeek?t=2";
    } else {
      var moo =
        "https://maplestory.nexon.com/Ranking/World/Dojang/ThisWeek?t=0";
    }
    console.log(`https://maple.gg/u/${charName.value}}`);
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://maple.gg/u/${charName.value}`,
      true,
      "",
      ""
    );
    console.log(charlevel);
    console.log(`${moo}&c=${charName.value}&w=0`);
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}

function getcharaterinfo(charinfo, charlevel) {
  if (document.querySelector("#character-card") != null) {
    var charName = document.getElementById("fname");
    //document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr.search_com_chk > td:nth-child(3)")
    if (charName.value == "" || charName.value == null) {
      alert("이름을 입력해주세요");
      return false;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
          console.log(xmlHttp.status);
          var el = document.createElement("html");
          el.innerHTML = xmlHttp.responseText;
          var charpop = el.querySelector(
            "#wrap > div.center_wrap > div.char_info_top > div.char_info > div.level_data > span.pop_data"
          ).innerText;
          charpop = charpop.replace("인기도", "");
          document.querySelector(
            "#character-card > div > div:nth-child(3) > d"
          ).innerText = charpop;
          var charservername = el.querySelector(
            "#wrap > div.center_wrap > div.char_info_top > div.char_info > dl:nth-child(3) > dd"
          ).innerText;
          document.querySelector(
            "#character-card > div > ul.character-card-summary > li:nth-child(1) > span"
          ).innerText = charservername;
          var guildlink = el.querySelector(
            "#container > div.con_wrap > div.lnb_wrap > ul > li.on > a"
          ).href;
          guildlink = guildlink.replace("file:///D:", "");
          getguild(guildlink, charlevel);
        }
      }
    };
    xmlHttp.open(
      "GET",
      `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com${charinfo}`
    );
    xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlHttp.send(null);
  }
}

//document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(5) > td:nth-child(3)")
//document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(1) > td.left > dl > dd")
function getcharacter() {
  if (document.querySelector("#character-card") != null) {
    var charName = document.getElementById("fname");
    //document.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(5) > td.left > dl > dt > a")
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
          document.querySelector(
            "#character-card > div > div.character-card-name"
          ).innerText = charName.value;
          for (i = 1; i <= 10; i++) {
            var forname = el.querySelector(
              `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${i}) > td.left > dl > dt > a`
            );
            if (forname.innerText == charName.value) {
              var charNum = i;
              var charclass = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > dl > dd`
              ).innerText;
              var charclass = charclass.split("/");
              var charclassafter = charclass[1];
              document.querySelector(
                "#character-card > div > ul.character-card-summary > li:nth-child(5) > span"
              ).innerText = charclassafter;
              var charlevel = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td:nth-child(3)`
              ).innerHTML;
              document.querySelector(
                "#character-card > div > ul.character-card-summary > li:nth-child(3) > span"
              ).innerText = charlevel;
              var getcharserverimg = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > dl > dt > a > img`
              ).src;
              // document.querySelector(
              //   "#character-card > div > ul.character-card-summary > li:nth-child(1) > img"
              // ).src = getcharserverimg;
              imgToBase64ByFileReaderServer(getcharserverimg);
              var charinfo = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > dl > dt > a`
              ).href;
              //var charserver =
              var getcharImg = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > span > img:nth-child(1)`
              ).src;
              imgToBase64ByFileReaderChar(getcharImg);
              var charguild = el.querySelector(
                `#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td:nth-child(6)`
              ).innerText;
              document.querySelector(
                "#character-card > div > div:nth-child(3) > span"
              ).innerText = charguild;
              // document.querySelector("#character-avatar").src = getcharImg;
              // var levelsnum = el.querySelector(
              //   "#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(7) > td:nth-child(1) > p.\\'ranking_other\\'"
              // ).innerText;
              // levelsnum = levelsnum
              //   .toString()
              //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              // levelsnum = levelsnum.replace(" ", "");
              // document.querySelector(
              //   "#character-card > div > div:nth-child(4) > span:nth-child(2)"
              // ).innerText = `${levelsnum}등`;
              // document.querySelector(
              //   "#character-card > div > div:nth-child(4) > span"
              // ).innerHTML = document
              //   .querySelector(
              //     "#character-card > div > div:nth-child(4) > span"
              //   )
              //   .innerHTML.replace(
              //     "                                                   ",
              //     ""
              //   );
              document.querySelector(
                "#character-card > div > div:nth-child(4) > span"
              ).innerHTML = document
                .querySelector(
                  "#character-card > div > div:nth-child(4) > span"
                )
                .innerHTML.replace("<br>", "");
              console.log(
                document.querySelector(
                  "#character-card > div > div:nth-child(4) > span"
                ).innerHTML
              );
              if (document.location.href.includes("file:///D:")) {
                charinfo = charinfo.replace("file:///D:", "");
              } else {
                charinfo = charinfo.replace(
                  "https://ich-mag-dich.github.io",
                  ""
                );
              }
              console.log(charinfo);
              getcharaterinfo(charinfo, charlevel);
            }
          }
        }
      }
    };
    if ($(`input:checkbox[id='reboot']`).is(`:checked`) == false) {
      xmlHttp.open(
        "GET",
        `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Total?c=${charName.value}&w=0`
      );

      xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xmlHttp.send(null);
    } else {
      xmlHttp.open(
        "GET",
        `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Total?c=${charName.value}&w=254`
      );

      xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xmlHttp.send(null);
    }
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
function apech() {
  //   bgi = document.createElement("img");
  //   bgi.classList.add("character-background1");
  //   bgi.src = "./img/bg.png";
  //   bgi.crossorigin = "anonymous";
  //   document.querySelector("#character-card").append(bgi);
  //document.querySelector("#character-avatar").src = "";
}
function finput2(e) {
  var file = e.target.files[0]; //선택된 파일
  var reader = new FileReader();
  reader.readAsDataURL(file); //파일을 읽는 메서드
  reader.onload = function () {
    document.querySelector("#character-avatar").src = reader.result;
  };
}
function finput3(e) {
  var file = e.target.files[0]; //선택된 파일
  var reader = new FileReader();
  reader.readAsDataURL(file); //파일을 읽는 메서드
  var createbgimg = document.createElement("img");
  createbgimg.className = "character-background1";
  document.querySelector("#character-card").appendChild(createbgimg);
  reader.onload = function () {
    document.querySelector(".character-background1").src = reader.result;
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
      getcharacter();
    }
  } else if (event.keyCode == 37 || event.keyCode == 65) {
    //왼쪽
    if (backname != null) {
      backname.style.left = backname.style.left.replace("px", "") - 1 + "px";
    }
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    // 오른쪽
    if (backname != null) {
      backname.style.left =
        (backname.style.left.replace("px", "") * -1 - 1) * -1 + "px";
    }
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    //위
    if (backname != null) {
      backname.style.top = backname.style.top.replace("px", "") - 1 + "px";
    }
  } else if (event.keyCode == 40 || event.keyCode == 83) {
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
  // document.querySelector(
  //   "#character-card > div > div:nth-child(3) > b:nth-child(2)"
  // ).style.color = e;
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
  document.querySelector(
    "#character-card > div > div:nth-child(3) > b:nth-child(3)"
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
  //test
  //특정부분 스크린샷

  // html2canvas(document.getElementById("character-card"), {
  //   useCORS: true,
  //   //proxy: "./js/server.js",
  //   allowTaint: true,
  // })
  //   //id container 부분만 스크린샷
  //   .then(function (canvas) {
  //     //jpg 결과값
  //     //이미지 저장
  //     saveAs(
  //       canvas.toDataURL(),
  //       `${document.getElementById("fname").value}.jpg`
  //     );
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  html2canvas(document.getElementById("character-card"))
    .then(canvas => {
      document.body.appendChild(canvas);
      saveAs(
        canvas.toDataURL("image/png"),
        `${document.getElementById("fname").value}.png`
      );
    })
    .catch(function (err) {
      console.log(err);
    });
}

function saveAs(uri, filename) {
  // 캡쳐된 파일을 이미지 파일로 내보낸다.
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

function saveimg1() {
  html2canvas(document.getElementById("character-card")).then(function (e) {
    var i = document.createElement("a");
    (i.href = e.toDataURL()),
      (i.download = r),
      (i.type = "image/png"),
      document.body.appendChild(i),
      i.click(),
      document.body.removeChild(i);
  });
}
function saveimg(e) {
  var t = $(e.currentTarget),
    n = new Date(),
    r = $("#character-avatar"),
    a = r.data("proxy-url"),
    o = t.html();
  t.html('<i class="fas fa-spinner fa-spin"></i>'),
    r.attr("src", a),
    window.scrollTo(0, 0),
    setTimeout(function () {
      html2canvas(document.getElementById("character-card")).then(function (e) {
        var r =
          "" +
          n.getFullYear() +
          (n.getMonth() + 1) +
          n.getDate() +
          n.getHours() +
          n.getMinutes() +
          n.getSeconds();
        if (window.Android)
          window.Android.saveCharacterCard(
            JSON.stringify({
              url: e.toDataURL(),
              filename: r,
            })
          );
        else if (
          window.webkit &&
          window.webkit.messageHandlers &&
          window.webkit.messageHandlers.storeCharacterImage
        )
          window.webkit.messageHandlers.storeCharacterImage.postMessage(
            JSON.stringify({
              url: e.toDataURL(),
              filename: r,
            })
          );
        else if (e.msToBlob) {
          var a = e.msToBlob();
          window.navigator.msSaveBlob(a, r + ".png");
        } else {
          var i = document.createElement("a");
          (i.href = e.toDataURL()),
            (i.download = r),
            (i.type = "image/png"),
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i);
        }
        t.html(o);
      });
    }, 100);
}

function getDataUrl(img) {
  // Create canvas
  img = document.querySelector("#base641");
  img.crossOrigin = "Anonymous";
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  // Set width and height
  canvas.width = img.width;
  canvas.height = img.height;
  // Draw the image
  ctx.drawImage(img, 0, 0);
  console.log(canvas.toDataURL);

  var base64 = canvas.toDataURL("image/png");
  strImage = base64.replace(/^data:image\/[a-z]+;base64,/, "");
  console.log(strImage);
  document.getElementById("base64").src = "data:image/png;base64," + strImage;
}

function gethref() {
  var link = document.location.href;
  console.log(link);
}
