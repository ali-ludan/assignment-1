var current_users = ["ali@123", "shuja@123", "arslan@123", "awais@123", "najf@123"];
var users = ["ali@123", "shuja@123", "arslan@123", "asad@123", "ata@123"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    var isUserTaken = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (user.toLowerCase() === current_user.toLowerCase()) {
            console.log("the username " + user + " is already taken , please chose different one");
            isUserTaken = true;
            break;
        }
    }
    if (!isUserTaken) {
        console.log("The username is " + user + " is available ");
    }
}
