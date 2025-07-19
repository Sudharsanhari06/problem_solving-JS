class Car{
    drive(){
        console.log("Driving");
    }
}

function fillGas(){
    console.log("Filling gas");
}
function repair(){
    console.log("Repairing..");
}


module.exports={
    Car,
    repair,
    fillGas
}