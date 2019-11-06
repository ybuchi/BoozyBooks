var getblogs = require('../../models/Blog');

var getmeetups = require('../../models/Meetups');



module.exports = function(app){
    // root aka home route
    app.get('/', (req, res) =>
    getblogs.findAll({limit:1})
    .then(blogs =>
    {
        getmeetups.findAll({limit:2})
        .then(meetups => {
            console.log('im here');
            res.render('index', { layout: 'landing',
            blogs, meetups
        })

     });
   
    })
    .catch(err => console.log(err)));


}


