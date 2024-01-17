from typing import List
from fastapi import FastAPI
from pydantic import BaseModel

class PartRatings():
    rate: int
    part: str
    id: int

class DataField():
    data: List[PartRatings]

class Ratings(BaseModel):
    ratings: DataField
    model_config = {
        "arbitrary_types_allowed": True,
        "json_schema_extra": {
            "examples": [
                {
                    "name": "Foo",
                    "description": "A very nice Item",
                    "price": 35.4,
                    "tax": 3.2,
                }
            ]
        }
    }
