/*!
* Created by: Danzz Coding | https://danzzcodingweb.vercel.app
*/

// Apikey
randomapikey = ["AdimasProject","ADMIN","Nothing"];
const randomkeys = randomapikey[Math.floor(Math.random() * (randomapikey.length))]
document.getElementById("randomkey").textContent=randomkeys

// Visitor
$.getJSON("https://api.countapi.xyz/hit/danzz-api.herokuapp.com/visitor", function(response) {
    $("#visitors").text(response.value);
})

// Request Today
$.getJSON("https://api.countapi.xyz/hit/danzz-api.herokuapp.com/requesttoday1", function(response) {
    $("#requesttoday").text(response.value);
})

// Total Request
$.getJSON("https://api.countapi.xyz/hit/danzz-api.herokuapp.com/totalrequest", function(response) {
    $("#totalrequest").text(response.value);
})

// Ip Address
window.setTimeout("getip()",1000);
function getip(){
  var danzz=new XMLHttpRequest();
  var url='https://api.ipify.org?format=json';
  danzz.onloadend=function(){
  data=JSON.parse(this.responseText);
  document.getElementById("ip").textContent=data.ip
};
danzz.open("GET",url,true);
danzz.send();
}

//Baterry
tag_battery_status = document.querySelector('div#battery_status');
tag_battery_level = document.querySelector('div#battery_level');
     setInterval(function() {
         navigator.getBattery().then(battery=> {
             battery_level = String(battery.level).split('.')[1];
             tag_battery_level.innerHTML = `${(battery_level.length <= 1)? oud(Number(battery_level)): battery_level}% ${battery.charging ? 'charging': 'discharging'}`;
         });
     },
         10);

// User Agent
txt = "";
txt += "<p><b>Version Browser</b>: <br>" + navigator.appVersion + "</p>";
txt += "<p><b>Language</b>: " + navigator.language + "</p>";
txt += "<p><b>Browser</b>: " + navigator.appCodeName + "</p>";
txt += "<p><b>Vendor</b>: " + navigator.vendor + "</p>";
txt += "<p><b>Cookies</b>: " + navigator.cookieEnabled + "</p>";
txt += "<p><b>Platform</b>: " + navigator.platform + "</p>";

document.getElementById("webinfo").innerHTML = txt;

// Date
myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
myDays = ['Week','Monday','Monday','Wednesday','Thursday','Friday','Saturday'];
var tgl = new Date();
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
ThisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;

const tanggal = `${ThisDay}, ${day} ${myMonths[bulan]} ${year}`

document.getElementById("Date").innerHTML = tanggal;

//Speed
var imageAddr = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"; 
var downloadSize = 300000;
function InitiateSpeedDetection() {
window.setTimeout(MeasureConnectionSpeed, 1);
};    
if (window.addEventListener) {
window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
window.attachEvent('onload', InitiateSpeedDetection);
}
function MeasureConnectionSpeed() {
var startTime, endTime;
var download = new Image();
download.onload = function () {
endTime = (new Date()).getTime();
showResults();
}
download.onerror = function (err, msg) {
document.getElementById("speedtes").innerHTML = "error downloading";
}
startTime = (new Date()).getTime();
var cacheBuster = "?nnn=" + startTime;
download.src = imageAddr + cacheBuster;
function showResults() {
var duration = (endTime - startTime) / 1000;
var bitsLoaded = downloadSize * 8;
var speedBps = (bitsLoaded / duration).toFixed(2);
var speedKbps = (speedBps / 1024).toFixed(2);
var speedMbps = (speedKbps / 1024).toFixed(1);
document.getElementById("speedtes").innerHTML = `${speedMbps} Mbps`;
}
}

//Countdown Christmas
function getCounter() { 
var countDownDate = new Date("Dec 25, 2022 00:00:00").getTime(); 
var x = setInterval(function () { 
var now = new Date().getTime(); 
var distance = countDownDate - now; 
var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var display = document.getElementById("crismes"); 

var iniHari = days < 10 ? "0" + days : days; 
var iniJam = hours < 10 ? "0" + hours : hours; 
var iniMenit = minutes < 10 ? "0" + minutes : minutes; 
var iniDetik = seconds < 10 ? "0" + seconds : seconds;

display.innerHTML = `${iniHari}Days ${iniJam}Hours ${iniMenit}Minutes`;
if (distance < 0) { 
document.getElementById("crismes").innerHTML = "Happy Christmas";
} 
}, 1000); 
}

getCounter();

//Ramadhan
function getRamadhan() { 
var countDownDate = new Date("March 22, 2023 00:00:00").getTime(); 
var x = setInterval(function () { 
var now = new Date().getTime(); 
var distance = countDownDate - now; 
var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var display = document.getElementById("ramadhan"); 

var iniHari = days < 10 ? "0" + days : days; 
var iniJam = hours < 10 ? "0" + hours : hours; 
var iniMenit = minutes < 10 ? "0" + minutes : minutes; 
var iniDetik = seconds < 10 ? "0" + seconds : seconds;

display.innerHTML = `${iniHari}Days ${iniJam}Hours ${iniMenit}Minutes`;
if (distance < 0) { 
document.getElementById("ramadhan").innerHTML = "Marhaban ya ramadhan :)";
} 
}, 1000); 
}

getRamadhan();

//my Birthday
function getBirthday() { 
var countDownDate = new Date("July 09, 2023 00:00:00").getTime(); 
var x = setInterval(function () { 
var now = new Date().getTime(); 
var distance = countDownDate - now; 
var days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
var hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ); 
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

var display = document.getElementById("myBirthday"); 

var iniHari = days < 10 ? "0" + days : days; 
var iniJam = hours < 10 ? "0" + hours : hours; 
var iniMenit = minutes < 10 ? "0" + minutes : minutes; 
var iniDetik = seconds < 10 ? "0" + seconds : seconds;

display.innerHTML = `${iniHari}Days ${iniJam}Hours ${iniMenit}Minutes`;
if (distance < 0) { 
document.getElementById("MyBirthday").innerHTML = "Happy Birthday to Me :)";
} 
}, 1000); 
}

getBirthday();

//My Age
var dob = new Date("07/09/2004"); 

//calculate month difference from current date in time     
var month_diff = Date.now() - dob.getTime();            

//convert the calculated difference in date format      
var age_dt = new Date(month_diff);             

//extract year from date          
var year = age_dt.getUTCFullYear();            

//now calculate the age of the user      
var age = Math.abs(year - 1970);            

//display the calculated age      
document.getElementById("myAge").innerHTML = age + " years";  

// Time
let clock=document.querySelector("div#Clock");
let saying=document.querySelector("div#Saying");
setInterval(()=>{
var widthdeVicewidthXinitialscalesHrinkno=new Date();
const Jam= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);
const jam= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);
const menit= widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);
const Menit = widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);
const Detik = widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);
const detik= widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);
const jaM= widthdeVicewidthXinitialscalesHrinkno.getHours().toString().padStart(2,0);
const mEnit= widthdeVicewidthXinitialscalesHrinkno.getMinutes().toString().padStart(2,0);
const detIk= widthdeVicewidthXinitialscalesHrinkno.getSeconds().toString().padStart(2,0);

// Saying Time
if(Jam<4){saying.innerHTML="Good Early Days";}else
if(jam<11){saying.innerHTML="Good Morning";}else 
if(Jam<16){saying.innerHTML="Good Afternoon";}else 
if(jam<20){saying.innerHTML="Good Afternoon";}else
{saying.innerHTML="Good Night";}
clock.innerHTML=jaM+":"+mEnit+":"+detIk},250);
