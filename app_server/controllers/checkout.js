const checkout = (req, res) => {
    res.render('checkout', {
        title: 'Checkout',
        mensaje:'Ingrese un dato valido en el campo'
     
        
    
    });
};

module.exports = {
    checkout
}; 