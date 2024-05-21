document.addEventListener('DOMContentLoaded', function() {

    const listDiv = document.getElementById('list-expense');

    fetch('/get-information-expense')
        .then(response => response.json())
        .then(data => {

            listDiv.innerHTML = ''; // Clear previous content   

            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');
            const tr = document.createElement('tr');

            const headers = ['Date', 'Description', 'Amount'];

            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                tr.appendChild(th);
            });
            thead.appendChild(tr);
            table.appendChild(thead);

            if(data.length > 0){
                data.forEach(transaction => {

                    const tr = document.createElement('tr');
                    // insert date
                    const tdDate = document.createElement('td');
                    const date = new Date(transaction.date);
                    const formattedDate = date.toISOString().split('T')[0]; // yyyy-mm-dd format
                    tdDate.textContent = formattedDate;
                    tr.appendChild(tdDate);
                    // insert description
                    const tdtype = document.createElement('td');
                    tdtype.textContent = transaction.type;
                    tr.appendChild(tdtype);
                    // insert amount
                    const tdamount = document.createElement('td');
                    tdamount.textContent = transaction.amount;
                    tr.appendChild(tdamount);
                    

                    tbody.appendChild(tr);
                })
                table.appendChild(tbody);
                listDiv.appendChild(table);
            }else{
                listDiv.innerHTML = 'No transactions found.'; // Clear previous content
            }

        })
        .catch(error => console.error('Error fetching data:', error));


        



});