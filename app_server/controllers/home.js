/* GET home page. */
const home = (req, res) => {
    res.render('home', {
        title: 'ByE' ,
        pageHeader: {
            welcome: 'BIENVENIDOS A',
            title:'ByE',
            strapline: 'Bonitos y Esponjositos'
        }
    });
};

module.exports = {
    home
};