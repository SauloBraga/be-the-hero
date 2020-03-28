const conn = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(req, res) {
        const ongs = await conn('tb_ongs').select('*');
    
        return res.json(ongs);
    
    },
    async create(req, res){
        const {name, email, whatsapp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await conn('tb_ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return res.json({
            id
        });
    }
}