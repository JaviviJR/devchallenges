const BASE_URI = 'https://restcountries.com/v3.1';

export async function getAllCountries(fields = []) {
    let url = `${BASE_URI}/all`;
    if (fields.length > 0) {
        url = `${BASE_URI}/all?fields=${fields.toString()}`;
    }

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error)
            throw error;
        })
}