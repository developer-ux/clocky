// // Window.onload = setInterval (Clock,1000);
// // function Clock(){


//     // var time =new Date()
//     // // console.log(time)
//     // var hours = time.getHours()
//     // // console.log(hours)
//     // var min = time.getMinutes()
//     // // console.log(min)
//     // var sec = time.getSeconds()
//     // // console.log(sec)

    
//     // // document.getElementById.time.innerHTML(hours + ":" + min + ":" + sec);
//     // // document.getElementById("time")(hours + ":" + min + ":" + sec);
//     // // console.log(document.getElementById("time")(hours + ":" + min + ":" + sec));
//     // // alert(hours + ":" + min + ":" + sec)
//     // // document.write (hours + ":" + min + ":" + sec)
//     // // prompt (hours + ":" + min + ":" + sec)



//     // var date =new Date()
//     // // console.log(date)
//     // var tDay = date.getDay()
//     // var dayNames = ["Mon", "Tue","Wed","Thur","Fri","Sat","Sun" ]
//     // var now = new Date();
//     // var theDay = now.getDay();
//     // var nameOfToday = dayNames[theDay];
//     // // clog(nameOfTodayonsole.)
//     // var pM = date.getMonth()
    




//     // var monNames = ["Jun", "Feb","Mar","Apr","May","June","July", "Aug","Sep","Oct","Nov","Dec" ]
//     // var now = new Date();
//     // var theMon = now.getMonth();
//     // var nameOfMonth = monNames[theMon];
//     // // console.log(nameOfMonth)
//     // // console.log(pM)
//     // var pYr = date.getFullYear()
//     // // console.log(pYr)
//     // // document.getElementById("now" ( "tDay"+ ":" + "pM"+ ":" + "pYr"));
















// var rightNow = new Date();
// var tom = rightNow.getDate();
// // console.log(tom);
// var run = rightNow.getMonth(); 
// // console.log(run);
// var mntNames = [ "Jan", "Feb", "Mar", "Apr","May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
// var mntarr = month
// var pmnt = [mntNames]
// // console.log(ron);
// var go = rightNow.getFullYear();
// // console.log(go);



// var currHour = rightNow.getHours();
// // console.log(currHour);
// var currMint = rightNow.getMinutes();
// // console.log(currMint);
// var currSnd = rightNow.getSeconds();

// document.getElementById.Clock("rightNow: "+ "tom" + ":" + "run");
// document.getElementById.rightNow("currHour: "+ "currMint" + ":" + "currSnd");
// console.log(document.getElementById.rightNow("rightNow: "+ "run" + ":" + "go"));

// console.log(document.getElementById.currHour("currHour: "+ "currMint" + ":" + "currsnd"));










window.onload = setInterval (Clock, 1000)
function Clock (){
var rightNow = new Date();
var todayDate = rightNow.getDate();


 var tDay = rightNow.getDay()
 var dayNames = ["Mon", "Tue","Wed","Thu","Fri","Sat","Sun" ]
var nameOfToday = dayNames[tDay];
// console.log(nameOfToday)

var currMon = rightNow.getMonth()
var monNames =  [ "Jan", "Feb", "Mar", "Apr","May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
var  nameOfmon = monNames[currMon];
// console.log(nameOfmon)

var yearArr = rightNow.getFullYear()



var hoursArr = rightNow.getHours()
var mintArr = rightNow.getMinutes()
var secArr = rightNow.getSeconds()


document.getElementById("date").innerHTML = nameOfToday+" "+todayDate+" "+nameOfmon+" "+yearArr
document.getElementById("time").innerHTML = hoursArr + ":0" + mintArr  + ":"+ secArr
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG6SuXxmpKVmdPbWW68R5rHqRzhQOqkwk",
  authDomain: "myclock-18457.firebaseapp.com",
  projectId: "myclock-18457",
  storageBucket: "myclock-18457.appspot.com",
  messagingSenderId: "874757084724",
  appId: "1:874757084724:web:fb0dd6f19a9ecedf5cdc61",
  measurementId: "G-JQ3NH59HHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);