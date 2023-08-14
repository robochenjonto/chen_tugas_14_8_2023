{
    //  lenght
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    
    rl.question("Masukkan sebuah kalimat: ", (inputString) => {
        // Contoh property lenght
        console.log(`Panjang kalimat: ${inputString.lengthmethod}`);
        rl.close();
    });
    }