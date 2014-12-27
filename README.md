# ampersand-hoodie-example
This repo is a mashup of parts of the sample Hoodie application, and a simplified version of the sample Ampersand application.  The interesting parts are on the "Collection 

## Installation

First, install Hoodie: refer to the [Hoodie setup guide](http://hood.ie/intro/#get-started).

Second, set up the application:
* clone this repository
* npm install
* grunt

And then run Hoodie:
* hoodie start

Hoodie will prompt you for an admin password, just enter anything.
Hoodie will then open the app in a browser window.  Click on the "Sign Up" button to register, and then later use the "Sign In" and "Sign Out" buttons as needed.  (the Sign Up button only works once, since it is hard coded to create one account)

Once signed in, go to the "Collections demo" tab, and click the "Add Person" button...

## Notes
This is not intended to be a comprehensive tutorial on Ampersand or Hoodie - it is instead a proof of concept for how the two technologies can be used together.
It is also a work in progress, so there are still some places with yellow "under construction" tape.  For example, all of the Hoodie user management capabilities are not working.  In fact, Sign-In and Sign-Up just default to a user named "mike" with a password of "mike".  This was done to avoid using jQuery for showing modal forms, not because it's bad, but I have not yet gotten around to it.

This app is reliant on Grunt.  So if you make any changes to anything under the /amp directory, you must re-run Grunt (or just use "grunt watch").  The main build tasks that Grunt performs:  
* "Compiles" the HTML templates into one JavaScript file (/amp/client/clientHtml.js)
* uses Browserify to build a bundle of all the client side JavaScript, and puts it into /www/assets/js/allJs.js


  