import config from "#root/config"
import Database from 'better-sqlite3'

const dbFile = config.dbFile

const db = new Database(dbFile,{ verbose: console.log })

// --- create tables ---
