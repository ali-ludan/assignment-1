var guests = ["ali", "aman", "ahsan", "Ayub", "Asad"];
console.log(guests);
while (guests.length > 2) {
    var guestToRemove = guests.pop();
    console.log("I am sorry for not inviting you ".concat(guestToRemove));
}
for (var i = 0; i < guests.length; i++) {
    console.log("I will be realy happy to invite you fora dinner. ".concat(guests, " "));
}
