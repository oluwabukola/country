const button = document.querySelector('button');
const countries = document.querySelector('.countries');
const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('tbody');

button.addEventListener('click', (e) => {
    e.preventDefault();
    countries.style.display = "block";
    submitBtn.style.display = "none";
    
})
const response = fetch('https://restcountries.eu/rest/v2/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                },
                
            })
                .then(response => {
                  return  response.json();
                    
                })
                .then(data => {
                    console.log(data);
                    data.map(cont => {
                        console.log(cont.name);
                        table.innerHTML += `
                                <tr >
                                <td>${cont.name}</td>
                                <td>${cont.capital}</td>
                                <td>${cont.region}</td>
                                <td>${cont.population}</td>
                                <td ><img src=${cont.flag}></td>
                                 </tr>`
                    
                    })
                    })
                
                .catch((error) => {
                    console.error('Error:', error);
                  });
