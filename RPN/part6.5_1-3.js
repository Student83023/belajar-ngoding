// 1. Melakukan Looping Menggunakan While
console.log("Looping Pertama: while")
let i = 1;
while(i < 5) {
    console.log(`${i}: maju`)
i++
}

console.log("Looping Kedua: while")
while(i >= 1) {
    console.log(`${i}: mundur`)
i--
}

console.log(' ')

// 2. Melakukan Looping Menggunakan For
console.log("Looping Pertama: for")
for (i = 1; i < 5; i++) {
    console.log(`${i}: maju`)
}

console.log("Looping Kedua: for")
for(i = 5; i >= 1; i--) {
    console.log(`${i}: mundur`)
}

console.log(' ')

// 3. Angka Ganjil dan Genap
console.log("Angka Ganjil atau Genap?")
let j = 1;
    while(j <= 100) {
        if (j % 2 === 0) {
            console.log(`${j}: GENAP`)
        } else {
            console.log(`${j}: GANJIL`)
        }
        j++
    }
