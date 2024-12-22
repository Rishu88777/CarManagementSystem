let editingCarId = null; // To track the ID of the car being edited

// Function to load cars from the backend and display them in the table
async function loadCars() {
    try {
        const response = await fetch('https://carmanagementsystem-production-f868.up.railway.app/api/cars');
        const cars = await response.json();
        const carTableBody = document.getElementById('carTableBody');
        carTableBody.innerHTML = ''; // Clear existing table rows

        // Populate the table with data
        cars.forEach(car => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${car.name}</td>
                <td>${car.model}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td>${car.fuelType}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editCar(${car.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteCar(${car.id})">Delete</button>
                </td>
            `;
            carTableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading cars:', error);
    }
}

// Function to handle Add/Update form submission
async function handleAddCarForm(event) {
    event.preventDefault();

    const carData = {
        name: document.getElementById('carName').value,
        model: document.getElementById('carModel').value,
        year: document.getElementById('carYear').value,
        price: document.getElementById('carPrice').value,
        fuelType: document.getElementById('fuelType').value
    };

    try {
        let response;
        if (editingCarId) {
            // Update existing car
            response = await fetch(`https://carmanagementsystem-production-f868.up.railway.app/api/cars/${editingCarId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(carData)
            });
        } else {
            // Add new car
            response = await fetch('https://carmanagementsystem-production-f868.up.railway.app/api/cars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(carData)
            });
        }

        if (response.ok) {
            // Reset form
            document.getElementById('addCarForm').reset();
            document.getElementById('fuelType').value = 'Petrol';

            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('addCarModal'));
            modal.hide();

            // Reload cars in the table
            loadCars();

            // Reset editingCarId
            editingCarId = null;
        } else {
            console.error('Failed to add/update car');
        }
    } catch (error) {
        console.error('Error adding/updating car:', error);
    }
}

// Function to handle editing a car
async function editCar(id) {
    try {
        const response = await fetch(`https://carmanagementsystem-production-f868.up.railway.app/api/cars/${id}`);
        const car = await response.json();

        // Populate the form with car data
        document.getElementById('carName').value = car.name;
        document.getElementById('carModel').value = car.model;
        document.getElementById('carYear').value = car.year;
        document.getElementById('carPrice').value = car.price;
        document.getElementById('fuelType').value = car.fuelType;

        // Set the ID for the car being edited
        editingCarId = car.id;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('addCarModal'));
        modal.show();
    } catch (error) {
        console.error('Error fetching car data for edit:', error);
    }
}

// Function to handle deleting a car
async function deleteCar(id) {
    if (confirm('Are you sure you want to delete this car?')) {
        try {
            const response = await fetch(`https://carmanagementsystem-production-f868.up.railway.app/api/cars/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Reload the cars in the table
                loadCars();
            } else {
                console.error('Failed to delete car');
            }
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    }
}

// Initialize the page by loading cars and setting up event listeners
window.onload = () => {
    loadCars();
    document.getElementById('addCarForm').addEventListener('submit', handleAddCarForm);
};
