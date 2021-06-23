const Dev = require('../models/Dev');
const parseStringAsArray = require('../models/utils/parseStringAsArray');
        //BUSCAR TODOS OS DEVS NUM RAIO DE 10KM
        //FILTAR POR TECNOLOGIAS

module.exports = {
    async index(request, response){
        const { techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        // const devs = await Dev.find({
        //     techs: {
        //         $in: techsArray,
        //     },
        //     location: {
        //         $near: {
        //             $geometry: {
        //                 type: 'Point',
        //                 coordinates: [age],
        //             },
        //             $maxDistance: 10000,
        //         },
        //     },
        // });
        
        return response.json({ devs });
    }
}