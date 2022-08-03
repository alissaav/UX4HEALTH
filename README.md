# UX4HEALTH
A web-toolkit full of UX methods that work especially well with health related applications

# Set up the dev enviroment

This projects consists of the following two components: 
- A wordpress site as the content management system
- A frontity project that lets us configure the website with React

# Set up Wordpress 

First please make sure that you have [Node.js](https://nodejs.org/en/) installed.

UPDATE: The wordpress instance is online and accessible at https://ux-wp.codeforhealth.de/. The following steps aren't necessary anymore.

To run the wordpress site locally we used a tool called [Local](https://localwp.com/). Just install the program and drag the zip-file `toolkit-wordpress.zip` into it like it's shown in this video: https://www.youtube.com/watch?v=O7Wb1p1GV7E. If you'll make changes to the wordpress project, you'll have to create a new zip containing: 
- the .sql file you'll find in the folder `dub-installer`
- the folder `wp-content`

Once the wordpress instance is running, you may need to make some changes in the admin dashboard that are explained in the file `AnhangWordpress.pdf`. 

# Set up Frontity

To run the Frontity project, you first have to change the url that connects it to the running wordpress instance. How to do that is also explained in `AnhangWordpress.pdf`. Then open a terminal, navigate to your local `toolkit-frontity` folder and run the command
`npm i @frontity/core`
to install frontity.
Then run 
`npx frontity dev`
to run the project. It should open in your browser at `localhost:3000`.
