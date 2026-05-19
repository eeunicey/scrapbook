import express from 'express';
import config from '#root/config';
import healthChecker from '#routes/health'

// --- constants ---
const app = express();
const port = config.port;
console.log(`Current config:\n${JSON.stringify(config, null, 2)}`);

// --- routes ---
// express.json middleware
app.use(express.json())
// healthcheck endpoint
app.use('/api/health', healthChecker);


// start app
app.listen(port, () => {
    console.log("app listening on port", port);
});
