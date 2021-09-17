/* GET about page. */
const about = (req, res) => {
    res.render('about', { 
        title: 'Sobre nosotros' ,
        description: 'Conoce mas sobre ByE',
        about_img: '',
        texto: 'ByE Bonitos y Esponjositos es una tienda online ecuatoriana, fundada por dos hermanas que disfrutan del arte, la comida y la salud. La tienda fue fundada en el año 2020 con el objetivo de aprovechar el conocimiento del tejido de estos peluches ',
       
        title2: 'Nuestros Productos',
        description2:'Conoce cuales son nuestros productos',
        image_product: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
        'productos' : [{
         nombre_producto: 'Peluches crochet personalizados, por stock o bajo pedido'
          },{
        nombre_producto: 'Corazones Diamante de Chocolate ByE'
          },{
        nombre_producto: 'Bear Bomb ByE'
          },{
        nombre_producto: 'Bombones de chocolate rellenos'
          },{
        nombre_producto: 'Productos para Skincare'      
          }],
        
        title3: 'Redes sociales',
        'redes' : [{
            imagen: (src = '/images/facebook.png'),
            nombre: 'Facebook',
            link: 'https://www.facebook.com/354656622232181/posts/355289528835557/?sfnsn=mo',
        },{
            imagen: (src = '/images/insta.png'),
            nombre: 'Instagram',
            link:'https://www.instagram.com/bye_ec/',
        },{
            imagen: (src = '/images/wpp.png'),
            nombre: 'WhatsApp',
            link:'',
        }
    
    
         ]

        
});
};


module.exports = {
    about
};