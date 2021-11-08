function textchn(a) {
  if (a.style.textDecoration != "line-through") {
    a.style.textDecoration = "line-through";
  } else {
    a.style.textDecoration = "";
  }
}

function tddel(a) {
  a.parentElement.remove();
  var table = document.getElementById("tlist");
  var loopnum = a.parentElement.querySelector("#tdn").innerText;

  //console.log(a.parentElement.querySelector("#tdn").innerText);
  for (var i = loopnum - 1, row; (row = table.rows[i]); i++) {
    //console.log(i);
    row.querySelector("#tdn").innerText = i + 1;
    //console.log(row.querySelector("#tdn").innerText);
  }
  //a.parentElement.remove();
}

function addlist() {
  var getValue = document.querySelector("#addtolist > input[type=text]").value;
  if (getValue != "") {
    var table = document.getElementById("tbody");
    if (table.rows[0] == null) {
      //console.log("asd");
      var addtolist1 = document.createElement("tr");
      var addtolist2 = document.createElement("td");
      var addtolist3 = document.createElement("td");
      var addtolist4 = document.createElement("td");
      addtolist2.id = "tdn";
      addtolist2.innerText = 1;
      addtolist3.id = "tdv";
      addtolist3.setAttribute("onclick", "textchn(this)");
      addtolist3.innerText = getValue;
      addtolist4.id = "tdbtn";
      addtolist4.innerText = "Delete";
      addtolist4.setAttribute("onclick", "tddel(this)");
      addtolist1.append(addtolist2);
      addtolist1.append(addtolist3);
      addtolist1.append(addtolist4);
      document.querySelector("#tbody").append(addtolist1);
      document.querySelector("#addtolist > input[type=text]").value = "";
      return;
    }
    for (var i = 0, row; (row = table.rows[i]); i++) {
      var num = row.querySelector("#tdn").innerText;
      //console.log(num);
    }
    var addtolist1 = document.createElement("tr");
    var addtolist2 = document.createElement("td");
    var addtolist3 = document.createElement("td");
    var addtolist4 = document.createElement("td");
    addtolist2.id = "tdn";
    addtolist2.innerText = parseInt(num) + 1;
    addtolist3.id = "tdv";
    addtolist3.setAttribute("onclick", "textchn(this)");
    addtolist3.innerText = getValue;
    addtolist4.id = "tdbtn";
    addtolist4.innerText = "Delete";
    addtolist4.setAttribute("onclick", "tddel(this)");
    addtolist1.append(addtolist2);
    addtolist1.append(addtolist3);
    addtolist1.append(addtolist4);
    document.querySelector("#tbody").append(addtolist1);
    document.querySelector("#addtolist > input[type=text]").value = "";
  }
}

window.onkeydown = event => {
  if (event.keyCode == 13) {
    addlist();
  }
};
