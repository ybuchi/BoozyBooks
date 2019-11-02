 
 module.exports = function (app){
 // meetups
 app.get('/meetup', (req, res) => {
    res.render('index', { layout: 'landing' })
});
};