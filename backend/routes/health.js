import express from 'express';

const healthChecker = express.Router();

healthChecker.get(
    '/',
    // add middlewares here
    // request endpoint
    (req, res) => {
        // log health check
        console.log(`[${Date.now()}]: Health check successful`);
        // send back status
        return res.send({"status": "ok"});
});

export default healthChecker

