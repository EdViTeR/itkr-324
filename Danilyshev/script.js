const user = {
    name: "Никита",
    surname: "Данилышев",
    age: 19,
    location:"Москва",
    activities: {
        sport: "зал",
        food: "шава"
    }
}

const admin = {
    name: "Никита",
    surname: "Данилышев",
    age: 19,
    location:"Москва",
    activities: {
        sport: "зал",
        food: "шава"
    }
}

const areObjectsEqual = (object1, object2) =>{
    
    
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

   
    if (keys1.length !== keys2.length){
        return false
    }


    for (const key in object1){

        const obj1 = object1[key]
        const obj2 = object2[key]

        if (typeof obj1 === "object" && typeof obj2 === "object"){
            areObjectsEqual(obj1, obj2)
        }


        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
} 



console.log(areObjectsEqual(user, admin))