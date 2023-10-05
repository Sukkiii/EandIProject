// callback chain 을 통해서 하나하나 데이터 불러와보기.

const getCommunicate = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // console.log('통신에 장애가 발생하였습니다')
            callback('통신 장애가 있습니다', request.responseText);
        }
    })

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/40');
    request.open('GET', resource);
    request.send();
}

getCommunicate('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
    console.log(data.title);
    console.log(data.id);
    getCommunicate('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
        console.log(data.title);
        console.log(data.id);
        getCommunicate('https://jsonplaceholder.typicode.com/todos/3', (err, data) => {
            console.log(data.title);
            console.log(data.id);
        })
    })
})