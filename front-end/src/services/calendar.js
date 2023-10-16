import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/calendar/'


const create_event = async (event_data) => {
    console.log("event_data: ", event_data)
    const url = baseUrl + "add_event"
    const response = await axios.post(url, {...event_data, selectedHospital: event_data.selectedHospital.label})
    console.log("response:    ", response.data)
    return response.data.status
}


export default { create_event }