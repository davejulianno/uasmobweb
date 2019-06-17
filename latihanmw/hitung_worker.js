self.onmessage = function(e) {
  var awal = e.data[0];
  var tujuan = e.data[1];
  var berat = e.data[2];
  var jenis = e.data[3];
  var jarak = Math.abs(awal - tujuan)
  var harga = jarak * 10000 * jenis * berat;

  postMessage(harga);
}
