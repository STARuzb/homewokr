///1
// function oyin(player1, player2) {
//     if (player1 === player2) {
//       return "Draw!";
//     } else if (
//       (player1 === "rock" && player2 === "scissors") ||
//       (player1 === "paper" && player2 === "rock") ||
//       (player1 === "scissors" && player2 === "paper")
//     ) {
//       return "Player 1 won!";
//     } else {
//       return "Player 2 won!";
//     }
//   }
//   let chiqish1 = oyin("scissors", "paper");
//   console.log(chiqish1);
//   let chiqish2 = oyin("scissors", "scissors");
// console.log(chiqish2);
//sharti:
//Rok qog'oz qaychi Keling o'ynaymiz! Qaysi o'yinchi g'alaba qozonganini qaytarishingiz kerak Durang bo'lsa qaytish Draw


///2
// let massiv = ["saqlash", "olib tashlash", "saqlash", "olib tashlash", "saqlash", "olib tashlash"];
// let yangiMassiv = [];
// for (let i = 0; i < massiv.length; i += 2) {
//   yangiMassiv.push(massiv[i]);
// }
// console.log(yangiMassiv);
//sharti:
//Massivni oling va har ikkinchi elementni massivdan olib tashlang Har doim birinchi elementni saqlang va
//keyingi element bilan olib tashlashni boshlang.



///3
// function oyintaxmini(foydalanuvchiTaxmi, chegra) {
//     let togriTaxminku = Math.floor(Math.random() * chegra) + 1;
  
//     if (foydalanuvchiTaxmi === togriTaxminku) {
//       return "To'g'ri! Siz yutdingiz!";
//     } else if (foydalanuvchiTaxmi > chegra) {
//       return "Xato! Siz chegaradan tashqari taxmin qilmoqdasiz. Hayotni yo'qotingiz!";
//     } else {
//       return "Xato! Yana urunib ko'ring.";
//     }
//   }
//   let foydalanuvchiTaxmi = 4;
//   let chegra = 7;
//   let natija = oyintaxmini(foydalanuvchiTaxmi, chegra);
//   console.log(natija);
//sharti:
//asavvur qiling siz o'yin yaratyapsiz unda foydalanuvchi to'g'ri raqamni taxmin qilishi kerak. Lekin foydalanuvchi qancha taxmin qilish mumkinligi chegarasi bor Agar foydalanuvchi chegaradan ko'proq taxmin qilishga harakat qilsa, funktsiya xatoga yo'l qo'yishi kerak
//Agar foydalanuvchi taxmini to'g'ri bo'lsa, u haqiqatga qaytishi kerak
//Agar foydalanuvchi taxmini noto'g'ri bo'lsa, u yolg'onni qaytarishi va hayotni yo'qotishi kerak



///4
// function hisobla(n, son) {
//     let natijalar = [];
//       for (let i = 1; i <= son; i++) {
//       natijalar.push(n * i);
//     }
//     return natijalar;
//   }
//     let misol1 = hisobla(2, 10);
//   console.log(misol1); 
//   let misol2 = hisobla(1, 10);
//   console.log(misol2); 
//sharti:
//n ning birinchi karrali massivni qaytaradigan ikkita argumentli funksiya yarating x
//Faraz qilaylik, berilgan son ham sanaladigan martalar soni ham dan kattaroq ijobiy sonlar bo'ladi 0



///5
// let MrFreeze = {};
// Object.freeze(MrFreeze);
// MrFreeze.x = 10; 

// console.log(MrFreeze);
//shart:
//MrFreeze deb nomlangan ob'ekt/sinf allaqachon yaratilgan. 
//Ushbu ob'ektga boshqa hech qanday o'zgartirish kiritilmasligi uchun muzlatilgan deb belgilang.



///6
// function togrihayvon(boq, quyruq) {
//     let oxirgiHarfBoq = boq.charAt(boq.length - 1);
//     let birinchiHarfQuyruq = quyruq.charAt(0);
//     if (oxirgiHarfBoq.toLowerCase() === birinchiHarfQuyruq.toLowerCase()) {
//       return boq;
//     } else {
//       return "Yolg'on";
//     }
//   }

//   console.log(togrihayvon("qo'y", "yoz")); 
//   console.log(togrihayvon("qo'y", "garmdori")); 
//sharti:
//Hayvonot bog'iga bir nechta yangi hayvonlar keldi. Hayvonot bog'i qo'riqchisi hayvonlarning to'g'ri dumlari yo'qligidan xavotirda. Unga yordam berish uchun,
//ikkinchi argument (quyruq) birinchi argumentning oxirgi harfi (tanasi) bilan bir xil ekanligiga ishonch hosil qilish uchun buzilgan funktsiyani tuzatishingiz kerak - aks holda dum mos kelmaydi!
//Agar quyruq to'g'ri bo'lsa, rostni qaytaring, aks holda yolg'onni qaytaring.
//Argumentlar har doim bo'sh bo'lmagan satrlar va oddiy harflar bo'ladi.



///7
// function bolinadiganRaqam(numbers, divisor) {
//     let natija = numbers.filter(number => number % divisor === 0);
  
//     return natija;
//   }
//   let kirishMassiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   let bolinuvchi = 2;
//   let chiqishMassiv = bolinadiganRaqam(kirishMassiv, bolinuvchi);
//   console.log(chiqishMassiv);
//sharti:
//Ikki argumentni qabul qiladigan va berilgan bo'linuvchiga bo'linadigan barcha raqamlarni qaytaradigan funktsiyani bajaring. Birinchi argument ning massivi numbers, ikkinchisi esa divisor.
//Misol (Kirish1, Kirish2 --> Chiqish)
//[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]



///8
// function yigindinoHisoblash(raqamQator) {
//     let massiv = raqamQator.split('');
//     let yigindi = massiv.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  
//     return yigindi;
//   }
//   let raqamQator = "123455";
//   let yigindi = yigindinoHisoblash(raqamQator);
//   console.log(yigindi); 
//sharti:
//Butun sonlar qatori qatorlar va raqamlar sifatida berilgan bo'lsa, massiv qiymatlari yig'indisini xuddi hammasi raqamlar kabi qaytaring.
//Javobingizni raqam sifatida qaytaring.



//9
// function jadvalSirti(uzunlik, eni, balandlik) {
//     let sirtMaydon = uzunlik * eni;
//     let hajm = uzunlik * eni * balandlik;
  
//     return [sirtMaydon, hajm];
//   }
//   let uzunlik = 7;
//   let eni = 5;
//   let balandlik = 17;
  
//   let natija = jadvalSirti(uzunlik, eni, balandlik);
//   console.log(natija); 
//sharti:
//Jadvalning umumiy sirt maydoni va hajmini massiv sifatida qaytaruvchi funktsiyani yozing:[area, volume]



///10
function jangovar(hozirgiSoglig, zararMiqdori) {
    let yangiSoglig = hozirgiSoglig - zararMiqdori;
    yangiSoglig = Math.max(yangiSoglig, 0);
  
    return yangiSoglig;
  }
  
  let hozirgiSoglig = 70;
  let zararMiqdori = 37;
  
  let yangiSoglig = jangovar(hozirgiSoglig, zararMiqdori);
  console.log(yangiSoglig);