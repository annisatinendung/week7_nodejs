// Fungsi untuk menghitung luas persegi
exports.luasPersegi = function(sisi) {
    return sisi * sisi;
  };
  
// Fungsi untuk menghitung keliling persegi
  exports.kelilingPersegi = function(sisi) {
    return 4 * sisi;
  };
  
// Fungsi untuk menghitung luas persegi panjang
  exports.luasPersegiPanjang = function(panjang, lebar) {
    return panjang * lebar;
  };
  
 // Fungsi untuk menghitung keliling persegi panjang
  exports.kelilingPersegiPanjang = function(panjang, lebar) {
    return 2 * (panjang + lebar);
  };
