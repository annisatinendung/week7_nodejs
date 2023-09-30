const fs = require('fs')
const calc = require ('./calc.js')

//menghitung luas dan keliling persegi 
const sisiPersegi = (11)
console.log(`Luas Persegi: ${calc.luasPersegi(sisiPersegi)}`);
console.log(`Keliling Persegi: ${calc.kelilingPersegi(sisiPersegi)}`);

//menghitung luas dan keliling persegi panjang
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;
console.log(`Luas Persegi Panjang: ${calc.luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);
console.log(`Keliling Persegi Panjang: ${calc.kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang)}`);

fs.writeFile('log.txt',payload,(err,data) => {
    if (err) {console.error(err)};

    console.log ("Data succesfully  writted");
})

fs.readFile('log.txt','utf-8',(err,data) => {
    if (err) {console.error(err)};

    console.log ("Data succesfully read :" ,data);
})




