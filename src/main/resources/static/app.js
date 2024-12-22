document.addEventListener('DOMContentLoaded', () => {
    const carTableBody = document.getElementById('carTableBody');
    const addCarForm = document.getElementById('addCarForm');

    // Fetch and display cars from the backend
    function fetchCars() {
        fetch('https://carmanagementsystem-production-f868.up.railway.app/api/cars')
            .then(response => response.json())
            .then(cars => {
                carTableBody.innerHTML = '';
                cars.forEach(car => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${car.name}</td>
                        <td>${car.model}</td>
                        <td>${car.year}</td>
                        <td>${car.price}</td>
                        <td>${car.fuelType}</td>
                        <td>
                            <button class="btn btn-warning btn-sm">Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    `;
                    carTableBody.appendChild(row);
                });
            })
            .catch(error => console.error(error));
    }

    // Add car form submission
    addCarForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newCar = {
            name: document.getElementById('carName').value,
            model: document.getElementById('carModel').value,
            year: document.getElementById('carYear').value,
            price: document.getElementById('carPrice').value,
            fuelType: document.getElementById('fuelType').value
        };

        fetch('http://localhost:8080/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(response => response.json())
            .then(data => {
                fetchCars(); // Re-fetch and update the table
                document.getElementById('addCarModal').classList.remove('show');
                document.getElementById('carName').value = '';
                document.getElementById('carModel').value = '';
                document.getElementById('carYear').value = '';
                document.getElementById('carPrice').value = '';
                document.getElementById('fuelType').value = 'Petrol';
            })
            .catch(error => console.error(error));
    });

    fetchCars(); // Initial fetch to load cars into the table
});
