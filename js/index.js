// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };
  
  function updateClock() {
    var now = new Date();
    var milli = now.getMilliseconds(),
      sec = now.getSeconds(),
      min = now.getMinutes(),
      hou = now.getHours(),
      mo = now.getMonth(),
      dy = now.getDate(),
      yr = now.getFullYear();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
      corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
    for (var i = 0; i < tags.length; i++)
      document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
  }
  
  function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  
  // END CLOCK SCRIPT
// watchStart = function () {
//   startWatch = setInterval(function() {
//       document.getElementById('sts').innerHTML++;
//   }, 1000)
// }

function watchStart() {
  if (document.getElementById('button').innerHTML === 'Start') {
    document.getElementById('button').innerHTML = 'Stop';
    startWatch = setInterval(function() {
      if (document.getElementById('sts').innerHTML >= 59) {
        if (document.getElementById('stm').innerHTML >= 59) {
          document.getElementById('stm').innerHTML = 0;
          document.getElementById('sts').innerHTML = 0;
          document.getElementById('sth').innerHTML++;
        } else {
          document.getElementById('sts').innerHTML = 0;
          document.getElementById('stm').innerHTML++;
        }
        
      } else {
        document.getElementById('sts').innerHTML++;
      }
    }, 1000);
  } else {
    document.getElementById('button').innerHTML = 'Start';
    clearInterval(startWatch);
    
  }
}
function watchClear() {
  document.getElementById('button').innerHTML = 'Start';
  document.getElementById('sts').innerHTML = 0;
  document.getElementById('stm').innerHTML = 0;
  document.getElementById('sth').innerHTML = 0;
  clearInterval(startWatch);
}