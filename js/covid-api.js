//DATA ACTUAL
let today = new Date();
//DATA DE ONTEM
let yesterday = new Date(today.setDate(today.getDate() - 1))
//DATA DO DIA DE ONTEM EM ANGOLA
let currentData = yesterday.toLocaleString('pt-BR', {
    timeZone: 'Africa/Luanda',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
})
//SUBSTITUIR / POR -
let date = currentData.replaceAll('/', '-')
//DISPLAY DATA NA PÁGINA
document.querySelector('#current-data').innerText = date

const url = 'https://corona.lmao.ninja/v2/countries/Angola?yesterday&strict&query%20'
fetch(url).then((response) => response.json())
    .then(function (data) {
        const result = data;
        //console.log(result)
        document.querySelector('#confirmedCase').innerText = result.cases
        document.querySelector('#activeCase').innerText = result.active
        document.querySelector('#deaths').innerText = result.deaths
        document.querySelector('#recovered').innerText = result.recovered

    })
    .catch((error) => {
        console.log('error', error)
    })