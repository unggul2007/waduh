function hitung() {
    let modal = document.getElementById("modal").value;
    let persen = document.getElementById("persen").value;
    let keuntungan = document.getElementById("keuntungan").value;

    let bagiHasil = (persen / 100) * keuntungan;

    document.getElementById("hasil").innerHTML =
        "Bagi hasil Anda: Rp " + bagiHasil.toLocaleString("id-ID");
}
