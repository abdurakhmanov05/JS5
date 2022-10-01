const user = {
    name: 'Parviz',
    surname: 'Jamshedov',
    age: 23,
    isMarried: true,
    wives: ['Nargiz,', 'Amina', 'Alexandra'],
}

const pasport = {
    serries: 'AC',
    number: 398127369812,
    date: 27,
    location: {
        country: 'UZB',
        city:'Samarkand'
    }
} 

let con = []

console.log(
    con.push(Object.assign(user, pasport))
);

let keys = []

console.log(
    keys.push(Object.keys(user)) 
);

let values = []

console.log(
    values.push(Object.values(user))
);

let arr = []

console.log(
    arr.push(con.concat(keys, values))
);

let types = {
    number: [],
    string: [],
    boolean: [],
    object: []
}

console.log(
    arr.filter(n => typeof n === 'number' && arr.push(types.number))
);

// ТЗ
// Соеденить два объекта в один 
// вытащить от туда все ключи в массив и сохранть в отдельной переменной  
// вытащить от туда все значения в массив и сохранть в отдельной переменной  
// Соеденить два массива в один целый 
// и отфильтровать их по типам данных элементов