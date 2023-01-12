// button submit about
function postData() {
  const nama_lengkap = document.getElementById("nama_lengkap").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  // let myNumber = "+62 857-8718-6651"

  //   alert(nama_lengkap);

  const str = `Hallo Nama saya: ${nama_lengkap}, email saya: ${email}, dan ini pesan dari Saya: ${pesan}`;
  //   alert(str);

  location.href = "https://wa.me/+6285787186651?text=" + str;
}
