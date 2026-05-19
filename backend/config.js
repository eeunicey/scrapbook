import path from 'path'

export const config = {
    // backend port
    port: parseInt(process.env.BACKEND_PORT, 10) || 3000,
    // database file
    dbFile: process.env.DB_FILE || '/data/scrapbook.db'
};

Object.freeze(config);
