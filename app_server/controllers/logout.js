
const doLogout = (req, res) => {
    res.clearCookie('payload');
    res.redirect('/login')
};

module.exports = {
    doLogout
}; 
