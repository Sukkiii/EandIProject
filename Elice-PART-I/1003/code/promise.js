
const getJson = (resource, callback) => {

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                const data = JSON.parse(request.responseText);
                // callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4) {
                // console.log('통신에 장애가 발생하였습니다')
                // callback('통신 장애가 있습니다', request.responseText);
                reject('통신불가');
            }
        })

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/40');
        request.open('GET', resource);
        request.send();
    })
}

// getJson('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => {
//         console.log('resolve', data);
//     }, err => {
//         console.log('rejected', err);
//     })

// getJson('https://jsonplaceholder.typicode.com/todosssss/1')
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log('error', err);
//     })

getJson('https://jsonplaceholder.typicode.com/todos/1').then(data => {
    console.log(data.id);
    return getJson('https://jsonplaceholder.typicode.com/todos/2');
}).then(data => {
    console.log(data.id);
    return getJson('https://jsonplaceholder.typicode.com/todos/3');
}).then(data => {
    console.log(data.id);
}).catch(err => {
    console.log('통신에러:', err);
})