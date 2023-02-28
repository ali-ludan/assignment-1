let age:number=49;
if(age < 2){
    console.log("the person is baby: ");
}
else if(age === 2 || age < 4){
    console.log("The person is toddler:");
}
else if(age === 4 || age < 13){
    console.log("The pwerson is a kid");
}
else if (age === 13 || age <20){
    console.log("The person is teenager");

}
else if (age === 20 || age <65){
    console.log("The person is an adult");

}
else{
    console.log("The person is an elder");
}