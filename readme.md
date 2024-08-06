# MongoDB Connection with Node.js Driver

This repository demonstrates how to connect to MongoDB using the Node.js MongoDB driver.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Iqbalshah786/mongo-connection-nodejs-driver.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your mongodb connection string. For more details on your MongoDB connection string, refer to this [MongoDB connection string guide](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string#:~:text=The%20MongoDB%20connection%20string%20for,port%20number%20you%20are%20using).

   ```plaintext
   MONGODB_URI=mongodb+srv://yourUsername:yourPassword@yourCluster.mongodb.net/yourDatabase
   ```

4. Start the application:

   ```bash
   npm start
   ```
