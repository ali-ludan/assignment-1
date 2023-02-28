let current_users:string[]=["Ali@123","shuja@123","arslan@123","awais@123","najf@123"]
let users:string[]=["ali@123","shuja@123","arslan@123","asad@123","ata@123"]

for(let user of users){
let isUserTaken = false;
for(let current_user of current_users){
    if(user.toLowerCase() === current_user.toLowerCase()){
        console.log("the username " + user +" is already taken , please chose different one");
        isUserTaken = true;
    break;
    }
    
}
if(!isUserTaken){
    console.log("The username is "+user + " is available " );
}
}



