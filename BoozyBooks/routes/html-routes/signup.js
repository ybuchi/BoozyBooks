
module.exports = function (app){

//sign up
app.get('/signup', (req, res) => {
    res.render('signup', { layout: 'landing' })
});

};
