# User Session Management System application

The User Session Management System is a web application built using the MERN (MongoDB, Express, React, Node) stack. It provides user authentication, session management, and a dashboard with map functionality

## Features

- User login with authentication and session management.
- Dashboard page with a map view.
- Map functionalities include click and drag, zoom, and marking locations.
- Manual logout functionality.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB

## Installation

To run the User Session Management System locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/iambibro/IISC.git

2. Install dependencies:

- Navigate to the project's root directory:

  ```
  cd IISC
  ```

- Install the required packages:

  ```
  npm install
  ```
  
- Install client dependencies:

```
cd ../client
npm install
```

3. Set up the database:
- Install MongoDB on your machine if not already installed.
- Create a new MongoDB database.
- Update the MongoDB connection URL in the `config.js` file.

4. Run the application:

- Start the server:

  ```
  cd ../server
  npm start
  ```

- Start the client:

  ```
  cd ../client
  npm start
  ```

The application will be accessible at `http://localhost:3000`.


## Usage

1. Login:

- Access the application in your web browser.
- Enter your username and password in the login form.
- Click the "Login" button to authenticate.

2. Dashboard:

- After successful authentication, you will be redirected to the dashboard page.
- The dashboard includes a map view of the region of India.
- Use the map functionalities like click and drag to explore the map.
- Use the zoom controls to adjust the zoom level.
- Click on the map to mark a location.

3. Logout:

- To manually log out, click the "Logout" button.
- This will end the user session and redirect you back to the login page.

## Customization

- Map API: By default, the application uses Mapbox as the map API. To use a different map API, refer to the documentation of the chosen map API and make the necessary changes in the `Map` component.
- CSS Styling: You can customize the styling of the login page and the dashboard page by modifying the respective CSS files (`login.css` and `dashboard.css`).

## Contact

For any questions or inquiries, please contact the project maintainer:

- Name: Bibrata Barman 
- Email: bibrata45@gmail.com
- GitHub: https://github.com/iambibro


