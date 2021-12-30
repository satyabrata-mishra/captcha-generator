let captcha;
let sta = document.getElementById("wrapper");
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
const generate = () => {
let first = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
let second = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
let third = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
let fourth = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
let fifth = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
let sixth = alphabets[Math.floor(Math.random() * (alphabets.length-0))];
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
console.log("Generated Captcha Is "+captcha);
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
}
const check = () => {
let userValue = document.getElementById("entered-captcha").value;
console.log("User Given Captcha Is "+userValue);
if(userValue==0){
    sta.innerText = "Empty Captcha Field!!";
    generate();
}
else if(userValue == captcha){
    sta.innerText = "Correct Captcha!!"
    generate();
}else{
    sta.innerText = "Incorrect Captcha!! Try Again!!"
    generate();
}
}