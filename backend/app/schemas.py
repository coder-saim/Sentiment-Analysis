from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    role: str
    name: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int 

class TextInput(BaseModel):
    text: str



