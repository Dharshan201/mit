# 📇 Contact Manager - MERN Stack Application

A full-stack contact management application built with the MERN (MongoDB, Express.js, React, Node.js) stack. Features user authentication, CRUD operations for contacts, and a beautiful modern UI.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18-blue)

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT (Frontend)                               │
│                                                                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │   Landing   │    │   Login     │    │  Register   │    │  Dashboard  │  │
│  │    Page     │    │    Page     │    │    Page     │    │    Page     │  │
│  └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
│         │                  │                  │                  │          │
│         └──────────────────┴──────────────────┴──────────────────┘          │
│                                      │                                       │
│                           ┌──────────▼──────────┐                           │
│                           │   React Context API  │                           │
│                           │  (AuthState,         │                           │
│                           │   ContactState)      │                           │
│                           └──────────┬──────────┘                           │
│                                      │                                       │
│                           ┌──────────▼──────────┐                           │
│                           │    Axios HTTP       │                           │
│                           │    Client           │                           │
│                           └──────────┬──────────┘                           │
└──────────────────────────────────────┼──────────────────────────────────────┘
                                       │
                                       │ HTTP/HTTPS (REST API)
                                       │
┌──────────────────────────────────────┼──────────────────────────────────────┐
│                              SERVER (Backend)                                │
│                                      │                                       │
│                           ┌──────────▼──────────┐                           │
│                           │   Express.js        │                           │
│                           │   Application       │                           │
│                           └──────────┬──────────┘                           │
│                                      │                                       │
│         ┌────────────────────────────┼────────────────────────────┐         │
│         │                            │                            │         │
│  ┌──────▼──────┐           ┌─────────▼─────────┐         ┌───────▼───────┐ │
│  │  Middleware │           │      Routes       │         │   Config      │ │
│  │  (auth.js)  │           │  ┌─────┐ ┌─────┐  │         │   (db.js)     │ │
│  │             │           │  │auth │ │cont │  │         │               │ │
│  │ JWT Verify  │           │  │.js  │ │acts │  │         │  MongoDB      │ │
│  └─────────────┘           │  └─────┘ │.js  │  │         │  Connection   │ │
│                            │          └─────┘  │         └───────┬───────┘ │
│                            └───────────────────┘                 │         │
│                                                                  │         │
└──────────────────────────────────────────────────────────────────┼─────────┘
                                                                   │
                                                                   │
┌──────────────────────────────────────────────────────────────────┼─────────┐
│                              DATABASE                            │         │
│                                                                  │         │
│                           ┌──────────▼──────────┐                          │
│                           │     MongoDB         │                          │
│                           │   (contact_manager) │                          │
│                           └──────────┬──────────┘                          │
│                                      │                                      │
│                    ┌─────────────────┼─────────────────┐                   │
│                    │                 │                 │                   │
│             ┌──────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐           │
│             │    Users    │   │  Contacts   │   │             │           │
│             │ Collection  │   │ Collection  │   │   Future    │           │
│             └─────────────┘   └─────────────┘   │ Collections │           │
│                                                 └─────────────┘           │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure (Tree Diagram)

```
mern/
│
├── 📁 client/                      # Frontend React Application
│   ├── 📁 public/
│   │   ├── _redirects             # Netlify API proxy redirects
│   │   └── vite.svg
│   │
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 auth/           # Authentication Components
│   │   │   │   ├── Login.jsx      # Login form component
│   │   │   │   └── Register.jsx   # Registration form component
│   │   │   │
│   │   │   ├── 📁 contacts/       # Contact Management Components
│   │   │   │   ├── ContactForm.jsx    # Add/Edit contact form
│   │   │   │   ├── ContactFilter.jsx  # Search/filter contacts
│   │   │   │   ├── ContactItem.jsx    # Individual contact card
│   │   │   │   └── Contacts.jsx       # Contact list container
│   │   │   │
│   │   │   ├── 📁 layout/         # Layout Components
│   │   │   │   └── Navbar.jsx     # Navigation bar
│   │   │   │
│   │   │   ├── 📁 pages/          # Page Components
│   │   │   │   ├── Home.jsx       # Dashboard page
│   │   │   │   └── Landing.jsx    # Landing/Welcome page
│   │   │   │
│   │   │   └── 📁 routing/        # Routing Components
│   │   │       └── PrivateRoute.jsx   # Protected route wrapper
│   │   │
│   │   ├── 📁 context/            # React Context (State Management)
│   │   │   ├── 📁 auth/           # Authentication Context
│   │   │   │   ├── authContext.js     # Auth context definition
│   │   │   │   ├── authReducer.js     # Auth state reducer
│   │   │   │   └── AuthState.jsx      # Auth provider component
│   │   │   │
│   │   │   ├── 📁 contact/        # Contact Context
│   │   │   │   ├── contactContext.js  # Contact context definition
│   │   │   │   ├── contactReducer.js  # Contact state reducer
│   │   │   │   └── ContactState.jsx   # Contact provider component
│   │   │   │
│   │   │   └── types.js           # Action type constants
│   │   │
│   │   ├── 📁 utils/              # Utility Functions
│   │   │   └── setAuthToken.js    # Axios auth header helper
│   │   │
│   │   ├── App.jsx                # Main application component
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles
│   │
│   ├── index.html                 # HTML template
│   ├── package.json               # Frontend dependencies
│   └── vite.config.js             # Vite configuration
│
├── 📁 server/                      # Backend Express Application
│   ├── 📁 config/
│   │   └── db.js                  # MongoDB connection setup
│   │
│   ├── 📁 middleware/
│   │   └── auth.js                # JWT authentication middleware
│   │
│   ├── 📁 models/                 # Mongoose Schemas
│   │   ├── User.js                # User model schema
│   │   └── Contact.js             # Contact model schema
│   │
│   ├── 📁 routes/                 # API Routes
│   │   ├── auth.js                # Authentication routes
│   │   └── contacts.js            # Contact CRUD routes
│   │
│   ├── .env                       # Environment variables
│   ├── server.js                  # Express server entry point
│   └── package.json               # Backend dependencies
│
├── netlify.toml                   # Netlify deployment config
├── README.md                      # Project documentation
└── .gitignore                     # Git ignore rules
```

---

## 🗄️ Database Schema

### Users Collection

```javascript
{
  _id: ObjectId,                    // MongoDB auto-generated ID
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true                    // Prevents duplicate emails
  },
  password: {
    type: String,
    required: true                  // Stored as bcrypt hash
  },
  date: {
    type: Date,
    default: Date.now               // Account creation timestamp
  }
}
```

### Contacts Collection

```javascript
{
  _id: ObjectId,                    // MongoDB auto-generated ID
  user: {
    type: ObjectId,
    ref: 'users',                   // Reference to User collection
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    enum: ['personal', 'professional'],
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
}
```

### Entity-Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USERS                                    │
├─────────────────────────────────────────────────────────────────┤
│  _id          │  ObjectId    │  PK                              │
│  name         │  String      │  NOT NULL                        │
│  email        │  String      │  NOT NULL, UNIQUE                │
│  password     │  String      │  NOT NULL (bcrypt hash)          │
│  date         │  Date        │  DEFAULT: now()                  │
└───────────────┴──────────────┴──────────────────────────────────┘
                              │
                              │ 1:N (One user has many contacts)
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        CONTACTS                                  │
├─────────────────────────────────────────────────────────────────┤
│  _id          │  ObjectId    │  PK                              │
│  user         │  ObjectId    │  FK -> Users._id                 │
│  name         │  String      │  NOT NULL                        │
│  email        │  String      │  OPTIONAL                        │
│  phone        │  String      │  OPTIONAL                        │
│  type         │  String      │  ENUM: personal/professional     │
│  date         │  Date        │  DEFAULT: now()                  │
└───────────────┴──────────────┴──────────────────────────────────┘
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint        | Description              | Auth Required |
|--------|-----------------|--------------------------|---------------|
| POST   | `/register`     | Register a new user      | ❌ No         |
| POST   | `/login`        | Login user & get token   | ❌ No         |
| GET    | `/`             | Get logged in user       | ✅ Yes        |

### Contact Routes (`/api/contacts`)

| Method | Endpoint        | Description              | Auth Required |
|--------|-----------------|--------------------------|---------------|
| GET    | `/`             | Get all user's contacts  | ✅ Yes        |
| POST   | `/`             | Add new contact          | ✅ Yes        |
| PUT    | `/:id`          | Update contact           | ✅ Yes        |
| DELETE | `/:id`          | Delete contact           | ✅ Yes        |

---

## 🔐 Authentication Flow

```
┌────────────┐         ┌────────────┐         ┌────────────┐
│   Client   │         │   Server   │         │  MongoDB   │
└─────┬──────┘         └─────┬──────┘         └─────┬──────┘
      │                      │                      │
      │  1. POST /register   │                      │
      │  {name,email,pass}   │                      │
      │─────────────────────>│                      │
      │                      │  2. Hash password    │
      │                      │     with bcrypt      │
      │                      │                      │
      │                      │  3. Save user        │
      │                      │─────────────────────>│
      │                      │                      │
      │                      │  4. Generate JWT     │
      │  5. Return {token}   │                      │
      │<─────────────────────│                      │
      │                      │                      │
      │  6. Store token in   │                      │
      │     localStorage     │                      │
      │                      │                      │
      │  7. GET /api/auth    │                      │
      │  Header: x-auth-token│                      │
      │─────────────────────>│                      │
      │                      │  8. Verify JWT       │
      │                      │                      │
      │                      │  9. Get user data    │
      │                      │─────────────────────>│
      │                      │<─────────────────────│
      │  10. Return user     │                      │
      │<─────────────────────│                      │
      │                      │                      │
```

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Library |
| Vite | Build Tool & Dev Server |
| React Router v6 | Client-side Routing |
| Axios | HTTP Client |
| Context API | State Management |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB | NoSQL Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication Tokens |
| bcryptjs | Password Hashing |

### Deployment
| Service | Purpose |
|---------|---------|
| Netlify | Frontend Hosting |
| Render | Backend Hosting |
| MongoDB Atlas | Cloud Database |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dharshan201/mit.git
cd mern

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Environment Variables

Create `.env` file in `/server`:
```env
MONGO_URI=mongodb://localhost:27017/contact_manager
JWT_SECRET=your_super_secret_key
PORT=5000
```

### Running the Application

```bash
# Terminal 1: Start Backend
cd server
npm start

# Terminal 2: Start Frontend
cd client
npm run dev
```

---

## 📸 Screenshots

### Landing Page
Beautiful hero section with gradient animations and call-to-action buttons.

### Dashboard
Two-column layout with contact form and contact list featuring glassmorphism design.

### Authentication
Modern login/register forms with input validation and smooth transitions.

---

## 👤 Author

**Dharshan**
- GitHub: [@Dharshan201](https://github.com/Dharshan201)

---

## 📄 License

This project is licensed under the MIT License.
