const form = document.getElementById("bmiForm");

function mulaiHitung() {
    document.getElementById("home").style.display = "none";
    document.getElementById("formSection").style.display = "block";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const gender = document.getElementById("gender").value;
    const umur = document.getElementById("umur").value;
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const error = document.getElementById("error");

    error.textContent = "";

    if (nama === "" || gender === "" || umur === "" || isNaN(berat) || isNaN(tinggi)) {
        error.textContent = "Semua input wajib diisi.";
        return;
    }

    if (umur <= 0) {
        error.textContent = "Umur harus lebih dari 0.";
        return;
    }

    if (berat <= 0) {
        error.textContent = "Berat badan harus lebih dari 0.";
        return;
    }

    if (tinggi <= 0) {
        error.textContent = "Tinggi badan harus lebih dari 0.";
        return;
    }

    const tinggiMeter = tinggi / 100;
    const imt = berat / (tinggiMeter * tinggiMeter);

    let kategori = "";
    let saran = "";
    let kelas = "";

    if (imt < 18.5) {
        kategori = "Berat Badan Kurang";
        saran = "Tingkatkan konsumsi makanan bergizi. Konsultasikan dengan tenaga kesehatan bila diperlukan.";
        kelas = "kurang";
    } else if (imt < 25) {
        kategori = "Normal";
        saran = "Pertahankan pola makan sehat. Lakukan olahraga secara rutin.";
        kelas = "normal";
    } else if (imt < 30) {
        kategori = "Berat Badan Berlebih";
        saran = "Kurangi konsumsi makanan tinggi gula dan lemak. Tingkatkan aktivitas fisik.";
        kelas = "berlebih";
    } else {
        kategori = "Obesitas";
        saran = "Terapkan pola hidup sehat. Konsultasikan dengan dokter atau ahli gizi.";
        kelas = "obesitas";
    }

    document.getElementById("hasilNama").textContent = nama;
    document.getElementById("hasilBerat").textContent = berat;
    document.getElementById("hasilTinggi").textContent = tinggi;
    document.getElementById("nilaiImt").textContent = imt.toFixed(2);

    const kategoriElement = document.getElementById("kategori");
    kategoriElement.textContent = kategori;
    kategoriElement.className = kelas;

    document.getElementById("saranKesehatan").textContent = saran;

    document.getElementById("formSection").style.display = "none";
    document.getElementById("hasil").style.display = "block";
});

function resetForm() {
    document.getElementById("bmiForm").reset();
    document.getElementById("error").textContent = "";

    document.getElementById("home").style.display = "block";
    document.getElementById("formSection").style.display = "none";
    document.getElementById("hasil").style.display = "none";
}