
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
    return routes;
}
