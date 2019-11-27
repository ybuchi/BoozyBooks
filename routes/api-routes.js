// require db

module.exports = function(app){
    
    // meetups
    app.get('/api/meetup', (req, res) => {
        res.render('meetups', { layout: 'landing' })
    });
    app.get('/api/blogs', (req, res) => {
      res.render('blogs', { layout: 'landing' })
  });

  app.get('/api/signups', (req, res) => {
    res.render('index', { layout: 'landing' })
});
    



}