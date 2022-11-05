const isLogged = true;

// FIRST PROMISE

function firstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged == true) {
                resolve(Math.random())
            } else {
                reject(new Error("Error"))
            }
        }, 2000)
    })
}

//SECOND PROMISE

function secondPromise(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0.5) {
                resolve({ name: "John", age: 24 })
            } else {
                reject(new RangeError("Il numero è minore di 0.5"))
            }
        }, 1000)
    })
}

firstPromise(isLogged)   //first promise
    .then((random) => {
        console.log(random)  //mostrami il numero random
        return random;       //restituisci alla second promise il numero random
    })
    .then((number) => secondPromise(number))  //Stamperà a seconda del numero random
    .then((user) => console.log(user))       // Quando la second promise da il via allora stamperà l'user di firstPromise, altrimenti reject di secondPromise
    .catch((err) => console.error(err.message))       //Cattura e stampa errore
    .finally(() => console.log("Finally!"))