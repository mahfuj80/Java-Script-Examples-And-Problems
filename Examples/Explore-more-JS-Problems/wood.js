/*
fixed: per item wood requirements
 1. chair --> 3 cft
 2. table --> 10 cft
 3. bet --> 50 cft

 vary: quantity;
 */

function woodCalculator(chairQuantity, tableQuantity, betQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const betWood = betQuantity * perBedWood;

    // console.log(chairQuantity, tableQuantity, betQuantity);

    const totalWood = chairWood + tableWood + betWood;
    return totalWood;
}

const totalWood = woodCalculator(1, 1, 1);
console.log('Total Wood Required:', totalWood);
