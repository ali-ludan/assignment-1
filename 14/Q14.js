var guests = ['Albert Einstein', 'Allama Iqbal', 'Zia Khan'];
var invitationMessage = function (guestName) { return "Dear ".concat(guestName, ",\n\nI hope this message finds you well. I am writing to extend a dinner invitation to you. As someone I admire greatly, your presence at the dinner would make it an unforgettable experience. I look forward to sharing good food and engaging conversation with you.\n\nPlease let me know if you are able to attend.\n\nSincerely,\n[Muhammad Ali]"); };
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log(invitationMessage(guest));
}
