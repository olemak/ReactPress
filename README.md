**ReactPress connects the WordPress REST API with a small React-driven SPA/Blog.**

This is NOT A THEME
===================
These files can be "installed" (just copied to, really) any location. Keeping it outside of your WordPress installation is certainly a good idea. There's no database, no PHP or otherrealtime preprocessing going on - just flat files and Ajax calls, so you can put this pretty much anywhere - you dont even need a proper webserver; you can open it as a local file with your browser and it will work. Feel free to put it on other servers/domains than your WP installation, or on your local desktop for that matter. 

ReactPress will access the WP JSON content you instuct it to get (via WP REST API endpoints) and display that information in "Single Page Application" style. You'll have some settings for switching things around, and you can of course do whatever you want with the css/scss. Or anything else; ReactPress is released under the KYO ("Knock Yourself Out") licence which is something I just made up.

WP REST Endpoints
-----------------
You will have to provide the REST endpoints for the API; the ones currently listed are local only and so this won't work at all unless you:

1. Have the WP REST API v2 installed somewhere, and 
2. Enter the (2 - two) endpoints you want in the bottom of js/app.js

Use any WP REST API endpoints you want. For the time being you'll need two, but I will look at alternative solutions for passing any number of endpoints in a settings object. The example/placeholder endpoints each fetch the last four posts from two different categories, but you can use whatever you want, as many posts you want et cetera - the page should sorta adapt to whatever endpoints it receives. If not, you'll just have to adjust your css.
Please refer to the WP Rest API docs for info on how to install WP REST API and how to figure out what endpoints you want to use for you 

COMING SOON
-----------
* I'll make the endpoints and other settings more accessible
* No live demo page just yet, sorry - that will be coming soonish (it will simply be my personal web page/blog, most likely)
* Switching to Redux for state management, work in progress

Initial commit is clearly very early days, and it looks horrid; it is for test purposes only.
Maybe I'll just link in some basic bootstrap to make it look less terrible; we'll see how it turns out.