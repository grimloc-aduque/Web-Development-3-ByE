/* GET crud page. */
const crud = (req, res) => {
    res.render('crud', { title: 'CRUD' })
}

module.exports = {
    crud
};