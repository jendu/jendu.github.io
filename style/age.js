var now=new Date();
var birthDate = new Date("12/26/1997");
var age=now.getFullYear()-birthDate.getFullYear();
var m=now.getMonth()-birthDate.getMonth();
if(m<0 || (m==0 && now.getDate()<birthDate.getDate()) ){
  age=age-1;
}
document.getElementsByClassName("age")[0].innerHTML=age;
