const { age, date } = require('../../lib/utils');
const Intl = require('intl');

modules.exports = {
    index(req, res){
        return res.render('members/index');
    },
    create(req, res){
        return res.render('members/create');
    },
    post(req, res){
        const keys = Object.keys(req.body);

        for(key of keys) {
            if(req.body[key] == ''){
                return res.body('Please, fill all fields');
            }
        }
        
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