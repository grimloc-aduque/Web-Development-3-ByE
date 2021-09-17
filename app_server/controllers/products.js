/* GET products page. */
const products = (req, res) => {
    res.render('products', { 
        title: 'Products',
        sections: [
            {
                title: 'Peluches',
                description: 'Peluches crochet personalizados',
                'products': [{
                    image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/165975326_398313164533193_6210974124130320567_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEjEvVwii-jXfaI2uL8ilRyiQdiuVgn6qmJB2K5WCfqqcQtbm_RfzxtAcYjIaDJ8_X7HTszQN0tr5jB3Bad4RIq&_nc_ohc=NaO8QazHzyQAX8Pnjvp&tn=4PsBsLEegfXeAHC_&_nc_ht=scontent.fgye1-2.fna&oh=3458b04dc811086007186f3854292292&oe=6165273D',
                    name: 'Product 1',
                    price: '$9.99',
                    description: 'Descripcion del producto 1'
                },{
                    image_url: 'https://scontent.fgye1-1.fna.fbcdn.net/v/t1.6435-9/164686255_398313184533191_4965315563971527458_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEdKgn9W_jElSqtdF68t3aXTspl4971xxpOymXj3vXHGgtC7gep9RlBxJmr7nMt8HERuaFjfHJyuQkWP109onUV&_nc_ohc=bujiqjxrJjcAX_FGXSA&_nc_ht=scontent.fgye1-1.fna&oh=20d612ef9019e77bcd916772de37cb5d&oe=6163F402',
                    name: 'Product 2',
                    price: '$9.99',
                    description: 'Descripcion del producto 2'
                },{
                    image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/163593612_398313217866521_1772126609911041126_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeELev96qDKN9kACPrRhTI2nkfIFLllGF7uR8gUuWUYXuw7Fi9w2nYn-gOOa265IenThQFlIarnezTjwo0s4cLGV&_nc_ohc=NcRYqd_TpYsAX9-Cful&_nc_ht=scontent.fgye1-2.fna&oh=4757ece36aaa08cf331d408fc076d9a3&oe=61642F7D',
                    name: 'Product 3',
                    price: '$9.99',
                    description: 'Descripcion del producto 3'
                },{
                    image_url: 'https://scontent.fgye1-2.fna.fbcdn.net/v/t1.6435-9/163151354_398313317866511_4850718753153498483_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFIBEntt7vDfZpR7_BUaiIYqaNPub_prwSpo0-5v-mvBGWUglr-GC06PS9pyvUQ3WjE56Z1z5Ixp9_qgJ6tDZIs&_nc_ohc=iiFgOm_1QMYAX_fJwOl&_nc_ht=scontent.fgye1-2.fna&oh=a870b7a97de915c4928a0cde0f69ca97&oe=6162A31E',
                    name: 'Product 4',
                    price: '$9.99',
                    description: 'Descripcion del producto 4'
                },{
                    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154376200_375494010148442_1328147626249077422_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeERF5w1RTXQIPCxIfbdgTuiJgn4etPZWfUmCfh609lZ9Zn4w6B-7zXKJR9M-bALnMFoVTmFp8DCxfwDQp1OHWAK&_nc_ohc=P8Y5rjO9oiMAX8jGBxp&_nc_ht=scontent.fuio1-2.fna&oh=d13f587acb76108ba8d62f60b186b489&oe=616A0C03',
                    name: 'Product 5',
                    price: '$9.99',
                    description: 'Descripcion del producto 5'
                },{
                    image_url: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/153310145_375494003481776_441463078493737279_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHYtzyLdRPNts7MyI-B9whl3vsUhzeAjlLe-xSHN4COUr0bCnf79FiLOgLEfxWB-0SYkqozLtE4o2WrNAQrfMkP&_nc_ohc=jkIvGP__qhQAX97ohH-&_nc_ht=scontent.fuio1-1.fna&oh=47045b1639816067da94ea5e4e7bef45&oe=6169DB8D',
                    name: 'Product 6',
                    price: '$9.99',
                    description: 'Descripcion del producto 6'
                }]
            },{
                title: 'Golosinas',
                description: 'Chocolates, frutas y mucho mas',
                'products': [{
                    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154544654_375532456811264_3400425789624409889_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEc5gQeCFLNPUzmKLWOb9dPWRINzuQCw9BZEg3O5ALD0PXGpI2EJ8K0W65tN_GmnisAxRsyO7wIG3nppiBMuRqi&_nc_ohc=vPgv06auudkAX_zmrVR&_nc_ht=scontent.fuio1-2.fna&oh=165349671a322a11bcd877090069b8a7&oe=6168FFBD',
                    name: 'Product 1',
                    price: '$9.99',
                    description: 'Descripcion del producto 1'
                },{
                    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154525027_375532473477929_2496558283294152106_n.png?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeHXu8u9dISG6ZlDBvLhfrUZvItAQHpNvd68i0BAek293oMwbwlBpOOomnD1T6SAVelR4qXC5b0sKFJeqIdVv4Nl&_nc_ohc=IoDP3nEXsiIAX8Kn9fC&_nc_ht=scontent.fuio1-2.fna&oh=78981f8b85f037b6fa56538f8ca7d87b&oe=616A25A7',
                    name: 'Product 2',
                    price: '$9.99',
                    description: 'Descripcion del producto 2'
                },{
                    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154498876_375532583477918_2810524161590543206_n.png?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEAzcjsj04hTskfmbRg-BI4K9AMOCb5ZYAr0Aw4JvllgB48QQ_rYFX-gHQZDK3LYLgSlSfpjjWVKaNoEelexEtZ&_nc_ohc=Xg6ZXDWgNXAAX_ap-ue&_nc_ht=scontent.fuio1-2.fna&oh=fcedb45768fe303e25c0599de9dff127&oe=616A52FD',
                    name: 'Product 3',
                    price: '$9.99',
                    description: 'Descripcion del producto 3'
                },{
                    image_url: 'https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/154509564_375532753477901_3239021381489285769_n.png?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGSEvZYL66Hx09JHDwKpSPTeXs-8n0-CCV5ez7yfT4IJQzRYa0TFXLEUCdje78sC61ssktdVEqKryPi_eCz8ksS&_nc_ohc=z7w7kfFOoVQAX9PpXME&_nc_ht=scontent.fuio1-2.fna&oh=87af42edb16bfb2d4d1afcd63078119b&oe=616B76AD',
                    name: 'Product 4',
                    price: '$9.99',
                    description: 'Descripcion del producto 4'
                },{
                    image_url: 'https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/154537303_375532813477895_6628176610621200117_n.png?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeGJ8CftftbBZDf4UXr-OIhsrClTAxwDPBasKVMDHAM8FlaPOk1cLQ8ax4iAhHLwmgQx-ye3COq6gJG1TB4dLwHG&_nc_ohc=BLY-tAPETcoAX9Z-TQP&_nc_ht=scontent.fuio1-1.fna&oh=c89bcaf526dd3b000ef335239cddb235&oe=616A81F2',
                    name: 'Product 5',
                    price: '$9.99',
                    description: 'Descripcion del producto 5'
                }]
            },{
                title: 'Skin care',
                description: 'Los mejores productos para cuidar tu piel',
                'products': []
            }
        ]
    });
};

module.exports = {
    products
};