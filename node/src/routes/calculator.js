
import express from 'express';
import * as p from 'path';
import fs from 'fs';

function escapeHtml(unsafe)
{
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

export const getCalculatorRoutes = () => {
    const routes = express.Router();
    let count = 1;
    console.log(__dirname)
    routes.get("/", (req, res)=> {
        res.status(200).sendFile(p.join(__dirname, "../views/calculator.htm"));
    });
    routes.post("/calculate", async (req, res)=> {
        const params = req.body;
        const a = fs.readFileSync(p.join(__dirname, "../views/disabilityRating.htm"));
        const elemStr = a.toString().replace('{{Replace}}', '50%' )
        res.status(200).send(elemStr);

    });

    routes.post("/poster", async (req, res) => {
        let payloadObj = req.body.ratingsPayload;
        console.log(typeof payloadObj,payloadObj);
        
        let values = await fetch("https://va-calc-be.onrender.com/calculator/disability-rating", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: payloadObj,
          })
          .then((r) => r.json())
          .then((res) => res)
          .catch((err) => console.log(err));

        console.log(values);
            

    })
    return routes;
}       