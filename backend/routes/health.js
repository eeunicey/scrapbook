import express from 'express';

const healthChecker = express.Router();

healthChecker.get('/', (req, res) => {
    console.log(`[${Date.now()}]: Health check successful`);
    return res.send({"status": "ok"});
});

export default healthChecker

