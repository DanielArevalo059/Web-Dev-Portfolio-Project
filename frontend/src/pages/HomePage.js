import React from 'react';

function HomePage(){
    return (
<>
    <h2>Welcome to Daniel Arevalo's Site</h2>
    
        <article>
            <h3>About my site</h3>
            <p>
                First off, thank you for visiting! Below, you will see the technologies implemented in this full-stack website.
            </p>    
            <p>
                <h4>Technologies implemented</h4>
            <dl>
                <dt><strong>HTML</strong></dt>
                <dd>HyperText Markup Language is used for the frontend and backend coding of this app. Through the use of HTML's extensive
                    library of elements and attributes, each page is organized and displayed to my liking and, hopefully, yours!
                </dd>
                <dt><strong>CSS</strong></dt>
                <dd>Cascading Style Sheets is used in tandem with HTML to provide the styling of the content on a webpage. 
                    All the fonts, the color schemes, tables and overall page layout is written in a CSS file to be displayed is a readable and user-friendly manner.
                </dd>

                <dt><strong>Google Fonts</strong></dt>
                <dd>Each font is imported from Google Fonts and implemented in the CSS file. Throughout this web application, you will see two distinct fonts.</dd>
                
                <dt><strong>Optimized Images</strong></dt>
                <dd>Having optimized images is essential for an efficient and user-friendly website. A developer must find the right balance between file size and image size
                    by compressing the image to ensure the page loads fast while also displaying the cleanest image possible. You can view my gallery page to see images that have been optimized.
                </dd>

                <dt><strong>JavaScript</strong></dt>
                <dd>JavaScript is the programming language used to make the webpages dynamic. Through the use of JavaScript, the user is able to redirected to other pages, enter/manipulate data,
                     submit forms, and much more. JavaScript is an object-oriented programming language which allows us to assign name-value pairs to an object of data. With these objects and the use of functions,
                     we are able to Create, Retrieve, Update, and Delete (CRUD) data.</dd>
                
                <dt><strong>Node and Express</strong></dt>
                <dd>Very generally speaking, Node is an installed JavaScript environment that allows us to use pre-created libraries and packages that make tasks easier to complete in JavaScript.  
                    Express is a framework developed for Node which provides us with an Application Programming Interface (API). Express is what allows us to implement CRUD operations with JavaScript by creating 
                    routes for the data to travel and be manipulated with functions.
                </dd>

               <dt><strong>MongoDB and Mongoose</strong></dt>
                <dd>Nearly all web applications need to store and access data. MongoDB and Mongoose are used together to store and access data. 
                    In this application, the statistics/data from the Disc Golf Log page is stored in a MongoDB Atlas Cluster, which is a cloud-based data storage service.
                    Mongoose, on the other hand, is a package installed and used in the backend of the web application that provides a communicative layer between Node and the MongoDB database.
                </dd>
                
                <dt><strong>React and React Icons</strong></dt>
                <dd>This webpage implements React, which is a very useful framework that is implemented on the front (user) end of this web application. 
                    Without React, manipulating a webpage through the user's interactions can be tedious and error-prone. But, with React, the developer can write higher-level language and 
                    let React manipulate the webpage accordingly through the use of components. 
                    React also allows for Single Page Applications, where all the static content of a web application from the web server is loaded into the browser one time. However, 
                    the manipulation to the webpage will still look and feel like it is loading new pages/content upon interaction (until any data is CRUD-ed). 
                    React Icons can be seen on my Order page as well as my Disc Golf Log page. These icons are downloaded from React Icons and used as user-friendly, clickable, images. </dd>
                
                <dt><strong>REST</strong></dt>
                <dd>My webpage uses a REST (Represenational State Transfer) API implementation. In order for a web app to be sonsidered REST, it must follow specific guidelines. In general, a REST API contains a server that manages 
                    collections of resources which are identified through unique URLs. Then, the CRUD operations must be implemented using HTTP methods POST, GET, PUT, and DELETE for Create, Retrieve, Update, and Delete, respectively.
                    This makes development for a web app easier for the developer to understand what is happening in the code and to build off previously created apps. Lastly, the server must be stateless, meaning all information needed 
                    to process a request must be sent at the instant of the request.
                </dd>
              </dl>
            <p>Again, thank you for visiting my site. Please enjoy additional Web Development topics in my Topics page, optimized images in my Gallery, a made-up list of items to order in my Order page, an example of DOM manipulation through the staff page, and a Disc Golf log that allows you to CRUD some data!</p>
            </p>            
        </article>

</>
    );
}
export default HomePage;
