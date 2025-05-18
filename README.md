# ✈️ Welcome to Flights Service

## 📦 Project Structure

```
/
├── src/
│   ├── index.js            # Server entry point
│   ├── models/             # Sequelize models
│   ├── controllers/        # Route handlers
│   ├── middlewares/        # Middleware functions
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   ├── config/             # Configuration files
│   └── repository/         # Data access layer
├── tests/                  # Test cases (to be added later)
├── static/                 # Static assets
└── temp/                   # Temporary files
```

---

## 🚀 Project Setup

1. **Clone the project** on your local
2. **Install dependencies:**

   Execute the `npm install` on the same path as of your root directory of the downloaded project

3. **Create a `.env` file** in the root dirctory and add the folowing:

   ```
   PORT=3000
   ```

4. **Configure the database:**

   Inside the `src/config` folder create a new file `config.json` and then add the following piece of json :

   ```json
   {
     "development": {
       "username": "<YOUR_DB_LOGIN_NAME>",
       "password": "<YOUR_DB_PASSWORD>",
       "database": "Flights_Search_DB_DEV",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```

5. **Initialize the database:**

   Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

---

## 🗃️ Database Design

### Entities

- **City**
- **Airport**
- **Airplane**
- **Flight**

### Relationships

- A **City** has many **Airports**.
- An **Airport** belongs to a **City**.
- An **Airplane** can be used in multiple **Flights**.
- A **Flight** belongs to one **Airplane**.
- An **Airport** can have many **Flights**, but a **Flight** belongs to one **Airport**.

### Tables

- City -> id, name, created_at, updated_at
- Airport -> id, name, address, city_id, created_at, updated_at

Relationship -> City has many airports and Airport belongs to a city (one to many)

---

## 🛠️ Sequelize Model Example

To generate the `Airport` model:

```bash
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

---

## 📌 Notes

- Make sure MySQL is installed and running.
- Replace placeholders in `config.json` with your actual DB credentials.
