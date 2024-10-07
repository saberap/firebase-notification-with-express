# firebase-notification-with-express
A Node.js project using Express to create an API endpoint for sending Firebase Cloud Messaging notifications.

# Notification Service

This project is a simple notification service built with Express and Firebase Admin SDK. It allows sending notifications to clients via a REST API.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Add your Firebase service account key:
    - Place your `service-account.json` file in the root directory.

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will run on `http://localhost:5000`.

## API Endpoints

### POST /send-notification

Send a notification to a client.

- **URL**: `/send-notification`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
      "token": "string",
      "title": "string",
      "description": "string"
    }
    ```
- **Response**: 
    - `200 OK` on success
    - `400 Bad Request` if the request body is invalid

## License

This project is licensed under the MIT License.
