/* GET about page. */
const about = (req, res) => {
    res.render('about', { 
        title: 'Sobre nosotros' ,
        description: 'Conoce mas sobre ByE',
        about_img: '/images/perfil.jpg',
        texto: 'ByE Bonitos y Esponjositos es una tienda online ecuatoriana, fundada por dos hermanas que disfrutan del arte, la comida y la salud. La tienda fue fundada en el año 2020 con el objetivo de aprovechar el conocimiento del tejido de estos peluches ',
       
        title2: 'Nuestros Productos',
        description2:'Conoce cuales son nuestros productos',
        image_product: '/images/catalogo.png',
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
            link:'https://api.whatsapp.com/send?phone=+593 98 743 3794',
        }
    
    
         ]

        
});
};


module.exports = {
    about
};