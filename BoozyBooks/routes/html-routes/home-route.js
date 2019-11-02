
module.exports = function(app){
    // root route
    app.get('/', (req, res) => {
        res.render('index', { layout: 'landing' })
    });
}