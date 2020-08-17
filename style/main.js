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
  document.getElementsByClassName("clock")[0].innerHTML=date;

  setTimeout(updateClock,1000);
}

function copyright(){
  var now=new Date();
  var year=now.getFullYear();
  document.getElementById("copyright").innerHTML+=year;
}

updateClock();
copyright();
