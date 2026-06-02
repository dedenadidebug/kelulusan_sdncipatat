const databaseSiswa = [

  {
    peserta: "25-0229-001",
    nama: "Aditya Nugraha",
    foto: "assets/siswa/aditya.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-002",
    nama: "Aqila Azzahra",
    foto: "assets/siswa/aqila.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-003",
    nama: "ARA ANGGRAINI",
    foto: "assets/siswa/ara.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-004",
    nama: "Dammas Adikaka",
    foto: "assets/siswa/damas.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-005",
    nama: "Fiqrie Septian Saefudin",
    foto: "assets/siswa/fiqrie.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-006",
    nama: "KARYANA SIDIK SYAHPUTRA",
    foto: "assets/siswa/karyana.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-007",
    nama: "Malikha Nur Hasanah",
    foto: "assets/siswa/malikha.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-008",
    nama: "Muhamad Raihan Wildan Firdaus",
    foto: "assets/siswa/raihan.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-009",
    nama: "Muhammad Raka Al Fariji",
    foto: "assets/siswa/raka.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-010",
    nama: "Refan Triana Nugraha",
    foto: "assets/siswa/refan.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-011",
    nama: "Regina Eka Saputri",
    foto: "assets/siswa/regina.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-012",
    nama: "RIZAL MEI ALFARIZI",
    foto: "assets/siswa/rizal.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-013",
    nama: "Taopik Hidayat",
    foto: "assets/siswa/topik.jpg",
    status: "LULUS"
  },

  {
    peserta: "25-0229-014",
    nama: "Wildan Fakhrureza",
    foto: "assets/siswa/wildan.jpg",
    status: "LULUS"
  }

];

let fireworksInterval;

// ENTER OTOMATIS

document.getElementById("peserta").addEventListener("keypress", function(e){

  if(e.key === "Enter"){

    cekKelulusan();

  }

});

function cekKelulusan(){

  const peserta = document
    .getElementById("peserta")
    .value
    .trim();

  const siswa = databaseSiswa.find(function(data){

    return data.peserta === peserta;

  });

  if(!siswa){

    alert("No. Peserta tidak ditemukan");

    return;

  }

  const checkingScreen =
    document.getElementById("checking-screen");

  checkingScreen.style.display = "flex";

  setTimeout(function(){

    checkingScreen.style.display = "none";

    document
      .getElementById("home-page")
      .classList.remove("active");

    document
      .getElementById("result-page")
      .classList.add("active");

    document.getElementById("fotoSiswa").src =
      siswa.foto;

    document.getElementById("namaSiswa").innerText =
      siswa.nama;

    document.getElementById("pesertaSiswa").innerText =
      "No. Peserta : " + siswa.peserta;

    const status =
      document.getElementById("statusKelulusan");

    status.innerText = siswa.status;

    speechSynthesis.cancel();

    if(siswa.status === "LULUS"){

      status.className = "lulus";

      const suara =
        new SpeechSynthesisUtterance(
          "Selamat, kamu dinyatakan lulus."
        );

      suara.lang = "id-ID";

      speechSynthesis.speak(suara);

      mulaiKembangApi();

    }else{

      status.className = "tidak-lulus";

      const suara =
        new SpeechSynthesisUtterance(
          "Maaf, kamu dinyatakan tidak lulus."
        );

      suara.lang = "id-ID";

      speechSynthesis.speak(suara);

      stopKembangApi();

    }

  }, 4000);

}

function kembali(){

  document
    .getElementById("result-page")
    .classList.remove("active");

  document
    .getElementById("home-page")
    .classList.add("active");

  stopKembangApi();

  speechSynthesis.cancel();

}

function mulaiKembangApi(){

  stopKembangApi();

  fireworksInterval = setInterval(function(){

    confetti({

      particleCount: 140,
      spread: 120,
      startVelocity: 45,
      scalar: 1.2,

      origin: {

        x: Math.random(),
        y: Math.random() - 0.2

      }

    });

  }, 700);

}

function stopKembangApi(){

  clearInterval(fireworksInterval);

}