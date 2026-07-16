// =======================
// Goal Counter Animation
// =======================

let target = 100000;
let current = 0;

let counter = document.getElementById("counter");


let timer = setInterval(()=>{

    current += 1250;

    if(current >= target){

        current = target;
        clearInterval(timer);

    }


    counter.innerHTML =
    "$" + current.toLocaleString();


},30);




// =======================
// Copy Wallet Address
// =======================


function copyWallet(){

let wallet =
document.getElementById("wallet").innerText;


navigator.clipboard.writeText(wallet);


alert("Wallet Address Copied Successfully ✓");


}





// =======================
// Multi Language System
// =======================


const translations = {


en:{

title:
"100,000 Dollars To Start My First Project ❤️",

subtitle:
"A dream, a vision, and the beginning of a powerful journey 🚀"

},



fa:{

title:
"۱۰۰ هزار دلار برای شروع اولین پروژه من ❤️",

subtitle:
"یک رویا، یک هدف و شروع یک مسیر قدرتمند 🚀"

},



de:{

title:
"100.000 Dollar zum Start meines ersten Projekts ❤️",

subtitle:
"Ein Traum, eine Vision und der Beginn einer starken Reise 🚀"

},



fr:{

title:
"100 000 dollars pour commencer mon premier projet ❤️",

subtitle:
"Un rêve, une vision et le début d'un grand voyage 🚀"

},



es:{

title:
"100,000 dólares para comenzar mi primer proyecto ❤️",

subtitle:
"Un sueño, una visión y el comienzo de un gran viaje 🚀"

},



ar:{

title:
"100 ألف دولار لبدء مشروعي الأول ❤️",

subtitle:
"حلم ورؤية وبداية رحلة قوية 🚀"

},



zh:{

title:
"10万美元开始我的第一个项目 ❤️",

subtitle:
"一个梦想，一个愿景，一段伟大的旅程开始 🚀"

},



ru:{

title:
"100 000 долларов для запуска моего первого проекта ❤️",

subtitle:
"Мечта, видение и начало большого пути 🚀"

},



tr:{

title:
"İlk projemi başlatmak için 100.000 dolar ❤️",

subtitle:
"Bir hayal, bir vizyon ve güçlü bir yolculuğun başlangıcı 🚀"

}


};





let language =
document.getElementById("languageSelect");



language.addEventListener("change",()=>{


let selected =
language.value;


localStorage.setItem(
"siteLanguage",
selected
);


changeLanguage(selected);


});






function changeLanguage(lang){


let data =
translations[lang];


if(!data)
return;



document.querySelector(".hero h1")
.innerHTML =
data.title;



document.querySelector(".subtitle")
.innerHTML =
data.subtitle;


}





// Save user language


let savedLanguage =
localStorage.getItem("siteLanguage");


if(savedLanguage){

language.value =
savedLanguage;


changeLanguage(savedLanguage);

}






// =======================
// Comment System (Ready)
// =======================


// این بخش فعلا آماده است.
// مرحله بعد با Firebase وصل می‌کنیم.


function sendComment(){


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let message =
document.getElementById("message").value;



if(
name=="" ||
email=="" ||
message==""

){

alert("Please fill all fields");

return;

}




alert(
"Your message was sent and waiting for approval ❤️"
);



// بعد از اتصال Firebase:
// اطلاعات اینجا ذخیره می‌شود.



}
