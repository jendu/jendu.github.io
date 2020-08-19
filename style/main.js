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

function showButton(){
  var scrollToTopBtn=document.getElementsByClassName("scrollToTop")[0];
  document.getElementById("fill").onscroll=function(){
    if(document.getElementById("fill").scrollTop>20) {
      scrollToTopBtn.style.visibility="visible";
      scrollToTopBtn.style.opacity="1";
    }else{
      scrollToTopBtn.style.visibility="hidden";
      scrollToTopBtn.style.opacity="0";
    }
  };
}
function scrollToTop(){
  document.getElementById("fill").scrollTop=0;
}

function enlargeImg(){
  var images=document.getElementById("fill").getElementsByTagName('img');
  for(var i=0;i<images.length;i++){
    images[i].addEventListener('click',function(){openImgInNewWindow(this)},false);
  }
}
function openImgInNewWindow(img) {
  var imgWindow=window.open(img.src);
  imgWindow.document.close();
}

function age(){
  var now=new Date();
  var birthDate = new Date("12/26/1997");
  var age=now.getFullYear()-birthDate.getFullYear();
  var m=now.getMonth()-birthDate.getMonth();
  if(m<0 || (m==0 && now.getDate()<birthDate.getDate()) ){
    age=age-1;
  }
  document.getElementsByClassName("age")[0].innerHTML=age;
}

updateClock();
copyright();
if(document.getElementsByClassName("scrollToTop").length>0){
  showButton();
}
if(document.getElementById("fill").getElementsByTagName('img')){
  enlargeImg();
}
if(document.getElementsByClassName("age").length>0){
  age();
}
