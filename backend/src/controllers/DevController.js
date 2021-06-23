const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../models/utils/parseStringAsArray');
// const { index } = require('../models/utils/PointSchema');

module.exports = {

    //LISTA OS DEVS
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const { github_username, techs} = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parseStringAsArray(techs);
        
            // const location = {
            //     type: 'Point',
            //     coordinates: [age],
            // };
        
                dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
               
            })
        }
        return response.json(dev);
    }
};