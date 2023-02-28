function printing(names) {
    for (var k = 0; k < names.length; k++) {
        console.log(names[k]);
    }
}
function make_great(ar) {
    var magic = [];
    for (var k = 0; k < ar.length; k++) {
        magic.push(ar[k] + ' great magicain');
    }
    return magic;
}
var magicain = ['ali', 'ahsan', 'ahmad', 'usama'];
printing(magicain);
var great_magician = make_great(magicain);
printing(great_magician);
