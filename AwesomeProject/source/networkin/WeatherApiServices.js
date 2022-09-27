
export const getWeather = async (url, method) => {

    let res;
    await fetch(url, {
        method: method, // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: null
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success API Weather data : ');
            res = data;
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
        console.log(res);
        return res;
} 