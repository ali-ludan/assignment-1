var guest = ["ali", "aman", "ahsan"];
guest.unshift("Ayub");
guest.splice(2, 0, "Awais");
guest.push("Shuja");
for (var i = 0; i < guest.length; i++) {
    console.log("I wnat to invite you for a dinner. ".concat(guest[i]));
}
