const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(
  function (){
    let total =0;
    batteryBatches.map(element => total +=element)
    console.log(total)
    return total
  }
)
console.log(totalBatteries)

