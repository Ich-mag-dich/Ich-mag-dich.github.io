function getCharImg() {
    let charNum = 1;
    let charName = document.getElementById("fname");

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
        for (i=1; i<11; i++) {
            charname = el.querySelector(`#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${i}) > td.left > dl > dt > a`).innerText
            if (charname == charName.value) {
                charNum = i;
                console.log(i);
                console.log(charname);
            }
        }
        getImg = el.querySelector(`#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(${charNum}) > td.left > span > img:nth-child(1)`).src;      
        console.log(el.querySelector("#container > div > div > div:nth-child(4) > div.rank_table_wrap > table > tbody > tr:nth-child(10) > td.left > dl > dt > a"));
        document.getElementById("charImg").src = getImg;
        document.getElementById("charImg").style.display = 'unset';
        } else {
            console.log(xmlHttp.status);
        // handle errors
        }
    }
    };
    xmlHttp.open( "GET", `https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Total?c=${charName.value}&w=0`);
    xmlHttp.setRequestHeader("origin", "://");
    xmlHttp.send(null);



}

// $.ajax({

//     url: "https://maplestory.nexon.com/Ranking/World/Total?c=%ED%9E%90%EC%A3%BC%EB%84%B9&w=0",

//     cache: false

// }).done(function( html ) {

//     alert(html);

// });






// 크로스 도메인 해결 해야됨

// var xmlHttp = new XMLHttpRequest();

// xmlHttp.onreadystatechange = function () {
//   if (xmlHttp.readyState === xmlHttp.DONE) {
//     if (xmlHttp.status === 200) {
//       console.log(xmlHttp.status)
//       console.log(xmlHttp.responseText)
//     } else {
//         console.log(xmlHttp.status)
//       // handle errors
//     }
//   }
// };
// xmlHttp.open( "GET", 'https://cors-anywhere.herokuapp.com/https://maplestory.nexon.com/Ranking/World/Total?c=%ED%9E%90%EC%A3%BC%EB%84%B9&w=0');
// xmlHttp.setRequestHeader("origin", "://");
// xmlHttp.send(null);




// $.ajax({
//     type: 'GET',
//     url: 'https://www.w3schools.com/tags/tag_input.asp',
// }).done(function(html) {
//     console.log(html);

// });



// $.getJSON('https://ich-mag-dich.github.io/',
// ).done(function(html) {
//     console.log(typeof(html));

// });
// $.get("https://donghunee.github.io/study/2019/07/25/ajax/", function(data) {
//     alert("Data Loaded: " + data);
// });

// $.ajax({
//     type: "GET",
// 	url: "https://ich-mag-dich.github.io/",
//     Headers: `'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:65.0) Gecko/20100101 Firefox/65.0'`,

// }).done(function(data) {
//     console.log(data);
// });