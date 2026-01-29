// 1217. Minimum Cost to Move Chips to The Same Positio
var minCostToMoveChips = function(position) {
    let odd=0;
    let even=0;

    for(let item of position){
        if(item%2){
            odd++;
        }else{
            even++;
        }
    }

return Math.min(odd,even);

};
let position = [1,2,3];
let positionTwo = [2,2,2,3,3]
console.log( minCostToMoveChips(position));
console.log(minCostToMoveChips(positionTwo));