function make_Great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = "He is  a great " + magician[i];
    }
}
function show_magician1(magician) {
    console.log(magician);
}
var magician = ["ali", "ludan", "awais"];
make_Great(magician);
show_magician1(magician);
