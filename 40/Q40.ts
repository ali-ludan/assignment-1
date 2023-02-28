type album ={
    artist:string
    title:string
    tracks?:number

}
function make_album(artist:string, title:string , tracks?:number): album{
    let Album : album={artist,title};
    if (Album )
    {
        Album.tracks = tracks;
    }
    return Album;
}
const album1=make_album("Atif " ,"Adat",3);
const album2=make_album("falak", "dori",4);
const album3=make_album("aijit","khamoshi",5)

console.log(album1);
console.log(album2,);
console.log(album3);