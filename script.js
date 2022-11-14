
let url1=document.getElementById("url").value;




 function  generateqr(url){

        document.getElementById("qrcode").innerHTML="your qr : "

        new QRCode(document.getElementById("qrcode"),url);


}