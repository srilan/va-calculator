import json
from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import requests
from typing_extensions import Annotated
from typing import Union
from objects import Ratings

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse(
        request=request, name="calculator.htm"
    )


class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: Union[float, None] = None

@app.post("/components/ratings")
async def ratings_section(request: Request, ratings: Annotated[str, Form()]):
    ratings_data = json.loads(ratings)
    print(ratings_data['data'])
    return templates.TemplateResponse(
        request=request, name="ratings.htm", context={"ratings": ratings_data['data']}
    )

@app.get("/components/nav")
async def ratings_section():
    return templates.TemplateResponse(name="nav.htm")

@app.post("/components/disability-rating")
async def ratings_section(request: Request, ratings: Annotated[str, Form()]):
    ratings_data = json.loads(ratings)
    req = requests.post(
        url="https://va-calc-be.onrender.com/calculator/disability-rating", 
        headers={"Content-Type": "application/json"},
        data=json.dumps(ratings_data["rating"])
    )
    disabilityRating = req.json()

    ratings_data["dependent"]["disabilityRating"] = disabilityRating["disabilityRating"]
    req = requests.post(
        url="https://va-calc-be.onrender.com/calculator/dependency", 
        headers={"Content-Type": "application/json"},
        data=json.dumps(ratings_data["dependent"])
    )
    monthly = req.json()
    return templates.TemplateResponse(
        request=request, name="disability_rating.htm", 
        context={
            "data": {
                "disabilityRating": disabilityRating,
                "monthly": monthly
            }
        }
    )

@app.post("/components/step2Rate")
async def ratings_section(request: Request, ratings: Annotated[str, Form()]):
    ratings_data = json.loads(ratings)
    req = requests.post(
        url="https://va-calc-be.onrender.com/calculator/disability-rating", 
        headers={"Content-Type": "application/json"},
        data=json.dumps(ratings_data["rating"])
    )
    disabilityRating = req.json()

    ratings_data["dependent"]["disabilityRating"] = disabilityRating["disabilityRating"]
    req = requests.post(
        url="https://va-calc-be.onrender.com/calculator/dependency", 
        headers={"Content-Type": "application/json"},
        data=json.dumps(ratings_data["dependent"])
    )
    monthly = req.json()
    return templates.TemplateResponse(
        request=request, name="disability_rating.htm", 
        context={
            "data": {
                "disabilityRating": disabilityRating,
                "monthly": monthly
            }
        }
    )