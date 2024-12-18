// Fungsi untuk navigasi antar halaman
function navigateTo(page) {
    // Mengarahkan pengguna ke halaman yang ditentukan
    window.location.href = page;
}

// Membuat menu utama di halaman index.html
const menu = [
    { title: "Penjumlahan", page: "penjumlahan.html" },
    { title: "Pengurangan", page: "pengurangan.html" }
];

// Mendapatkan elemen dengan id "menu-container" untuk menampilkan menu
const menuContainer = document.getElementById("menu-container");
if (menuContainer) {
    // Menggunakan forEach untuk membuat menu dari array `menu`
    menu.forEach(item => {
        // Membuat elemen card untuk setiap menu
        const card = document.createElement("div");
        card.className = "card"; // Menambahkan kelas CSS "card" pada elemen div
        card.innerHTML = `
            <h2>${item.title}</h2> <!-- Menampilkan judul menu -->
            <button class="btn" onclick="navigateTo('${item.page}')">Mulai Belajar</button> <!-- Tombol untuk navigasi -->
        `;
        // Menambahkan elemen card ke dalam menuContainer
        menuContainer.appendChild(card);
    });
}

// Soal Penjumlahan
const soalPenjumlahan = [
    { soal: "5 + 3", jawaban: 8 },
    { soal: "7 + 2", jawaban: 9 },
    { soal: "4 + 6", jawaban: 10 }
];

// Soal Pengurangan
const soalPengurangan = [
    { soal: "10 - 4", jawaban: 6 },
    { soal: "8 - 3", jawaban: 5 },
    { soal: "7 - 2", jawaban: 5 }
];

// Mendapatkan elemen dengan id "soal-container" untuk menampilkan soal
const soalContainer = document.getElementById("soal-container");
if (soalContainer) {
    // Memilih soal yang akan ditampilkan berdasarkan halaman yang dibuka
    const currentSoal = window.location.pathname.includes("penjumlahan") ? soalPenjumlahan : soalPengurangan;

    // Menggunakan forEach untuk membuat soal dari array yang dipilih
    currentSoal.forEach((item, index) => {
        // Membuat elemen div untuk setiap soal
        const soalElement = document.createElement("div");
        soalElement.innerHTML = `
            <p>${item.soal} = ?</p> <!-- Menampilkan soal -->
            <input type="number" id="question${index}"> <!-- Input untuk jawaban pengguna -->
            <button class="btn" onclick="checkAnswer('question${index}', ${item.jawaban})">Periksa</button> <!-- Tombol untuk memeriksa jawaban -->
            <span id="question${index}-result"></span> <!-- Menampilkan hasil periksa jawaban -->
        `;
        // Menambahkan soal ke dalam soalContainer
        soalContainer.appendChild(soalElement);
    });
}

// Fungsi untuk memeriksa jawaban yang dimasukkan oleh pengguna
function checkAnswer(questionId, correctAnswer) {
    // Mengambil nilai input jawaban dari pengguna berdasarkan id
    const userAnswerInput = document.getElementById(questionId);
    const userAnswer = userAnswerInput.value.trim();
    
    // Mengambil elemen tempat hasil periksa jawaban akan ditampilkan
    const resultContainer = document.getElementById(`${questionId}-result`);

    // Jika pengguna tidak mengisi jawaban, tampilkan peringatan
    if (!userAnswer) {
        alert("⚠️ Silakan isi jawaban terlebih dahulu!");
        return;
    }

    // Jika jawaban pengguna benar
    if (parseInt(userAnswer, 10) === correctAnswer) {
        resultContainer.textContent = "✔️ BENAR"; // Menampilkan hasil benar
        resultContainer.style.color = "green"; // Warna teks hijau untuk benar
    } else {
        resultContainer.textContent = "❌ SALAH"; // Menampilkan hasil salah
        resultContainer.style.color = "red"; // Warna teks merah untuk salah
    }
}
