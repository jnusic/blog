// routes ======================================================================
    //load the blog_post model
    var blog_posts = require('./models/blog_posts')
    // api ---------------------------------------------------------------------
    // get all blog_posts

    module.exports = function (app) {
        
        app.get('/api/blog_posts', function(req, res) {

        // use mongoose to get all blog_posts in the database
        blog_posts.find(function(err, blog_posts) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(blog_posts); // return all blog_posts in JSON format
        });
    });

    // create blog_post and send back all blog_posts after creation
    app.post('/api/blog_posts', function(req, res) {

        // create a blog_post, information comes from AJAX request from Angular
        blog_posts.create({
            text : req.body.text,
            done : false
        }, function(err, blog_post) {
            if (err)
                res.send(err);

            // get and return all the blog_posts after you create another
            blog_post.find(function(err, blog_posts) {
                if (err)
                    res.send(err)
                res.json(blog_posts);
            });
        });

    });

    // delete a blog_post
    app.delete('/api/blog_posts/:blog_post_id', function(req, res) {
        blog_posts.remove({
            _id : req.params.blog_post_id
        }, function(err, blog_post) {
            if (err)
                res.send(err);

            // get and return all the blog_posts after you create another
            blog_post.find(function(err, blog_posts) {
                if (err)
                    res.send(err)
                res.json(blog_posts);
            });
        });
    });

     // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    }
