//DATA ACTUAL
let today = new Date();
//DATA DE ONTEM
let yesterday = new Date(today.setDate(today.getDate() - 1))
//DATA DO DIA DE ONTEM EM ANGOLA
let currentData = yesterday.toLocaleString('pt-BR', { timeZone: 'Africa/Luanda', year: 'numeric', month: '2-digit', day: '2-digit' })
//SUBSTITUIR / POR -
let date = currentData.replaceAll('/', '-')
//DIVIDIR ELEMENTOS DA DATA
let dataVector = date.split("-");
//ORGANIZAR EM FORMATO YYYY-MM-DD
let from = `${dataVector[2]}-${dataVector[1]}-${dataVector[0]}`
//DISPLAY DATA NA PÁGINA
document.querySelector('#current-data').innerText= date

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