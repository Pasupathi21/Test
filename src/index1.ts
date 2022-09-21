console.log("Working...");

import Accesstypes from "./classes/access"
import AccessModifiers from "./classes/access";


let accessCard  = {
    personId: 214235,
    positionType: 'Guard',
    allowArea47: false
} as Accesstypes
const accessModifier = new AccessModifiers(accessCard);

console.log(accessModifier.areaFourtySeven(445436546+'safdgehr'))