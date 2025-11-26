const db = require('../models');
const komikService = require('../services/komikService');

async function createKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }
