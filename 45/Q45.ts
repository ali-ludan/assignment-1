function car_info(manufecturer:string, model:string, ...Option:any[]){
    let car = {
        manufecturer:manufecturer,
        model:model,
        


    };

Option.forEach((option) => {
    const key = Object.keys(option)[0]
    const value = option[key] ;
    car [key] = value ;
});
return car ;
}
const car1 =car_info("audi", "E350", {color:"black"},{tyre:true} );
console.log(car1);
