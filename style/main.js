function updateClock(){
  var now=new Date();

  var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var month=months[now.getMonth()];
  var year=now.getFullYear();

  var date=now.getDate()<=9?"0"+now.getDate():now.getDate();
  date+="-"+month+"-"+year;

  var hours=now.getHours();
  hours=hours<=9?"0"+hours:hours;
  var mins=now.getMinutes();
  mins=mins<=9?"0"+mins:mins;
  var secs=now.getSeconds();
  secs=secs<=9?"0"+secs:secs;

  date+=" "+hours+':'+mins+':'+secs;
  document.getElementsByClassName("currentTime")[0].innerHTML=date;

  setTimeout(updateClock,1000);
}

function age() {
    var now=new Date();
    var birthDate = new Date("12/26/1997");
    var age=now.getFullYear()-birthDate.getFullYear();
    var m=now.getMonth()-birthDate.getMonth();
    if(m<0 || (m==0 && now.getDate()<birthDate.getDate()) ){
      age=age-1;
    }
    document.getElementsByClassName("age")[0].innerHTML=age;
}

function copyright(){
  var now=new Date();
  var year=now.getFullYear();
  document.getElementById("footer").innerHTML+=year;
}

function mobile(){
  if(/Mobi|Android|kindle|ipad|tablet/i.test(navigator.userAgent)){
    document.body.style.margin="0px";
    document.getElementById("inner").style.width="100%";
    document.getElementById("content").style.height="auto";
    document.getElementById("content").style.width="80vw";
    document.getElementById("fill").style.height="56vh";
    document.getElementById("fill").style.border="1px solid rgba(50,6,62,.2)";
    document.getElementById("fill").style.borderRadius="15px";
    document.getElementById("fill").style.overflowY="auto";
    document.getElementById("fill").style.overflowX="hidden";
    document.getElementById("footer").style.marginTop="9px";
  }
}

updateClock();
age();
copyright();
mobile();
