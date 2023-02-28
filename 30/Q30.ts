const usernames: string[] = ['admin', 'Ali', 'Awais', 'Arslan', 'Shuja'];

for (const username of usernames) {
  if (username === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log("Heloo " + username + " thnk you for login again");
  }
}
