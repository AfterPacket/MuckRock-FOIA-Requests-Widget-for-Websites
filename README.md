# MuckRock-FOIA-Requests-Widget-for-Websites

This is a JavaScript widget that displays FOIA requests from MuckRock.com on any website. The widget uses the MuckRock API to fetch the FOIA requests for a specified user and displays them in a list format. The widget can be easily embedded in any HTML page by adding a script tag that points to the JavaScript file.

Features
Displays FOIA requests from MuckRock.com in a list format
Fetches requests for a specified user using the MuckRock API
Easy to embed in any HTML page
Fully customizable using CSS

TODO:

MOBILE Support ? 


Live Demo
You can view a live demo of the widget at https://Jordan.Lassiter.eu. The demo displays FOIA requests for the MuckRock user "TheJ".

Usage
To use the widget, you'll need to obtain an API key from MuckRock.com and specify the username of the user whose FOIA requests you want to display. Here are the steps to get started:

Clone the repository or download the ZIP file and extract it to a folder on your computer.
Open the index.html file in your preferred code editor.
Replace the placeholder API key and username with your own API key and the username of the MuckRock user whose FOIA requests you want to display.
Save the index.html file.
Upload the index.html file and the script.js file to your web server.
Embed the widget in any HTML page by adding the following code to your page's <head> section:
html
Copy code
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
Add the following code to your page's <body> section to display the widget:
html
Copy code
<div id="foia-requests">
  <ul id="request-list"></ul>
</div>
That's it! The widget should now display the FOIA requests for the specified user in a list format.

Customization
You can customize the appearance of the widget using CSS. The widget is contained within a div element with the ID foia-requests, and the request list is contained within a ul element with the ID request-list. You can use CSS to style these elements as needed.

Support
If you encounter any issues with the widget, please open an issue on GitHub Pull requests are also welcome!
