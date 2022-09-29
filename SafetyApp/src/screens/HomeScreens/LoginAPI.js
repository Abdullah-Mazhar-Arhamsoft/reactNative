export const getLoginAPI = async (url, method, data) => {

    console.log(url, method, data);
  return  await fetch(url, {
        method: method, // or 'PUT'
        headers: {
            'Content-Type': "multipart/form-data",
            'x-auth-token': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODAwMTIwMTcsImlhdCI6MTY0ODQ3NjAxNywic3ViIjoiNjI0MWJkMWVjNzc4NGU3MDE1YjA4ZDE3In0.cMWXoq3n8Oaz2DjiKu54t2cwGQiPF5dVWklZstn1PNI',
        },
        body: data,
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Calling API: ', data);
            return data;
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
} 