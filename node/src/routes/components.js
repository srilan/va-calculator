
import express from 'express';
import * as p from 'path';

export const getComponentRoutes = () => {
    
    const routes = express.Router();
    routes.get("/total-compensation", (req, res)=> {
        res.status(200).sendFile(p.join(__dirname, "../views/total_compensation.htm"));
    });
    routes.get("/nav", (req, res)=> {
        res.status(200).sendFile(p.join(__dirname, "../views/components/nav.htm"));
    });
    routes.get('/sample', (req, res) => {
        res.status(200).sendFile(p.join(__dirname,'../views/components/partOption.htm'))
    
    })
    routes.get('/optionsLeave', (req, res) => {
        res.status(200).sendFile(p.join(__dirname, '../views/components/empty.htm'))
    })
    routes.post('/ratings', (req, res) => {
        const ratings = JSON.parse(req.body.ratings);
        //res.status(200).send({})
        res.render("components/ratings", {
            ratings: ratings.data
        });
    })
    
    routes.post('/disability-rating', async (req, res) => {
        const ratings = req.body.ratings;
        /**
         * use .env
         */
        const service = await fetch("https://va-calc-be.onrender.com/calculator/disability-rating",
            {
                method: "POST",
                body: ratings,
                headers: {
                    "Content-Type": "application/json" 
                }
            }
        );
        const disabilityRating = await service.json();
        console.log("dis", disabilityRating, ratings)
        res.render("components/disabilityrating", {
            disabilityRating: disabilityRating
        });
    })

    return routes;
}
