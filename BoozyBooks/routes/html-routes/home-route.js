var getblogs = require('../../models/Blog');

var getmeetups = require('../../models/Meetups');
var Sequelize = require('sequelize');



module.exports = function(app){
    // root aka home route
    app.get('/', (req, res) =>
    getblogs.findAll({order: Sequelize.literal('rand()'), limit:1})
    .then(blogs =>
    {
        getmeetups.findAll({order: Sequelize.literal('rand()'), limit:2})
        .then(meetups => {
            console.log('im here');
            res.render('index', { layout: 'landing',
            blogs, meetups
        })

     });
   
    })
    .catch(err => console.log(err)));


    
    //  // populate random on blogs route
    //  app.get('/blogs', (req, res) =>
    //  getblogs.findAll({order: Sequelize.literal('rand()'), limit:4})
    //  .then(blogs =>
    //   {
    //       console.log('im here');
    //          res.render('blogs', { layout: 'landing',
    //          blogs, 
    //      });
    //  })
    //  .catch(err => console.log(err)));



    //  // populate random meetups route
    //  app.get('/meetups', (req, res) =>
    //  getblogs.findAll({order: Sequelize.literal('rand()'), limit:4})
    //  .then(meetups =>
    //   {
    //       console.log('im here');
    //          res.render('meetups', { layout: 'landing',
    //          meetups, 
    //      });
    //  })
    //  .catch(err => console.log(err)));
 

}


