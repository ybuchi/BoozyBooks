module.exports = function (app){

// blog
app.get('/blog', (req, res) => {
    res.render('index', { layout: 'landing' })
});
};