const calendarRouter = require('express').Router()
const { google } = require('googleapis');
const calendar = google.calendar({ version: "v3" });

const config = require('../utils/config')
const {dateTimeForCalander} = require('../utils/calendar_helper')

const auth = new google.auth.JWT(
    config.SERVICE_ACCOUNT.client_email,
    null,
    config.SERVICE_ACCOUNT.private_key,
    config.CALENDAR_API_SCOPES
);

console.log()

calendarRouter
    .get('/', async (request, response) => {
        response.json({ "status": true })
    })

calendarRouter
    .post('/add_event', async (request, response) => {
        try {
            const data = request.body
            console.log("............request...............")
            console.log(data)
            console.log("...........END...request...............")
            const description = `
                <b>At ${data.selectedHospital}</b>
                Patient Name: <b>${data.name} </b>
            
            `


            let dateTime = dateTimeForCalander(data.dateTime);
            let event = {
                'summary': `Routine checkup appointment.`,
                'description': description,
                'start': {
                    'dateTime': dateTime['start'],
                    'timeZone': 'Asia/Karachi'
                },
                'end': {
                    'dateTime': dateTime['end'],
                    'timeZone': 'Asia/Karachi'
                }
            };
            

            let event_response = await calendar.events.insert({
                auth: auth,
                calendarId: config.CALENDAR_ID,
                resource: event
            });

            if (event_response['status'] == 200 && event_response['statusText'] === 'OK') {
                response.status(200).json({ "status": true, "message": "Event added to calendar." })
            } else {
                console.log(response)
                response.status(500).json({ "status": false, "message": "Internal server error." })

            }


        } catch (error) {
            console.log(`Error at insertEvent --> ${error}`);
            response.status(400).json({ "status": false, "message": "Invalid data provided." })

        }
    })

module.exports = calendarRouter 