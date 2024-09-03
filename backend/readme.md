Setup Alembic for Migrations: Initialize Alembic to manage database migrations
```
alembic init alembic
```
Create and Apply Migrations
```
alembic revision --autogenerate -m "Initial migration"
alembic upgrade head
```

```
uvicorn app.main:app --reload
```
