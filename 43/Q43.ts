
function printing(names) {
    for (let k = 0; k < names.length; k++) {
        console.log(names[k]);
    }
}
function make_great(ar) {
    let magic:string[] = [];
    for (let k = 0; k < ar.length; k++) {
        magic.push(ar[k] + ' great magicain');
    }
    return magic;
}
let magicain = ['ali', 'ahsan', 'ahmad', 'usama'];
printing(magicain);
let great_magician = make_great(magicain);
printing(great_magician);