// require('../src/db/connection')
// const User = require('../src/models/user');

const add = (a, b) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                rej('Numbers should be non-negative')
            }
            res(a + b)
        }, 2000);
    })
}

const doWork = async () => {
    const sum = await add(1, -99);
    const sum2 = await add(sum, 50);
    return await add(sum2, -50)
}

doWork().then(res => {
    console.log(res)
}).catch(e => console.log("errorere", e))