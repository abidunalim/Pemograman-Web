function myFunction() {
    let text;
    let person = prompt("Anda Mau Memesan Apa:", "");
        if (person == null || person == "")
    {
        text = "Pesanan Anda di Batalkan.";
    } else {
        text = " " + person + "Pesanan Anda sedang Di Proses, Silahkan Menunggu Sebentar.";
    }
    document.getElementById("demo").innerHTML = text;
}