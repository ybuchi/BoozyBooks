
module.exports = function(app){
    // root aka home route
    app.get('/', (req, res) => {
        console.log('im here');
        res.render('index', { layout: 'landing' })
        console.log('im here');
    });

}