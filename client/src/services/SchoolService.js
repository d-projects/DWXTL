import axios from 'axios'

// importing the actual Api file wasn't working, so I resorted to this line
const Api = axios.create({baseURL: 'http://localhost:3000/'}); 

export default {
    // get all schools
    getAllSchools() {
        return Api.get('/all_schools');
    },

    // get a single school
    getSchool(id) {
        return Api.get('/school/' + id);
    },
    
    // create a single school
    createSchool(data) {
        return Api.post('/create', data);
    },

    // update a single school
    updateSchool(id, data) {
        return Api.put('/edit/' + id, data);
    }
}