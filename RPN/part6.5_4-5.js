//4. counter kelipatan
for(i = 1; i <= 100; i += 2)
    if (i % 3 === 0) {
        console.log(`${i} adalah kelipatan 3`)
    }

console.log(' ')

for(i = 1; i <= 100; i += 5)
    if (i % 6 === 0) {
        console.log(`${i} adalah kelipatan 6`)
    }

console.log(' ')

for(i = 1; i <= 100; i += 9)
    if (i % 10 === 0) {
        console.log(`${i} adalah kelipatan 10`)
    }
    
console.log(' ')

// 5. Bintang asteriks
let input = 5
let star = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
    star += "*"
    }
    star += "\n"
}
console.log(star)
