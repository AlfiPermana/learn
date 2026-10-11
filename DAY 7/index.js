// const nama = document.getElementById("nama");
// const submit = document.getElementById("submit");
// const hasil = document.getElementById("hasil");

// submit.addEventListener("click", function () {
//   if (nama.value === "") {
//     hasil.textContent = "Please enter your name.";
//   } else {
//     hasil.textContent = "Halo, " + nama.value + "!";
//   }
// });

const nama = document.getElementById("nama");
const submit = document.getElementById("submit");
const hasil = document.getElementById("hasil");

submit.addEventListener("click", function (){
    if 
    ( nama.value === ""){
        hasil.textContent = "Nama Belum diisi";
    } else {
        hasil.textContent = "Halo, " + nama.value + "!";
    }
});
