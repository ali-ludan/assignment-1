
const guests = ['Albert Einstein', 'Allama Iqbal', 'Zia Khan'];


const invitationMessage = (guestName: string) => `Dear ${guestName},

I hope this message finds you well. I am writing to extend a dinner invitation to you. As someone I admire greatly, your presence at the dinner would make it an unforgettable experience. I look forward to sharing good food and engaging conversation with you.

Please let me know if you are able to attend.

Sincerely,
[Muhammad Ali]`;


for (const guest of guests) {
  console.log(invitationMessage(guest));
}
