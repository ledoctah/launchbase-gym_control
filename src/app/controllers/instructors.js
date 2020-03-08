const { age, date } = require('../../lib/utils');
const Intl = require('intl');

modules.exports = {
    index(req, res){
        const instructors = [];

        for(instructor of data.instructors) {
            instructor.services = instructor.services.toString().split(',');
            instructors.push(instructor);
        }

        return res.render('instructors/index');
    },
    create(req, res){
        return res.render('instructors/create');
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for(key of keys) {
            if(req.body[key] == ''){
                return res.body('Please, fill all fields');
            }
        }
    
        let {avatar_url, birth, name, services, gender} = req.body;
    
        return;
    },
    show(req, res){
        return
    },
    edit(req, res){
        const keys = Object.keys(req.body);

        for(key of keys) {
            if(req.body[key] == ''){
                return res.body('Please, fill all fields');
            }
        }

        return
    },
    put(req, res){

        return
    },
    delete(req, res){

        return
    },
}