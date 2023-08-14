{
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    // charAt
    rl.question("Masukkan sebuah kalimat: ", (inputString) => {
        rl.question("Masukkan indeks yang ingin anda cek: ", (index) => {
            // Konversi nilai indexke tipe Number
            index = Number(index);
            // Periksa apakahindex valid (berada dalam rentang string)
            if (index >= 0 && index < inputString.length) {
                // Gunakan method charAt untuk mendapatkan karakter pada indeks yang diminta 
                const character = inputString.charAt(index);
                console.log(`Karakter pada indeks= ${index}: ${character}`);
            } else {
                console.log("Indeks tidak valid!");
            }
            rl.close()
        })
    })
}