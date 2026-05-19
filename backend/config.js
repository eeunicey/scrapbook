import path from 'path';

const config = {
    // backend port
    port: parseInt(process.env.BACKEND_PORT, 10) || 3000,
    // assets directory
    assetDir: process.env.ASSET_DIR || '/data/assets',
    // database file
    dbFile: process.env.DB_FILE || '/data/scrapbook.db',
};

Object.freeze(config);

export default config;