import React from 'react';

function TopicsPage(){
    return (
<>
    <h2>Web Dev Concepts</h2>
    
        <article>
            <h3>Web Servers</h3>
            <p>
                {/* <!-- Explain what index means as it relates to websites and servers. --> */}
                The <strong>index</strong> is essentially the default name for the homepage of a website that is hosted on an Apache web server. 
                The index.html file is what is immediately displayed when a website is visited.
                Usually, this file will be returned when the web application receives a GET request.
            </p>
            <p>
                {/* <!-- Explain what you see in the browser's Web Dev/Inspector tools.  
                    What is different about the file's details on the web server versus the local computer?-->*/}
                When viewing the html file through the web server, there is a notable amount of additional information that is displayed in the Inspector tools when compared to viewing the file locally.
                Both ways of accessing the file display General, Response Headers, and Request Headers, and both have the status code 200 OK, which makes sense because both display the body in its entirety.
                However, the Request and Response Headers display much more information when accessed through the web server, since there is a http 
                request and response happening between the web server and the client, which is not occurring when viewing the file locally.
            </p>
            <p>
                {/* <!-- Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not.--> */}
                Through the web server, the favicon.ico file has a status of 200 because the request for the icon was met with a successful response, 
                which is provided by the web server. This is noted by the CSU COE icon in the tab next to my name.
                In contrast, the main.css and main.js files are visible in both Web Dev/Inspector tools, but both respond with a 404 response because these files do not exist in the directory.
            </p>
            <p>
                {/* <!-- Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and resources?--> */}
                The <strong>URL</strong> https://web.engr.oregonstate.edu/~arevalda/a1-arevalda/ can be broken into the scheme, subdomain, host domain, and the resources. The <strong>scheme</strong>, which in this example is https, is a
                standard protocol that encrypts the data being requested and responded between the host and the client.
                The <strong>subdomain</strong> is "web.engr", which is a subsection of the <strong>host domain name</strong>, which in this example is "oregonstate.edu". 
                After the host domain name, we have the path to the <strong>resource</strong>, which is "/~arevalda/a1-arevalda/". This part of the URL directs the client to my personal webpage on the server. 
            </p>
        </article>
            
        <article>
            <h3>Frontend Design</h3>
            <p>
                 {/* <!-- In your own words, explain the following: 

                The concept of frontend design, in a <p> paragraph.--> */}
                Essentially, <strong>frontend design</strong> is what the user experiences on their end. From the visual design of the webpage to graphical user-interface (<strong>GUI</strong>), or interactive applications, 
                frontend design encompasses all that is experienced on the user's end. This includes color schemes, webpage layout and navigation, text size, font, and icons. These factors, and many more, are all parts of frontend design. 
                When thinking of frontend design, the five E's must be considered.
            </p>
                {/* <!--The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions. --> */}
            <dl>
                <dt><strong>Effective</strong></dt>
                <dd>Is the webpage effective at assisting the user reach their intended goal and are the results accurate? Will the user be satisfied that their goal was met?</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>Did the user reach their intended goal with the least number of steps and as quickly as possible? Does the user feel that the minimum amount of time and effort was wasted in reaching their goal?</dd>
                <dt><strong>Easy to Navigate</strong></dt>
                <dd>Will the user immediately know how to use the webpage to meet their goal without outside assistance? Will they be able to reach that goal again just as easily if they returned? Is the information displayed 
                    in a way that all types of users can navigate through it easily?</dd>
                <dt><strong>Error-Free</strong></dt>
                <dd>Can the user reach their goal without any roadblocks or errors? Is the information accessible to all types of users?</dd>
                <dt><strong>Enjoyable</strong></dt>
                <dd>Is the user satisfied enough with their oeverall experience to return? Was the user engaged throughout their experience with the webpage or application?</dd>
            </dl>

                {/* <!--The purpose of page layout tags, in a <p> paragraph.--> */}
            <p>
                <strong>Page layout tags</strong> are important in frontend design because they break up the html document into vital parts. On the user's end, they only show up as a separated newline before and after the element. 
                However, on the developer's side, it helps break up the document into pieces, like a &lt;main&gt; section that holds the important content, a &lt;nav&gt; section that will contain links to other pages, and a 
                &lt;section&gt; portion that will separate the document into further &lt;article&gt;'s. These tags, in addition to others, assist the creating developer, and other developers working on the html document, to break apart the webpage into logical blocks.
                In addition to assisting developers organize the content, it also helps machines understand which portion of the page is dedicated to what, which is especially helpful to search engine robots and screen readers.
            </p>

                {/* <!--How anchors link to content and from page to page, in a <p> paragraph. Clarification: What is the conceptual difference between text anchors and navigation?--> */}
            <p>
                <strong>Anchors</strong> are used to create links between the current page and another page. There are two parts to an anchor element. Between the opening and closing &lt;a&gt; element tags, the developer includes a description of the link, which is displayed to the user.
                In addition to the description, there is a "href" attribute included within the anchor tags that is set equal to the URL the user is taken to if the link is clicked. These text anchors will show up to the user as a text, usually underlined and in blue, which they can click.
                Similarly, <strong>navigation anchors</strong> within a &lt;nav&gt; section can be stylized as buttons with unique font, placement on the page, etc., with the same syntax as a text anchor and the style defined in a .css file.
            </p>            
        </article>

</>
    );
}
export default TopicsPage;
