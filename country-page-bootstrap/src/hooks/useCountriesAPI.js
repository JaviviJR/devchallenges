const BASE_URI = 'https://restcountries.com/v3.1';

export async function getAllCountries(fields = []) {
    let uri = `all`;
    if (fields.length > 0) {
        uri = `all?fields=${fields.toString()}`;
    }

    return makeRequest(uri);
}

export async function getCountryByCode(code) {
    return makeRequest(`alpha/${code}`);
}

function makeRequest(uri) {
    return fetch(`${BASE_URI}/${uri}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response)
            }
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('makeRequest error', error)
            throw error;
        })
}

// export async function testingSeveralRequest(borders) {
//     console.log('testingSeveralRequest', borders);
//     const promisesArray = borders.map((border) => getCountryByCode(border));
//     console.log('promisesArray', promisesArray);

//     const resolved = await Promise.all(promisesArray).then((data) => {
//         console.log('then data', data);
//         return data;
//     });
//     console.log('promisesArray - 2', promisesArray);
//     console.log('resolvedArray', resolved);
// }