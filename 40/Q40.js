function make_album(artist, title, tracks) {
    var Album = { artist: artist, title: title };
    if (Album) {
        Album.tracks = tracks;
    }
    return Album;
}
var album1 = make_album("Atif ", "Adat", 3);
var album2 = make_album("falak", "dori", 4);
var album3 = make_album("aijit", "khamoshi", 5);
console.log(album1);
console.log(album2);
console.log(album3);
