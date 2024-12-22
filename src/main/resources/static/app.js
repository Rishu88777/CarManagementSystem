document.addEventListener('DOMContentLoaded', () => {
    const carTableBody = document.getElementById('carTableBody');
    const addCarForm = document.getElementById('addCarForm');
    const loader = document.getElementById('loader'); // Assuming you have a loader element for showing loading state
    const successMessage = document.getElementById('successMessage'); // Assuming you have a success message element

    // Fetch and display cars from the backend
    function fetchCars() {
        console.log("Fetching cars...");
        fetch('https://carmanagementsystem-production-f868.up.railway.app/api/cars')
            .then(response => response.json())
            .then(cars => {
                console.log("Cars fetched:", cars); // Log the fetched cars to debug
                carTableBody.innerHTML = ''; // Clear the table before adding new data
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
                            <button class="btn btn-danger btn-sm" data-id="${car.id}">Delete</button>
                        </td>
                    `;
                    carTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
            });
    }

    // Add car form submission
    addCarForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Show loader during the form submission
        loader.style.display = 'block';

        const newCar = {
            name: document.getElementById('carName').value,
            model: document.getElementById('carModel').value,
            year: document.getElementById('carYear').value,
            price: document.getElementById('carPrice').value,
            fuelType: document.getElementById('fuelType').value
        };

        fetch('https://carmanagementsystem-production-f868.up.railway.app/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Car added:', data); // Log the response after the car is added
                fetchCars(); // Re-fetch and update the table with new data
                document.getElementById('addCarModal').classList.remove('show');

                // Clear the form fields after adding a car
                document.getElementById('carName').value = '';
                document.getElementById('carModel').value = '';
                document.getElementById('carYear').value = '';
                document.getElementById('carPrice').value = '';
                document.getElementById('fuelType').value = 'Petrol';

                // Hide the loader and show the success message
                loader.style.display = 'none';
                successMessage.style.display = 'block';
                setTimeout(() => successMessage.style.display = 'none', 3000); // Hide success message after 3 seconds
            })
            .catch(error => {
                console.error('Error adding car:', error);
                loader.style.display = 'none'; // Hide loader in case of error
            });
    });

    // Initial fetch to load cars into the table
    fetchCars();
});
