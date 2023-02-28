let ordinal_number:number[]=[1,2,3,4,5,6,7,8,9]
for(let i=0; i< ordinal_number.length;i++){
    let ordinal_ending:string ="th";
    if(ordinal_number[i]===1){
    ordinal_ending="st";
    }
    else if (ordinal_number[i] ===2){
        ordinal_ending="nd"

    }
    else if (ordinal_number[i]=== 3){
    ordinal_ending="rd"
    }
    console.log(ordinal_number[i]+ordinal_ending)
}