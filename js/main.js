var addMoney = prompt("Pulingizni kiriting");
var aviaBilet = 500;
var hotel = 250;
var museum = 120;
aviaBilet = Number(aviaBilet * 10900);
hotel = Number(hotel * 10900);
museum = Number(museum * 12272.8);
totalMoney = Number(aviaBilet + hotel + museum);


if(addMoney >= totalMoney){
    console.log("Oq yo'l, Alisher");
}else {
    console.log("Alisher ozgina sabr qilish kerak bo'lar ekan");
}




















