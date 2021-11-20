/* GET home page. */
const home = (req, res) => {
    res.render('home', {
        title: 'Bienvenidos a ByE' ,
        carrusel1: (src = '/images/carrusel1.png'),
        carrusel2: (src = '/images/carrusel2.png'),   
        carrusel3: (src = '/images/carrusel3.png'),
        pageHeader: {
            welcome: 'BIENVENIDOS A',
            title:'ByE',
            strapline: 'Bonitos y Esponjositos'
        },
        'categorias' : [{
            imagen: (src = '/images/peluches.png'),
            nombre: 'Peluches',
            descripcion:"Encuentra un peluche para ti"
        },{
            imagen: (src = '/images/skincare.png'),
            nombre: 'Skincare',
            descripcion:"Cuida tu piel con nosotros"
        },{
            imagen: (src = '/images/golosinas.png'),
            nombre: 'golosinas',
            descripcion:"Encuentra combos de golosinas para ti"
            
        }],
        
         
        
        
    });
};

module.exports = {
    home
};