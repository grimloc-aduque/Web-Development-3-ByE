const mongoose = require('mongoose');
// const Sec = mongoose.model('Sections');

const sectionsListAll = (req, res) => {
    res
    .status(200)
    .send({"status" : "success"});
};

const sectionsCreate = (req, res) => {

};

const sectionsReadOne = (req, res) => {

};

const sectionsUpdateOne = (req, res) => {

};

const sectionsDeleteOne = (req, res) => {

};


module.exports = {
    sectionsListAll,
    sectionsCreate,
    sectionsReadOne,
    sectionsUpdateOne,
    sectionsDeleteOne
}; 