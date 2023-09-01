function helloWorld() {
    return"Hello World"
}; //fungsi ini punya nilai "Hello World"

console.log(helloWorld());


function test() {
    console.log('halo') //fungsi hanya menampilkan console log
};

test(); 

//return hanya memberi nilai ke fungsi,
//bila tidak memberikan return di fungsi maka
//fungsi tsb undefined.
function tambahAngka(angka1, angka2) {
    return angka1 + angka2;
}

console.log(tambahAngka(1,3));
console.log(tambahAngka(3,6));
console.log(tambahAngka(11,43));
console.log(tambahAngka(15,76));
console.log(tambahAngka(31,59));

console.log('')

function balikKata(kata) {
    let balikKata = "";
    for(let i = kata.length - 1; i >= 0; i--) {        
        balikKata += kata[i];
    }
    return balikKata;
}

console.log(balikKata("Gajah"));
console.log(balikKata("Anoa"));
console.log(balikKata("Parasit"));
console.log(balikKata("Lebah"));
console.log(balikKata("Tikus"));

console.log('')

function nambahHurufBesarSetelahSpasi(kata) {
    let result = ""; 
    for (let i = 0; i < kata.length; i++) { //i++ is 1
        if ((i === 0 || kata[i - 1] === ' ')) { //so it need -1 to get 0 as the first word?
            result += kata[i].toLowerCase(); //could change it into Lower-Uppercase
        } else {
            result += kata[i] //why += tho? confusedcat.jpg
        }
    }
    return result;
}

console.log(nambahHurufBesarSetelahSpasi('Mikey Mouse Cat'))
console.log(nambahHurufBesarSetelahSpasi('Donald Duck Mouse'))
console.log(nambahHurufBesarSetelahSpasi('Goofy Goober Duck'))

