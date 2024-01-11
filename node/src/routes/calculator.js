
import express from 'express';
import * as p from 'path';

export const getCalculatorRoutes = () => {
    const routes = express.Router();
    routes.get("/", (req, res)=> {
        res.status(200).sendFile(p.join(__dirname, "../views/calculator.htm"));
    });
    return routes;
}