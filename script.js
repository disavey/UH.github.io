// let nilai = prompt("masukkan nilai! : ", 0);
// let hasil = "";

// switch(true){
//     case nilai > 10:
//     hasil = "D";
//     break;
//     default:
//         document.write("Tidak ada");
// }
// document.write(hasil);

// let nilai = prompt("masukkan nilai! : ", 0);
// let hasil = "";

// switch(true){
//     case nilai >= 91 && nilai <= 101:
//     hasil = "A";
//     break;
//     case nilai >= 81 && nilai <= 90:
//         hasil = "B";
//     break;
//     case nilai >= 71 && nilai <= 80:
//     hasil = "C";
//     break;
//     case nilai >= 61 && nilai <= 70:
//         hasil = "D";
//         case nilai >= 0 && nilai <= 60:
//         hasil = "E";

// }
// document.write(hasil);


//Percabangan operator ternary
//percabangan menggunakan operator ternary merupakan bentuk lain dari percabangan if / else

//comtoh
// let jwb = prompt("apakah jakarta adalah ibu kota ?");
// let jawaban =  (jwb.toUpperCase() == "IYA") ? "benar": "salah";
// document.write(`jawaban anda: <strong>${jawaban}</strong>`)

//Percabangan nested (BERSARANG)
// percabangan nested adalah percabangan bersarang yang berarti bisa membuat blog percabangan di dalam percabangan

//contoh
let user = prompt("username :", "");
let pass = prompt("password", "");
if(user == "Farrel" || "Arkan" || "king barca"){
    if(pass == "Farrel14" || "Farrel1" || "Farrel2"){
        document.write(`<h1> Selamat datang ${user}`);
    }else{
        document.write("Password salah, silahkan coba lagi</p>");
    }
}else{
    document.write("<p>Anda tidak terdaftar </p>");
}