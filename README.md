# REST API for Person Management

## Description

This is a simple REST API built with Node.js and Express.js for managing persons. It supports basic CRUD operations and interfaces with a PostgreSQL database.

## Installation

1. Clone this repository: `git clone https://github.com/yourusername/yourrepository.git`
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database and add the connection string to a `.env` file.
4. Run the server: `npm run dev`

## Usage

Send HTTP requests to `http://localhost:3000/api`.

## API Endpoints

- GET `/api`: Fetch all persons
- GET `/api/:id`: Fetch a single person by ID
- POST `/api`: Create a new person
- PUT `/api/:id`: Update an existing person by ID
- DELETE `/api/:id`: Delete an existing person by ID

## Database Schema

The `Persons` table in the PostgreSQL database has the following fields:

- `id`: A unique identifier for each person (integer)
- `name`: The name of the person (string)
- `email`: The email address of the person (string)
- `address`: The address of the person (string)

## Testing

Run tests with `npm test`.

## Deployment

Deploy to your preferred hosting platform following their specific instructions.

## Contributing

Please open an issue or submit a pull request if you would like to contribute.

## License

This project is licensed under the MIT License.
