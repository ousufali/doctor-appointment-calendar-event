require('dotenv').config()
let SERVICE_ACCOUNT = JSON.parse(process.env.SERVICE_ACCOUNT)
const PORT = process.env.PORT
const CALENDAR_ID = process.env.CALENDAR_ID;

const CALENDAR_API_SCOPES = 'https://www.googleapis.com/auth/calendar';
const TIMEOFFSET = '+05:00';


module.exports = {
    SERVICE_ACCOUNT, PORT, CALENDAR_ID, CALENDAR_API_SCOPES, TIMEOFFSET
}