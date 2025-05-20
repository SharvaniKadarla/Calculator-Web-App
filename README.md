# Calculator Web Application

A simple web-based calculator built with HTML, CSS, JavaScript, and Node.js.

## 🚀 Features
- Basic arithmetic operations: addition, subtraction, multiplication, division
- Responsive design
- Runs on a local Node.js server

## 📁 Project Structure

```text
project/
├── public/                        # Frontend assets (served statically by the server)
│   ├── index.html                # Main HTML file for the calculator UI
│   └── client.js                 # JavaScript file handling client-side logic
│
├── server.js                     # Node.js backend that serves files and handles routing
│
├── package.json                  # Project metadata and dependencies; defines "start" script
├── package-lock.json            # Auto-generated: locks the exact dependency versions
│
├── node_modules/                # Created automatically after running `npm install`; contains all dependencies
│
└── README.md                     # Documentation and instructions for using the app
```
⚠️ Note:
The node_modules/ directory is not included in the repository and will be automatically created after you run `npm install`. It contains all the required dependencies defined in package.json.

## 🛠️ Getting Started 
Follow the steps below to set up and run the Calculator Web App on your local machine. 

### 📦 Prerequisites 
Make sure you have the following installed: 
- [Node.js](https://nodejs.org/) 
- npm (comes with Node.js) 

### 🚀 Installation & Running the App 
1. **Install dependencies:** 
```bash 
npm install 
``` 
2. **Start the server:** 
```bash 
npm start 
``` 
> Alternatively, you can run `node server.js` if `npm start` is not defined in `package.json`. 

3. **Open your browser and visit:** 
``` http://localhost:3000 ``` 

You should now see the Calculator web app running in your browser. 