function getCharImg() {
    let charNum = 1;
    var charName = document.getElementById("fname");

    if (charName.value == '' || charName.value == null) {
        alert( '이름을 입력해주세요' );
        return false;
    }
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === xmlHttp.DONE) {
        if (xmlHttp.status === 200) {
            console.log(xmlHttp.status);
            console.log(xmlHttp.responseText);
            var el = document.createElement( 'html' );
            el.innerHTML = xmlHttp.responseText;
            if (el.querySelector("#container > div > div > div:nth-child(4) > div").innerText == '랭킹정보가 없습니다.') {
                document.getElementById("charImg").src = './img/error.png';
            document.getElementById("charImg").style.display = 'unset';
            } else {
                for (i=1; i<11; i++) {
                    var getcharName = el.querySelector(`#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${i}) > td.left > dl > dt > a`).innerText
                    if (getcharName == charName.value) {
                        charNum = i;
                        console.log(i);
                        console.log(getcharName);
                    } else {
                        if (i == 10) {
                            document.getElementById("charImg").src = './img/error.png';
                            document.getElementById("charImg").style.display = 'unset';
                            return 0;
                        }
                    }
                }
                getImg = el.querySelector(`#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > span > img:nth-child(1)`).src;      
                //console.log(el.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(10) > td.left > dl > dt > a"));
                document.getElementById("charImg").src = getImg;
                document.getElementById("charImg").style.display = 'unset';
                //document.getElementById("characterName").innerText = getcharName;
                //document.getElementById("characterName").style.display = 'unset';
                //document.getElementById("charBackground").style.display = 'unset';
                
            }
        } else {
            document.getElementById("charImg").src = './img/error.png';
            document.getElementById("charImg").style.display = 'unset';
            console.log(xmlHttp.status);
        }
    }
    };
    xmlHttp.open( "GET", `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Total?c=${charName.value}&w=0`);
    xmlHttp.setRequestHeader("origin", "://");
    xmlHttp.send(null);



}
$( function() {
    $( "#charBackground" ).draggable();
  } );

$( function() {
    $( "#charImg" ).draggable();
  } );


