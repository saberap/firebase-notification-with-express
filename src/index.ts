import express, { Request, Response } from "express";
import admin from "firebase-admin";
import serviceAccount from "../service-account.json";

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// Type definition for the request body
interface NotificationRequest {
  token: string;
  title: string;
  description: string;
}

// Route to send notification
app.post("/send-notification", async (req: Request, res: Response) => {
  
  const { token, title, description }: NotificationRequest = req.body;


  const message = {
    notification: {
      title: title,
      body: description,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    res.status(200).send(`Notification sent successfully: ${response}`);
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).send("Error sending notification");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
