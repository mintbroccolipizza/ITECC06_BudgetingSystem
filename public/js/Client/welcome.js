document.addEventListener('DOMContentLoaded', () => {

    fetch('/login')
        .then(response => response.json())
        .then(data => {

            const listDiv = document.getElementById('welcome-user');
            const h1 = document.createElement('h1');

            h1.textContent = data.first_name;

            listDiv.appendChild(h1);





        })
        .catch(error => console.error('Error fetching data:', error));

})