ReactPress connects the WordPress REST API with a small React-driven SPA/Blog.

It is *NOT A THEME*. These files can be installed pretty much anywhere, even on other servers/domains, and will access the WP JSON content you instuct it to get (via JSON) and display that information.

This is still a learning experience for working with React and Redux with WordPress, so it probably won't impress anybody quite yet.

You will have to provide the REST endpoints for the API; the ones currently listed are local only and so this won't work at all unless you:

1. Have the WP REST API v2 installed somewhere, and 
2. Enter the (2 - two) endpoints you want in the bottom of js/app.js

Enter whatever endpoints you want, but for the time being you'll need two. In the example, they're limited to four posts, of two different categories, but you can use whatever you want, as many posts you want et cetera - the page should sorta adapt to whatever endpoints it receives.
Please refer to the WP Rest API docs for info on how to install WP REST API and how to figure out what endpoints you want to use for you 

*COMING SOON*
I'll make the endpoints and other settings more accessible
No live demo page just yet, sorry - that will be coming soonish
Switching to Redux for state management, work in progressC

Initial commit is clearly very early days, and the css stuff looks horrid, it's for test purposes only.
Maybe I'll just link in some basic bootstrap to not look terrible; we'll see how it turns out.