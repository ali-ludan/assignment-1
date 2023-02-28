let guest:string[]=["ali","aman","ahsan"];
guest.unshift("Ayub");

guest.splice(2,0, "Awais");


guest.push("Shuja");

for( let i = 0; i < guest.length; i++) {
    console.log(`I wnat to invite you for a dinner. ${guest[i]}`  )
}