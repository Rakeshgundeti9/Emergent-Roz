from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Sample Request Model
class SampleRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    business_name: str
    contact_person: str
    email: EmailStr
    phone: str
    products_interested: List[str]
    quantity_estimate: Optional[str] = None
    message: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SampleRequestCreate(BaseModel):
    business_name: str
    contact_person: str
    email: EmailStr
    phone: str
    products_interested: List[str]
    quantity_estimate: Optional[str] = None
    message: Optional[str] = None

# Quote Request Model
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    business_name: str
    contact_person: str
    email: EmailStr
    phone: str
    product_name: str
    quantity_kg: str
    delivery_location: str
    message: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteRequestCreate(BaseModel):
    business_name: str
    contact_person: str
    email: EmailStr
    phone: str
    product_name: str
    quantity_kg: str
    delivery_location: str
    message: Optional[str] = None

# Contact Form Model
class ContactForm(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    subject: str
    message: str

# Newsletter Subscription Model
class NewsletterSubscription(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Roz Spices API - Welcome"}

# Sample Request Routes
@api_router.post("/sample-request", response_model=SampleRequest)
async def create_sample_request(input: SampleRequestCreate):
    request_dict = input.model_dump()
    request_obj = SampleRequest(**request_dict)
    
    doc = request_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.sample_requests.insert_one(doc)
    return request_obj

@api_router.get("/sample-requests", response_model=List[SampleRequest])
async def get_sample_requests():
    requests = await db.sample_requests.find({}, {"_id": 0}).to_list(1000)
    
    for req in requests:
        if isinstance(req['timestamp'], str):
            req['timestamp'] = datetime.fromisoformat(req['timestamp'])
    
    return requests

# Quote Request Routes
@api_router.post("/quote-request", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    request_dict = input.model_dump()
    request_obj = QuoteRequest(**request_dict)
    
    doc = request_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.quote_requests.insert_one(doc)
    return request_obj

@api_router.get("/quote-requests", response_model=List[QuoteRequest])
async def get_quote_requests():
    requests = await db.quote_requests.find({}, {"_id": 0}).to_list(1000)
    
    for req in requests:
        if isinstance(req['timestamp'], str):
            req['timestamp'] = datetime.fromisoformat(req['timestamp'])
    
    return requests

# Contact Form Routes
@api_router.post("/contact", response_model=ContactForm)
async def create_contact(input: ContactFormCreate):
    contact_dict = input.model_dump()
    contact_obj = ContactForm(**contact_dict)
    
    doc = contact_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.contacts.insert_one(doc)
    return contact_obj

@api_router.get("/contacts", response_model=List[ContactForm])
async def get_contacts():
    contacts = await db.contacts.find({}, {"_id": 0}).to_list(1000)
    
    for contact in contacts:
        if isinstance(contact['timestamp'], str):
            contact['timestamp'] = datetime.fromisoformat(contact['timestamp'])
    
    return contacts

# Newsletter Routes
@api_router.post("/newsletter", response_model=NewsletterSubscription)
async def create_newsletter_subscription(input: NewsletterSubscriptionCreate):
    sub_dict = input.model_dump()
    sub_obj = NewsletterSubscription(**sub_dict)
    
    doc = sub_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    await db.newsletter_subscriptions.insert_one(doc)
    return sub_obj

# Legacy routes
@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()