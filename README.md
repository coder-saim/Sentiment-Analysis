# Sentiment Analysis Web Application
# Backend (FastAPI)
Clone the repository and Navigate to the backend directory:
```
git clone <repository-url>
cd backend
```
Create and activate a virtual environment:
```
python3 -m venv venv
# On MacOS or Linux, use -> source venv/bin/activate  
# On Windows, use -> venv\Scripts\activate
# On Windows, if you have git bash then use -> source venv/Scripts/activate
```
Install the required Python dependencies:
```
pip install -r requirements.txt
```
Run the FastAPI application:
```
uvicorn app.main:app --reload
```
This will start the FastAPI server on:
```
http://127.0.0.1:8000/
```
Access API Documentation: Once the server is running, you can view the automatically generated API documentation at:
```
Swagger UI: http://127.0.0.1:8000/docs
ReDoc: http://127.0.0.1:8000/redoc
```
# Frontend (React.js)
Navigate to the frontend directory:
```
cd frontend
```
Install frontend dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
This will start the frontend on:
```
http://localhost:5173/
```