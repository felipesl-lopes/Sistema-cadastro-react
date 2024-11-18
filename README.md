# Sistema-cadastro-react

Call registration system

<img src="https://github.com/user-attachments/assets/ead5e89a-4cf1-475c-8af3-478603ebe696" height=400 alt="Captura de tela 2024-11-08 144045 1" />

<img src="https://github.com/user-attachments/assets/8f7615e1-fe7a-4cca-90db-bf563b222425" height=440 alt="iMockup - Google Pixel 8 Pro" />



## Description:

This project is a ticketing system web application developed in React and Firebase. Aimed at managing service requests, the application allows users to register and track calls. In addition to a ticket panel, the system has profile customization and customer registration features, making it a practical solution for organizing and tracking services.


<br/>



## Demo:

Navigating between Authentication screens:

https://github.com/user-attachments/assets/4d0e1ba8-60f4-471a-a027-7b4973fa00d9


Logging in:

https://github.com/user-attachments/assets/6f461c2c-d112-4f2f-b778-acb08dd85aa0


Registering a ticket:

https://github.com/user-attachments/assets/d0cf39f4-c295-43c7-870e-d348db715b95


Navigating between screens:

https://github.com/user-attachments/assets/bca71dfe-ed61-444d-ad6e-7ce10d46f706




<br/>



## Technologies and Tools:

- <strong>firebase:</strong> Used for authentication, real-time database, and data storage.
- <strong>react e react-dom:</strong> Main libraries for building the interface and manipulating the DOM in React.
- <strong>react-router-dom:</strong> Manages navigation between application pages.
- <strong>react-hook-form:</strong> Makes form management easier.
- <strong>yup e zod:</strong> Libraries for data validation.
- <strong>styled-components:</strong> Allows you to create styled components with CSS-in-JS.
- <strong>react-toastify:</strong> Used to display notifications, such as success or error alerts.
- <strong>react-modal:</strong> Used to create modals.

<br/>



## Installation:

1- Clone the repository

First, clone the project repository to your local machine:
```
git clone https://github.com/felipesl-lopes/Sistema-cadastro-react.git
```

2- Navigate to the project directory
```
cd Sistema-cadastro-react
```

3- Install dependencies

Use npm to install all dependencies listed in package.json:
```
npm install
```

<br/>



## Firebase Configuration:

1- Create a project in Firebase.

2- Get your Firebase configuration credentials (API key, domain, project ID, etc.).

3- Create a <strong>firebaseConfig.js</strong> file in the src folder and add your credentials:
```
// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "sua-api-key",
  authDomain: "seu-auth-domain",
  projectId: "seu-project-id",
  storageBucket: "seu-storage-bucket",
  messagingSenderId: "seu-messaging-sender-id",
  appId: "seu-app-id"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

```

<br/>



## Features:

- <strong>User Authentication: </strong> User registration and login with authentication using Firebase.
- <strong>Call Panel: </strong> Displays a list of calls, with details such as customer name, status, subject and date of the call. Allows you to track and manage all tickets.
- <strong>Ticket Management: </strong> Option to create new tickets, allowing the user to register service requests. Functionality to edit existing tickets, facilitating updates or corrections.
- <strong>User Profile: </strong> Allows the user to customize their profile, including the option to change the photo and display name.
- <strong>Customer Registration: </strong> Dedicated screen for registering new customers, organizing information and making service management more practical.
- <strong>Notifications and Feedback: </strong> Notification system with react-toastify for feedback on important actions, such as creating, editing and deleting tickets or customers.

<br/>



## Running:

1- Start the development server with the following command:
```
npm start
```

2- Access the Application:

After the command is executed successfully, access the application at [http://localhost:3000](http://localhost:3000).



