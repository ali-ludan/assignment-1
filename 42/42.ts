function make_Great(magician:string[]){
    for(let i=0; i<magician.length; i++){
        magician[i]="He is  a great " +magician[i];
    }
}
function show_magician1(magician:string[]){
    console.log(magician);

}
let magician:string[]=["ali","ludan","awais"]
make_Great(magician);
show_magician1(magician)
