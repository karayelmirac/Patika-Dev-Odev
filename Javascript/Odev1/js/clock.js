let name3 = prompt("Kullanıcı Adınızı Giriniz.")
let name2 = document.querySelector("#myName")

name2.innerHTML = (name3);



let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()];
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    
    setInterval(clockFunction, 1000);
