const { render } = require("ejs");
const School = require("../models/school");
const config = require('../config/config.js');
const AWS = require('aws-sdk');

const school_get = async (req, res) =>  {
    try {
        const school = await School.findOne({_id: req.params.id});
        res.send({school, valid: true});
    } catch (err) {
        res.send({valid: false})
    }
}

const all_schools_get = async (req, res) => {
    try {
        const schools = await School.find();
        res.send(schools);
    } catch (err) {
        res.send(err);
    }
}

const create_post = async (req, res) => {
    try {
        const duplicate = await School.findOne({name: req.body.name});
        if (duplicate) throw 'The school you entered already exists!';

        //const imageURL = await getImageURL(req.query.image);
        //if (!imageURL.success) throw 'There was an error uploading the image, please try again';

        const school = new School({
            name: req.body.name,
            about: req.body.about,
            location: req.body.location,
            admission: req.body.admission,
            imageURL: 'https://source.unsplash.com/random/200x200?sig=' + Math.random(100000000)
        });

        await school.save();
        res.send({success: true});

    } catch (err) {
        res.send({success: false, message: err});
    }    
}

const edit_put = async (req, res) => {

    //const imageURL = await getImageURL(req.query.image);
    //if (!imageURL.success) throw 'There was an error uploading the image, please try again';

    try {
        await School.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            about: req.body.about,
            location: req.body.location,
            admission: req.body.admission,
            //imageURL: imageURL
        });
        res.send({success: true});

    } catch (err) {
        res.send({success: false, message: err});
    }    
}

const getImageURL = async (img) => {    
    console.log(img)
    try {
        const s3 = new AWS.S3({
            accessKeyId: config.s3_key_id,
            secretAccessKey: config.s3_key,
            Bucket: config.bucket
        });  
        var params = {
            Bucket: config.bucket,
            Body: JSON.stringify(img),
            Key: `schoolImages/${Math.random().toString(36).slice(2)}` // generate random url for image
        };
        console.log(params)
        const result = await s3.upload(params);
        return {success: true, loc: result.Location};
    } catch (err) {
        console.log(err)
        return {success: false};
    }
}

module.exports = {
    school_get,
    all_schools_get,
    create_post,
    edit_put
}