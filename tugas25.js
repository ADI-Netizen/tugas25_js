function dualima() {
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    console.log("Sebelumnya : ", angka.toString())
    angka = angka.sort()
    console.log("Ascending : ", angka.toString())
    angka = angka.reverse()
    console.log("Descending : ", angka.toString())
    var dl = angka.filter(function (no) {
        return no > 10;
    });
    console.log("Filter > 10 : ", dl.toString())
}

dualima()
