import Api from '@/services/Api'

export default {
    getSchool(id) {
        return Api.get('/school', id);
    },
    
    createSchool(data) {
        return Api.post('/create', data);
    },

    updateSchool(data) {
        return Api.put('/school', data);
    }
}