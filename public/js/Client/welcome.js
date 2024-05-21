document.addEventListener('DOMContentLoaded', function() {

    const listDiv = document.getElementById('welcome-user');

    fetch('/login')
        .then(response => response.json())
        .then(data => {

            data.forEach(name => {
                const h1 = document.createElement('h1');
                h1.textContent = 'Welcome ' + name.first_name;

                listDiv.appendChild(h1);
            });



            // const h1 = document.createElement('h1');
            // h1.textContent = data.first_name;

            // listDiv.appendChild(h1);





        })
        .catch(error => console.error('Error fetching data:', error));

})