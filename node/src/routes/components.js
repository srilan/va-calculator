
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
    routes.post('/ratings', (req, res) => {
        const ratings = JSON.parse(req.body.ratings);
        //res.status(200).send({})
        res.render("components/ratings", {
            ratings: ratings.data
        });
    })

    routes.post('/bodyDiag', (req, res) => {
        let highlights = JSON.parse(req.body.highlight)
        console.log(highlights, 'hi')
        res.render('components/bodySVG', {
            highlight: highlights
        });
    })
    
    routes.post('/disability-rating', async (req, res) => {
        const ratings = JSON.parse(req.body.ratings);
        console.log(ratings)
        /**
         * use .env
         */
        const service = await fetch("https://va-calc-be.onrender.com/calculator/disability-rating",
            {
                method: "POST",
                body: JSON.stringify(ratings.rating),
                headers: {
                    "Content-Type": "application/json" 
                }
            }
        );
        const disabilityRating = await service.json();
        ratings.dependent.disabilityRating = disabilityRating.disabilityRating;

        const depService = await fetch("https://va-calc-be.onrender.com/calculator/dependency", 
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(ratings.dependent),
            })

        const monthly = await depService.json()
        console.log("dis", disabilityRating, monthly)
        res.render("components/disabilityrating", {
            data: {disabilityRating,monthly}
        });


    });

    routes.post('/step2Rate', async (req, res) => {
        const ratings = JSON.parse(req.body.ratings);
        console.log('inside Rate step 2 ')

        const service = await fetch("https://va-calc-be.onrender.com/calculator/disability-rating",
            {
                method: "POST",
                body: JSON.stringify(ratings.rating),
                headers: {
                    "Content-Type": "application/json" 
                }
            }
        );
        const disabilityRating = await service.json();
        ratings.dependent.disabilityRating = disabilityRating.disabilityRating;

        const depService = await fetch("https://va-calc-be.onrender.com/calculator/dependency", 
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(ratings.dependent),
            })

        const monthly = await depService.json()
        console.log("dis", disabilityRating, monthly)
        res.render("components/step2Rating", {
            data: {disabilityRating,monthly}
        });

    })

    return routes;
}
