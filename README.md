# Todo-APP-EmergentX

## Introduction

Welcome to the ToDo App! This application allows you to manage your tasks, to-dos, and projects. It features both a frontend built with React and a backend powered by Node.js and MongoDB for data storage.

## Features

- Create, update, and delete tasks
- Mark tasks as completed
- Filter tasks by various criteria
- User-friendly and intuitive interface
- Secure data storage with MongoDB

## Project Structure

The ToDo App is structured with two main components:

- **Frontend**: Built with React, the frontend provides the user interface for task management.

- **Backend**: Developed with Node.js and MongoDB, the backend handles data storage and management.

## Getting Started

### Prerequisites

Before you start using the ToDo App, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Backend Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rahul7879/Todo-App-EmergentX.git
   

Navigate to the backend directory:
Copy code

 
    cd Todo-APP-EmergentX/server

Install the backend dependencies:

Copy code    
    ```code

    npm init -y

    npm install
  Configure the backend settings, such as MongoDB connection URI, in a .env file.

Start the backend server:

bash
Copy code
    
     npm start
 ###  Frontend Installation
In a separate terminal, navigate to the frontend directory:

bash
Copy code
 
    cd Todo-APP-EmergentX/client
Install the frontend dependencies:

bash
Copy code

    npm install
###  Running the App
Start your MongoDB server.

Start the backend server by following the instructions in the backend installation section.

In the frontend directory, start the React development server:

bash
Copy code
  
    npm start
Open your web browser and go to http://localhost:3000 to access the ToDo App frontend.

###  Usage
Creating a Task
Open the ToDo App in your web browser by navigating to http://localhost:3000.

Click the "Add" button or enter button to create a new task.

Enter the task description in the provided text field and press "Enter" to add the task.

 ### Managing Tasks
Marking Tasks as Done
To mark a task as completed, click the checkbox next to the task description.
Deleting Tasks
To delete a task, hover over the task you want to delete, and a trash can icon will appear on the right side of the task.

Click the trash can icon to delete the task.

###  Filtering Tasks
Use the filter options provided to narrow down the tasks displayed in the app. You can filter tasks by status (All, Completed, Incomplete) or search for specific tasks by entering keywords in the search bar.

