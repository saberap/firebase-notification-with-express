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
## How To Create 
# How to Create `service-account.json` File in Firebase

Follow these steps to create a `service-account.json` file for your Firebase project:

1. **Go to Firebase Console**  
   Visit [Firebase Console](https://console.firebase.google.com/) and select your project.

2. **Access Project Settings**  
   - In the Firebase project dashboard, click the **gear icon** in the top left.
   - Select **Project Settings** from the dropdown.

3. **Navigate to Service Accounts Tab**  
   - In Project Settings, click on the **Service Accounts** tab.

4. **Generate a New Private Key**  
   - Scroll down to the **Firebase Admin SDK** section.
   - Click the **"Generate New Private Key"** button.

5. **Download JSON File**  
   - A confirmation prompt will appear. Confirm the key generation.
   - The JSON file containing the service account credentials will automatically download.

6. **Save the File**  
   - Store the `service-account.json` file securely and use it in your Node.js project to authenticate with Firebase.

> **Note:** Keep the file private as it contains sensitive information about your Firebase project.

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
