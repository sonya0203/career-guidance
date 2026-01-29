# Career Guidance Backend - Node.js API

A RESTful API backend for the Career Guidance application built with Node.js, Express, and MongoDB.

## Features

- 🔐 User authentication (JWT-based)
- 👤 User profile management
- 💼 Career information CRUD operations
- 🔍 Search and filter careers
- 📊 Pagination support
- 🎯 Category-based filtering
- 💾 Save favorite careers

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configurations:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Server health check

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)
- `POST /api/users/saved-careers/:careerId` - Save a career (Protected)
- `DELETE /api/users/saved-careers/:careerId` - Remove saved career (Protected)

### Careers
- `GET /api/careers` - Get all careers (with pagination, search, filter)
- `GET /api/careers/categories` - Get all career categories
- `GET /api/careers/:id` - Get single career
- `POST /api/careers` - Create career (Admin only)
- `PUT /api/careers/:id` - Update career (Admin only)
- `DELETE /api/careers/:id` - Delete career (Admin only)

## Project Structure

```
Backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── userController.js  # User logic
│   └── careerController.js # Career logic
├── middleware/
│   └── auth.js            # Authentication middleware
├── models/
│   ├── User.js            # User model
│   └── Career.js          # Career model
├── routes/
│   ├── userRoutes.js      # User routes
│   └── careerRoutes.js    # Career routes
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
└── server.js              # Entry point
```

## Testing API with Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Careers
```bash
curl http://localhost:5000/api/careers
```

## Next Steps

1. Install MongoDB locally or set up MongoDB Atlas
2. Configure your `.env` file
3. Install dependencies: `npm install`
4. Start the server: `npm run dev`
5. Test the API endpoints
6. Connect your React frontend to the backend

## Integration with Frontend

Update your frontend to make API calls to `http://localhost:5000/api/`

Example fetch request:
```javascript
const response = await fetch('http://localhost:5000/api/careers');
const data = await response.json();
```

## Security Notes

- Always use a strong, random JWT_SECRET in production
- Use HTTPS in production
- Keep your .env file secure and never commit it
- Implement rate limiting for production
- Add input validation and sanitization
