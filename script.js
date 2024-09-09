function konversi(nilai) {

    let angka = parseInt(nilai, 10);

    if (isNaN(angka) || angka < 0 || angka > 100) {
        document.getElementById("oResSub").value = "Nilai angka harus (0-100)";
        return;
    }

    let predikat;

    if (angka >= 81 && angka <= 100) {
        predikat = "A";
    } else if (angka >= 71 && angka <= 80) {
        predikat = "B";
    } else if (angka >= 56 && angka <= 70) {
        predikat = "C";
    } else if (angka >= 41 && angka <= 55) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    document.getElementById("oResSub").value = predikat;
}
