//DATA ACTUAL
let date = new Date();

let currentData = document.querySelector('#current-data').innerText = `${date.getDate()-1}-${date.getMonth()}-${date.getFullYear()}`

let from = `${date.getFullYear()}-${date.getMonth()}-${date.getDate() - 1}`

console.log(currentData)
const url = 'https://api.covid19api.com/live/country/angola/status/confirmed/date/' + from


fetch(url).then((response) => response.json())
    .then(function (data) {
        const results = data;

        return results.map(function (result) {
            document.querySelector('#confirmedCase').innerText = result.Confirmed
            document.querySelector('#activeCase').innerText = result.Active
            document.querySelector('#deaths').innerText = result.Deaths
        })

    })
    .catch((error) => {
        console.log('error', error)
    })