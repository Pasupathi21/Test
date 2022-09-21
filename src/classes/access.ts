
export default interface Accesstypes {
    personId: number;
    positionType: string;
    allowArea47?: boolean 
}

export default class AccessModifiers {

    key;
    constructor(private pass: Accesstypes){
        this.key = this.pass;
    }
    
    areaOne(code: number){
        console.log(`Inside the Area 1: ${code}`)
    }

    areaFourtySeven(secretCode: number | string){
        console.log(`Inside the Area 47`)
        if(!this.key.allowArea47)
            return `This ${this.key.personId} Guy no access for this Area`;
        else
            return `This is your secret code for this area ${secretCode}`
    }
}

