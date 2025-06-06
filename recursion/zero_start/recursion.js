const loopik = (value) => {
    console.log('value: ', value)
    if (typeof value  !== 'number') new Error("Invalid type of param. Expect int")
    if (value >= 100) return value;
    loopik(value * 10);
}


loopik(5);
