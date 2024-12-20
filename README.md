# Car Management System

## Overview

The **Car Management System** is a full-stack web application that allows users to manage car details, including adding, updating, viewing, and deleting cars. The application features a backend built with Spring Boot and a frontend developed with HTML, CSS, and JavaScript. It supports basic CRUD (Create, Read, Update, Delete) operations and is designed to be simple, fast, and user-friendly.

---

## Features

- **CRUD Operations**: Add, update, view, and delete car details.
- **Global Search**: Search cars by name, model, year, price, and fuel type.
- **Pagination & Sorting**: Efficiently display a large list of cars with pagination and sorting.
- **Input Validation**: Ensures all car details entered are correct.
- **API Documentation**: Uses Swagger to provide detailed API documentation for backend interactions.
- **Interactive Frontend**: Easy-to-use and interactive interface for managing cars.

---

## Technologies Used

- **Backend**: 
  - Spring Boot
  - Java
  - Spring Data JPA
  - MySQL Database
  - Swagger (for API documentation)
  
- **Frontend**:
  - HTML
  - CSS
  - JavaScript (Fetch API for HTTP requests)
  
- **Version Control**: 
  - Git and GitHub

---

## Installation

### Prerequisites

Before running this project, make sure you have the following installed:

- **Java** (JDK 11 or higher)
- **Maven**
- **MySQL** (or any SQL database)
- **IntelliJ IDEA** (or any Java IDE)
- **Node.js** (for frontend if required)

### Steps to Set Up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Rishu88777/CarManagementSystem
Backend Setup:

Open the project in IntelliJ IDEA or your preferred IDE.
Configure your MySQL database. Update src/main/resources/application.properties with your database credentials:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase
spring.datasource.username=root
spring.datasource.password=yourpassword
Run the Backend:

In IntelliJ IDEA, open the CarManagementApplication.java file.
Right-click and select Run to start the Spring Boot application.
The backend will run on http://localhost:8080.
Frontend Setup:

If you need to update or customize the frontend, go to src/main/resources/static/index.html.
Edit the HTML/CSS/JavaScript as required.
Ensure the frontend is correctly interacting with the backend API (via /api/cars).
API Documentation
The API endpoints are documented using Swagger. You can access the documentation by visiting:

http://localhost:8080/swagger-ui.html after running the backend.
How to Use
Access the Frontend:
Open your browser and go to http://localhost:8080 to interact with the frontend.
You can add, update, view, and delete car entries.
Search & Filter:
Use the search bar to filter cars by name, model, year, and other properties.

Contribution
If you'd like to contribute to this project, please fork the repository, make your changes, and create a pull request. Contributions, issues, and feature requests are always welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
Author: Rishu Kr. Shrivastava

GitHub: https://github.com/Rishu88777

Email: rishushrivastava264@gmail.com
