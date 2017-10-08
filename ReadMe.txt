
       JSPopupObject  V1.01

       © 2007, James Melanson
       james_melanson@yahoo.ca

       jspopobj_v1_01.zip     SomeDay

        All Rights Reserved.

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA


    ##############################################################################
    #
    #      CHROMELESS WINDOWS
    #
    #      Because of the fact that only IE supports chromeless windows and
    #      it's not possible to create them in other browsers, Chromeless
    #      windows are not supported by this object library. If you really
    #      want to implement Chromeless windows, then I suggest you visit
    #      here:
    #
    #      http://www.kirupa.com/developer/mx2004/chromeless.htm
    #
    #      However, the powerTip feature just MIGHT solve your chromeless needs!
    #
    ##############################################################################

<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  CONTENTS OF README FILE:
  
  About You---
  1.)  Overview
  2.)  Getting Read: Instantiating the object
        i     What files to use
        ii    Linking to the files
        iii   Instantiating the popup window object object
              a.) Instantiating multiple powerTip/Pop-Up Window objects
  3.)  Ultimate Tool Tip Implementation: powerTip
        i    Description
        ii   Implementation
        iii  Default settings over-ride
        iv   Over-riding positioning
        v    How to launch a powerTip
        vi   Specify how many times a powerTip will launch
        vii  Things you can do with powerTip
        viii Closing a powerTip
  4.)  Pop-Up Window Implementation
        i     ***The Not So Short But Still Very Simple Quick Start Guide***
        ii    Window Launch Types:
              a.) Automated Window
                  i.)   What is it: The simplest PopUp Window of all
              b.) Common Specification Window
                  i.)   What is it: Several windows OR several popup window links sharing properties and settings
              c.) Instance Specification Window
                  i.)   What is it: Specifying properties and settings for pop up windows one at a time
                  ii.)  Reserved word: "all"
        iii   Specifying a URL for the window to load OR custom HTML content generated on the fly.
        iv    How to launch these windows: Text Link, Button, Image, Function Call
        v     Setting parameters
              a.) Naming the window
              b.) Setting window Width
              c.) Setting window Height
              d.) Setting window Left position
              e.) Setting window Top position
              f.) Setting window to Center on screen
              g.) Providing scrollbars in new window
              h.) Providing location field (URL field) in new window
              i.) Providing Diretories (Netscape only) in new window
              j.) Providing Status bar in new window
              k.) Providing Menubar in new window
              l.) Providing Toolbar in new window
              m.) Allowing window to be resizable
              n.) Shortcut to provide all settings
        vi    Retrieving the name of the last opened window
  5.)  Popup window properties not supported in this object
  6.)  Browser Inconsistencies Summary: Welcome To The Internet

  7.)  Full Property & Method List
  8.)  Object Generator Utility
  9.)  Samples of instantion, property assignment and launch codes
  10.)  Debugging
  11.) Support


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  ABOUT YOU:

    This document makes some assumptions about you, the user. First, it assumes you
    know how to open a text document (*.js and *.html files are text documents) in
    a text editor like EditPad or Notepad. This document assumes you know how to
    make basic edits to an HTML document by hand. This document assumes you have
    at least a beginners understanding of JavaScript and know how to assign a
    string or a number to a variable and know how to escape charaters inside a
    JavaScript string. That is the ONLY JavaScript skills you need, this document
    will explain the rest.

    Here are some terms that you may not have run across that will help you understand
    this document and the implementation of Pop-Up Windows or powerTips:


    object:        In JavaScript, an object is basically a function that remembers things.

    object Handle: In JavaScript, an object handle is a variable that contains a reference
                   to an object. Everything that the object (function) is doing, can
                   be accessed by putting the object handle in front of the objects name.

                   var someH = new myniftyobject();

                   In the example above, "someH" is the object handle and mynityobject()
                   is the function that remembers things. What the ojbect handle holds
                   is a reference to the object (function) itself.


    method:        A method is simply a JavaScript function that is attached to an object
                   in JavaScript and can only be accessed through that objects handle.

                   var someH = new myniftyobject();
                   var total = someH.calculateTotal(arg1, arg2, arg3);

                   In the above example, "someH" is the object handle and "calculateTotal"
                   is the method.

    argument:      An argument is a value that is passed to a method (objects function) by
                   placing it inside brackets after the method (objects function) name.

                   In the example for "method", the variables arg1, arg2, arg3 are the
                   methods arguments. They can also look like this:

                   var taxRate = .15;
                   var total = someH.calculateTotal(200,300.75,taxRate,'Someones Name');

    constructor:   When you create an object, calling the objects main function that
                   creates the object, with the keyword "new" in front of it, this
                   combination is called the constructor. In the above examples,
                   "new myniftyobject()" is what "the constructor" refers to.

    instantiate:   When you create the object, when you call the constructor and assign
                   the reference to a variable, i.e.:  var someH = new myniftyobject();
                   this is referred to as "instantiating the object".

    concantenate:  In JavaScript, if you join combine strings together to make one
                   string, then it is said that you are "concantenating" the strings.
                   For example:

                   var sometest = 'Here is my first string of text';
                   sometest += '<br>And here is my second line of text';

    escape:        Unlike a weekend at the cottage, when we say escape we mean the
                   process of making an unsafe character safe. The following example
                   with the quotation mark in the middle of it would cause all JavaScript
                   following this code fail:

                   var something = 'We went to Jim's place last weekend';

                   The string is enclosed in quotes so JavaScript see's the middle quote
                   as the end of the string, with illegal bare text behind it. So, to 
                   make this safe we "escape the quotation mark" by placing a backslash
                   in front of it like this:

                   var something = 'We went to Jim\'s place last weekend';

                   If your string is inside of brackets () and contains brackets, then
                   you need to escape them as well:  \(    \)

                   If your string is in double quotes "like this is" then you would need
                   to escape double quotes AND single quotes.

    modal:         In talking about powerTips and in the example, I refer to "non-modal"
                   dialogue boxes. These are simply fancy powerTips, however, it IS important
                   to remember they are "non-modal". A "modal" dialogue box will stop you
                   from using your application, or even your entire computer, until you
                   acknowledge the dialogue box by clicking one of the buttons. The powerTip
                   non-modal dialogue boxes (not really dialogue boxes at all) do not behave
                   that way.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  OVERVIEW

  I guess the first question on your mind is "Why another Pop-Up script??"

  Well, it's not just a popup script. This library creates a Pop-Up Object. The Pop-Up
  Object provides you with full control over settings and properties that are not
  mandatory. That is, parameters not supplied diminish in a style that cascades elegantly.

  As well, you can can instantiate a Pop-Up Object once then call it multiple times in
  your page with minimal amounts of code. For example, suppose you have a page that
  refers to a book your client wrote. You want to link to the sales page in twelve (12)
  different places.

  Typically, you would have code like this:

  <a href="#" onClick="popUpWin('http://www.foobook.bar/cgi-bin/purchaseMe.cgi?bookid=1234','sellbook',400,400,20,20,yes,no,no,no,no,no);">my book</a>

  ...but you would have that code twelve times and would take up (149 characters X 12 = 1788 Characters).
  As well, if you have to edit the Pop-Up link, you have to search through your page and do
  it twelve times.

  Using my object oriented approach, your code would be:

  [IN THE HEAD TAGS]
  var b = new jspopup();
  b.url('http://www.foobook.bar/cgi-bin/purchaseMe.cgi?bookid=1234');
  b.width(400);
  b.height(400);
  b.left(20);
  b.top(20);

  [TWELVE TIMES IN THE PAGE]
  <a href="#" onClick="b.popwin()">my book</a>

  This is a total of 678 characters AND if you have to edit the Pop-Up Window you
  can edit it all in one place instead of having to search through the page.

  As well, the object library gives you three ways of utilizing it. Not only
  can you do a common definition, you can also have full control by calling
  the object with different paramters for each link (over riding any common
  settings). Finally, this object allows a minimalist approach where all you
  need to provide is a URL and the library takes care of all the other settings
  automatically.

  Taking the library approach, you can place the *.js file on your server ONCE
  and then every other page on the server can references the library to create
  and utilize the object.

  POWERTIP:

  One of the powers of this library is a tool tip style popup called "powerTip".
  This is a fully customizeable HTML and CSS page area that pops up when you
  trigger the specified event. Wait till you see the samples, you'll be amazed
  what you can accomplish with this simple feature. Hours worth of programming
  and design can be compressed down to a few minutes of design and implementation.


  CODE GENERATOR:

  The library ships with a browser based Code Generator that takes a dynamic
  and interactive approach to creating and testing your Pop-Up windows and
  powerTips. The thing you will first notice about this is, surprise, surprise,
  unlike some others this one actually works!!


  With a very SLIGHT learning curve (actually less than other Pop-Up Window scripts)
  you can harness the flexibility, control and power of JavaScript Objects to
  create and manage your Pop-Up Windows and soon to be addictive powerTips.

  Read on, try the examples then try it for yourself. You'll be hooked!

  While this document seems like a LOT to absorb, it isn't. I am very verbose in
  my descriptions and provide a lot of information you won't normally need to
  worry about. I do this because I HATE weak documentation and one of the things
  my clients in the past always raved about was excellent documentation. So, read
  through this document once, then try creating a few Pop-Ups and powerTips of your
  own. That practice implementation will teach you all you REALLY need to know.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW IMPLEMENTATION - WHAT FILES TO USE.

  The files that you need to implement this with your web page are:

  jspopupobject.js


  If you are developing locally, on your desktop, simply save the files to the same
  project folder as the page you are implementing them on.

  For live implementation, FTP the files in ASCII mode (not Binary) to the web server.

  The browsers that these libraries support are:

  Opera 7+
  IE 5.5+ (Possibly some builds of IE5.0)
  Firefox 1.5+
  Netscape 8.0 (Possibly earlier versions as well)

  The library was developed in Opera and then ported to work in the other browsers.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  POP-UP WINDOW IMPLEMENTATION - LINKING TO THE FILES.

  The JavaScript Pop-Up library file has been written to support the four browsers above.
  There are no browser specific files.

  The code below shows you how to link to the files. Remember that this code MUST
  come before any other references to the JavaScript Pop-Up object you will be creating.

  Inside the <head></head> tags of the web page you are implementing the Pop-Up on,
  copy and past the following code inside the snippet blocks:

  [-- Start Snippet --]

<script language="JavaScript" src="jspopupobject.js"></script>

  [--  End Snippet --]


  If you are calling the library files from a different folder, make sure you change the "src"
  attribute to a relative path or full URL.

  **It would be preferable that you paste the above code BEFORE ANY OTHER IN-LINE JAVASCRIPT.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW IMPLEMENTATION - INSTANTIATING THE POP-UP OBJECT

  After implementing the above, we now move on to instantiating (creating) the JavaScript
  Pop-Up object.

  The following line of code is what we use to create the JavaScript Pop-Up object:

                    var objHandle = new jspopup();

  You do not pass any arguments to the constructor. Not that the object constructors name
  is slightly different from the library files name. Yes, this was on purpose.

  The above code should appear inside your <head></head> tags within JavaScript tags. In any case,
  this code MUST appear in the physical page BEFORE you attempt to load the Pop-Up Window.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW IMPLEMENTATION - INSTANTIATING MULTIPLE POP-UP OBJECTS

  This JavaScript library takes an OOP-ish approach to the JavaScript Pop-Up object creation
  and management. The benefit of this to you is that you can have multiple JavaScript Pop-Up
  objects on one page and have them operate independantly of one another. Please note that
  having multiple Pop-Up objects is NOT THE SAME as having multiple Pop-Ups. You can have
  multiple Pop-Ups all operating off of one object.

  For each of the JavaScript Pop-Up objects, you can specify a completely separate set of 
  properties and access their methods individually.

  To have more than one JavaScript Pop-Up on the page, simply instantiate each new JavaScript Pop-Up
  object with a different handle name. For example, I would instantiate the objects inside JavaScript
  tags inside the <head></head> tags of the page like this:


<script language="JavaScript1.2">
<!--
var bookpage = new jspopup();
var biopage = new jspopup();
var shippingInfo = new jspopup();
//-->
</script>


  I would now access methods individually for each JavaScript Pop-Up object simply by
  refering to the handle for the Pop-Up window in question (bookpage, biopage, shippingInfo
  are the object handles).

  **NOTE: You would only use the above if you had multiple links for each of the different types
          of Pop-Ups. Otherwise, you would instantiate only ONE object and make all your
          references to that one object handle.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  ULTIMATE TOOL TIP: POWERTIP

  A feature in this library is a Pop-Up Tooltip like feature. I call this "powerTip" because
  it is SOOOO much more flexible, faster, easier and useable than a regular old tooltip.

  This feature has default settings for font, background color, border and text color:

      Background Color:    #FFFFE0 (Light Yellow)
      Text & Border Color: #000000 (Black)
      Border Style:        solid
      Border Size:         2px
      Font:                Tahoma,Verdana,Helvetica,Sans-Serif
      Font Size:           10pt
      Padding:             3px

  There are two ways to over-ride these, covered further down.


  IMPLEMENTATION

  To use the powerTip feature of this library, you need only call the powerTip() method
  and supply two static and four dynamic arguments:

        objHandle.powerTip(this,event,[HTML Content],[Width],[Height],[Show Count]);

  You will note there is no LEFT or TOP argument. This is because, intrinsically, the
  powerTip appears relative to the mouse position when it is triggered. Therefore, you
  SHOULD only call this method inline in response to an HTML elements event (onClick,
  onmouseover, onmouseout, etc.). I would STRONGLY recommend you do NOT use the
  onmousemove event.

  The first two arguments "this" and "event" are special JavaScript keywords. They MUST
  appear in the order they are specified and they must NOT BE ENCLOSED in quotes.

  The HTML Content is the text content with or without HTML tags that you want to appear in
  the powerTip. Do NOT include normal page header or body tags. What appears here is
  any kind of HTML that would appear between the <body></body> tags on a regular web page.

  Example:

        objHandle.powerTip(this,event,'Click this image to see my new book',200,40,0);

        objHandle.powerTip(this,event,'<a href="orderpage.html">Click here</a> to go to Jim\'s order page!',200,40,0);


  If you have complex or lengthy HTML (more than you would normally write on one line) 
  then I would recommend you concantenate the HTML into a JavaScript variable
  and then pass that variable as the content argument, i.e.:

        In the <head></head> tags:

        var ordertip = '<a href="orderpage.html">';
        ordertip += 'Click here</a> to go to Jim\'s';
        ordertip += ' order page!';

        Then down in the page:

        <a href="#" onmouseover="objHandle.powerTip(this,event,ordertip,200,40,0);">some text here</a>



  DEFAULT SETTINGS OVER-RIDE:

  There is an optional seventh argument to the powerTip() method. This is a string representing
  normal CSS attributes. To understand this better, assume you were normally coding the
  "style" attribute of a <DIV> or <LAYER> element. The value of the "style" attribute is
  the same as the argument you would provide to this method.

  Example:
        objHandle.powerTip(this,event,'Do you want to know more?',125,30,0,'padding:10px;font-family:verdana,sans-serif;font-size:12pt;color:#FFFF00,background-color:#FF0000;font-weight:bold;');


  OVER-RIDING POSITIONING - IS IT GLARINGLY OBVIOUS YET?

  As stated above, the powerTip by default appears relative to the mouse position when it is
  triggered. However, by using this optional seventh argument you can specify the position where
  the powerTip will appear:

        objHandle.powerTip(this,event,'Do you want to know more?',125,60,0,'position:absolute;left:100px;top:200px;padding:10px;font-family:cartoon;font-size:12pt;color:#FFFF00,background-color:#FF0000;font-weight:bold;');

  **NOTE: If you are going to specify the left and/or top position, make sure you include the
          "position:absolute;" pair.

  If you want to simplify your coding and apply a set of CSS attributes for ALL powerTips on
  the page, then after you instantiate the Pop-Up Window object, you can specify the CSS 
  settings that will appear on all powerTips through the powerTipCSS() method:


        var objHandle = new jspopup();
        objHandle.powerTipCSS('padding:10px;font-family:cartoon;font-size:12pt;color:#FFFF00,background-color:#FF0000;font-weight:bold;');

  Having done this, you provide individual over rides through the seventh argument for individual
  powerTips on the page.


  HOW TO LAUNCH A POWERTIP:

  The most obvious use for a powerTip would be a mouseover event:

      <img src="handsomeMe.jpg" border="0" width="200" height="200" onmouseover="objHandle.powerTip(this,event,'My goodness I\'m a handsome devil, aren\'t I??',200,40,0)">


      <a onmouseover="objHandle.powerTip(this,event,'<b>Glossary: Hootenany</b><br><br>Non-ritualistic tribal celebration by Rednecks for no special reason',225,100,0)">Hootenany</a>


  SPECIFY HOW MANY TIMES A powerTip WILL LAUNCH:


  The sixth argument to this array, as you may have noticed, has been set to zero "0". This argument
  tells the library how many times to display this CONTENT as a powerTip. If you set the sixth argument
  to an integer higher than zero, the powerTip will only display that many times for this instance of
  the page. Next time the page is re-loaded, the counter starts over again at zero. Setting this argument
  to zero means that the tooltip will appear as many times as it's triggered, no limitation. Please note
  that this is a MANDATORY argument. YOU MUST PROVIDE A VALUE EVEN IF IT IS ZERO "0".

  So, to set the above example powerTip to display only three times, the method call would look like
  these examples:

        objHandle.powerTip(this,event,'Click this image to see my new book',200,40,3);

        objHandle.powerTip(this,event,'<a href="orderpage.html">Click here</a> to go to Jim\'s order page!',200,40,3);

        objHandle.powerTip(this,event,'Do you want to know more?',125,30,3,'padding:10px;font-family:cartoon;font-size:12pt;color:#FFFF00,background-color:#FF0000;font-weight:bold;');



  THINGS YOU CAN DO WITH powerTip:

      Besides mousover tips, you can also use powerTip to create context sensitive navigation menu's, glossary's,
      user instructions, non-modal dialogue boxes and special information windows. Once you apply your mind to it,
      you will find SO many uses for this feature you'll be giddy like a kid all sugared up on chocolate and
      Coca-Cola. See the samples page for ideas of what you can do.

      If you happen to do something particularly nifty with powerTip, send me a link so I can see it! I'm an
      excellent coder but a terrible visual designer  :-(

  CLOSING A POWERTIP;

      Clicking inside the powerTip will close it so please don't put form elements inside a powerTip. However,
      you can put a form BUTTON inside a powerTip to make it behave like a dialoge box. As well, if a person
      clicks then drags inside the powerTip, it will not close.

      Most web users are saavy enough to try clicking on or outside the powerTip window to close it. However,
      I usually try to include a word or image that will be evident for them to click on to close. You don't
      actually need any code with this other than to display it because, like I said, the powerTip will close
      onClick.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW - ***THE NOT SO SHORT BUT STILL VERY SIMPLE QUICK START GUIDE***

  Because this object allows un-used parameters to cascade elegantly, here are quick
  examples to use. If you have never worked with Pop-Up Windows or JavaScript objects,
  I would recommend that you read the full documentation first and then use this
  section afterwards as a quick refresher.

  These quick examples are all of the window launch type:    INSTANCE SPECIFICATION WINDOW

  All of these examples assume that you have linked to the library properly and that you have
  put the following line of code inside JavaScript tags inside the <head> tags of your page:

  var p = new jspopup();

  Here are your QUICK START examples:

    1.) URL only, window is centered and half the screen width wide and half the screen height tall:
        (This is also the Automated Launch Type)

        <a href="#" onClick="p.popwin('http://www.foobar.com');">Text Link</a>


    2.) URL and new window name, window is centered and half the screen width wide and half the screen height tall:
    
        <a href="#" onClick="p.popwin('http://www.foobar.com','bookWindow');">Text Link</a>


    3.) URL and no window name, window is 400px wide, 300px high and centered:
    
        <a href="#" onClick="p.popwin('http://www.foobar.com','',400,300);">Text Link</a>


    4.) URL and no window name, window is 400px wide, 300px high, is at the top of the screen and centered across
        the screen width:
    
        <a href="#" onClick="p.popwin('http://www.foobar.com','',400,300,'center',0);">Text Link</a>


    5.) You want a small window with a brief thank you for a submission that you generate dynamically from
        user filled in values on the page, in this case, the persons first name is in a form field called "name"

          function someNiftyFunctionOfYours() {
              ...fancy processing here...
              var message = '<html><head><title>Thanks!</title></head><body bgcolor="#FFFFFF"><b>Thanks '+document.getElementById('name').value+'!</b></body></html>';
              p.popwin(message,'thanksWindow',200,100);
          }


     6.) Simple Tool Tip content with default settings (black border and yellow background):

         ... <a href="#" onClick="p.powerTip(this,event,'Please make sure you read my biography!',125,50,0)">something about my bio</a> ...



                                     <+><+><+><+><+><+><+><+><+><+>



  These quick examples are all of the window launch type:    COMMON SPECIFICATION WINDOW

  All of these examples assume that you have linked to the library properly and that you have
  put the following lines of code inside JavaScript tags inside the <head> tags of your page:

  var b = new jspopup()
  b.url('http://www.foobar.com');
  b.width(400);
  b.height(300);
  b.top(100);
  b.left(200);
  b.name('bookWindow');


    1.) Now you can call this book link multiple times by copying this link:

        <a href="#" onClick="b.popwin();">Text Link</a>


    2.) Now you can call a window with the SAME settings but for a different page:

        <a href="#" onClick="p.popwin('http://www.foobar.com/somepage.html','someotherwindow');">Text Link</a>
        NOTE: The window size is inherited from the main object, the other settings are overwritten
              ONLY for this link

    3.) Now using the SAME object, you can have a link that completley over-rides the common settings,
        useful for that one-off link in a page of common links:

        <a href="#" onClick="p.popwin('http://www.foobar.com/thirdpage.html','specialpage',400,400,'center',0);">Text Link</a>



                                     <+><+><+><+><+><+><+><+><+><+>



  GUIDE TO INSTANCE SPECIFICATION WINDOW PARAMETERS


    objHandle.popwin([url],[name],[width],[height],[left],[top],[scrollbars],[location],[directories],[status],[menubar],[toolbar],[resizable]);

        Use the following values for these settings:

            [scrollbars]  To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [location]    To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [directories] To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [status]      To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [menubar]     To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [toolbar]     To use: 'yes' OR '1' - To NOT use: 'no', '0', '',
            [resizable]   To use: 'yes' OR '1' - To NOT use: 'no', '0', '',


        Here are examples of combination. For parameters in square brackets, refer to the appropriate section:

            objHandle.popwin([url],[name],[width],[height],[left],[top],1,0,1,0,1,0,1);
            objHandle.popwin([url],[name],[width],[height],[left],[top],'yes','no','yes','no','yes','no','yes');
            objHandle.popwin([url]);
            objHandle.popwin([url],[name]);
            objHandle.popwin([url],[name],[width],[height]);
            objHandle.popwin([url],'',[width],[height]);
            objHandle.popwin([url],[name],[width],[height]);
            objHandle.popwin([url],[name],'center',[height]);
            objHandle.popwin([url],[name],[width],'center');
            objHandle.popwin([url],[name],'center','center');



                                     <+><+><+><+><+><+><+><+><+><+>



  GUIDE TO powerTip PARAMETERS:

  Your powerTip always appears where the mouse is, unless you define it otherwise (see below);

    p.powerTip(this,event,'Here is my tip for you...',200,40,0);

  You would use it like this:

    <a onmouseover="p.powerTip(this,event,'Here is my tip for you. Don\'t take money from strangers!',200,40,0);">some text here</a>

  If you create an object to use for Pop-Up Windows, you can use the SAME OBJECT for your powerTips.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  POP-UP WINDOW IMPLEMENTATION - WINDOW LAUNCH TYPES - AUTOMATED WINDOW

  The automated window is used for quick and dirty pop ups. It accepts one argument,
  the URL of the page to load in the window. The window has no scrollbars, menubar,
  toolbar, directories, statusbar and is not resizable. The window launches to 1/2
  the width of the users screen, 1/2 the height of the users screen and is located
  in the upper left corner of the screen. Subsequent windows cascade down and to the
  left. In case you may want to access the window again from your own code, you CAN
  add a second argument which would be the window name.

  **NOTE: If you have a common specification defined for OTHER windows, the automated window
          WILL INHERIT SIZE AND POSITION from the common specification. If you do NOT want
          it to do this, you will have to create a new object (remember, that is only ONE
          line of code).

        objHandle.popwin([url],[WindowName]);

        Examples (These examples assume you instantiated an object higher in the page):

            objHandle.popwin('http://www.foo.com/somepage.html');

            objHandle.popwin('pageInSameDirectory.html', 'specialWin2');



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  POP-UP WINDOW IMPLEMENTATION - WINDOW LAUNCH TYPES - COMMON SPECIFICATION WINDOW

  Basically, a Common Specification Window is two or more windows sharing common
  properties or settings.

  A common specification window is the type you should use if you are going to have multiple
  Pop-Up Windows for the same target OR multiple Pop-Up Windows with the exact same settings.
  With the Common Specification Window you make all your settings through object properties
  and methods when you instantiate the object so that you do not have to make them
  as arguments to the pop-up trigger event (See Instance Specification Window). 

  In section (2)(iii) of this ReadMe you saw how to instantiate the object required for
  the pop-ups:

       var objHandle = new jsautopop();

  With the common specification window, we would now call the necessary methods to invoke the
  behaviour we want. All methods will be covered in the next few sections, however, you will
  see some of them here for the examples (don't worry about them for now):

        var objHandle = new jsautopop();
        objHandle.url('http://www.foo.com/mybook.html');
        objHandle.width(450);
        objHandle.height(300);
        objHandle.status();

  You could now have multiple links to the same Pop-Up window with this simple method call:

        objHandle.popwin();

        ...or more specifically...

        <a href="#" onclick="objHandle.popwin()">Text</a>

  Now, suppose you want to have a Pop-Up Window on the page targeting the preview of my new
  book. You can simply call the method with the new URL. It will over-ride the common specified
  URL for this ONE link and all other settings will still be used:

        objHandle.popwin('http://www.foo.com/mynewbook_preview.html');



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  POP-UP WINDOW IMPLEMENTATION - WINDOW LAUNCH TYPES - INSTANCE SPECIFICATION WINDOW

  After you have created the object, you can have Pop-Up Window links that specify
  properties and settings for the Pop-Up Windows, one link at a time.

  Of course, you still need to instantiate the Pop-Up Window object in the header of your
  page, but then each link gets it's full specification of settings within each call
  to popwin(). This will be recognizeable to you from most other peoples implementations
  of Pop-Up Window codes.

  The method popwin() can accept up to thirteen arguments:


        objHandle.popwin([URL],[WindowName],[Width],[Height],[Left],[Top],[Scrollbars],[Location],[Directories],[Status],[Menubar],[Toolbar],[Resizable]);

  You can include all of the arguments or some of the arguments, you only need to specify
  as many as the last one to the right you want to set.

            [URL]        : Fully qualified URL, name of a document in the same directory OR
                           full HTML content generated on the fly.

            [WindowName] : Optional, pass as a null value with empty quotes if you don't
                           care to name the window.

            [Width]      : Integer value representing the Pop-Up Windows width in pixels

            [Height]     : Integer value representing the Pop-Up Windows height in pixels

            [Left]       : Integer value representing the Pop-Up Windows position in pixels from
                           the left side of the screen OR the value 'center' or 'default' in quotes.

            [Top]        : Integer value representing the Pop-Up Windows position in pixels from
                           the top of the screen OR the value 'center' or 'default' in quotes.

            **NOTE: If you are providing a setting for any of these values, you MUST provide a setting
                    for the ones to the LEFT or ABOVE in this list.

            [Scrollbars]           : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Location]             : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Directories]          : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Status]               : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Menubar]              : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Toolbar]              : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF
            [Resizable]            : Boolean value, '1' or 'yes' for ON, '0' or 'off' for OFF. Default is OFF

            ***See the section below titled: BROWSER INCONSISTENCIES: WELCOME TO THE INTERNET


            Here is a visual reference to how you can combine, remove and "cascade" settings.

            objHandle.popwin([URL],[name],[width],[height],[left],[top],1,0,1,0,1,0,1);
            objHandle.popwin([URL],[name],[width],[height],[left],[top],'yes','no','yes','no','yes','no','yes');
            objHandle.popwin([URL],'',[width],[height],[left],[top],0);
            objHandle.popwin([URL],[name],[width],[height],[left],[top],'no');
            objHandle.popwin([URL]);
            objHandle.popwin([URL],[name]);
            objHandle.popwin([URL],[name],[width],[height]);
            objHandle.popwin([URL],'',[width],[height]);
            objHandle.popwin([URL],[name],[width],[height]);
            objHandle.popwin([URL],[name],'center',[height]);
            objHandle.popwin([URL],[name],[width],'center');
            objHandle.popwin([URL],[name],'center','center');


  Here are some examples of actual method calls:


        objHandle.popwin('foo.html','BioPage',300,500,'','',0);

        objHandle.popwin('recentpic.html','',200,200,'center','center',0);

        objHandle.popwin('http://www.foo.com/cgi-bin/account.pl','AccountWindow',500,500,'center',100,1,0,0,0,0,0,1);

        objHandle.popwin('http://www.foo.com/cgi-bin/account.pl','AccountWindow',500,500,'center',100,'yes','no','no','no','no','no','yes');



  RESERVED WORD: "all"

  There is a shortcut to turning on ALL of the settings (scrollbars, location, etc.). Instead of providing a
  true or false value to the Scrollbars argument, specify the word "all" in quotes and all of the settings
  will be turned on. You won't need to specify any more of the arguments. This will give you a fully functional
  browser window sized to your specification and located where you want it.

  Examples:

        objHandle.popwin('foo.html','BioPage',300,500,'','','all');

        objHandle.popwin('recentpic.html','',200,200,'center','center','all');

        objHandle.popwin('http://www.foo.com/cgi-bin/account.pl','AccountWindow',500,500,'center',100,'all');



  SUMMARY:

    The instance specification type of Pop-Up link provides no real savings for you over other Pop-Up window
    codes. However, if you combine the common specification for the attributes and settings that your
    windows share, then use this method to set the URL and size for individual windows, then you WILl be
    harnessing the power of this library.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  SPECIFYING A URL FOR THE WINDOW TO LOAD OR CUSTOM HTML CONTENT GENERATED ON THE FLY

  The first argument to the popwin() method is ALWAYS a URL or null value (two quotes
  withi nothing between them:  ''   ).

  URL:
        As with any HTML link, the URL can be simply the name of a document in the same
        directory as the one the page with the link resides in, i.e.:    somepage.html

        It can also be a relative URL:   '/books/somebook.html'  ~or~   '../../biopage.html'

        If the target page is not on the same domain, it will have to be a full URL:
            'http://www.foo.com/something.html';

        DO NOT forget the 'http://' at the start of the URL!!


  CUSTOM HTML CONTENT:
        You also have the option of generating custom HTML content on the fly to create
        the Pop-Up page. Let's suppose you use a persons first name and e-mail address
        to compose a thank you Pop-Up Window on submit, before the page actually submits
        to the server. Here is an example of how you would compose that custom HTML content:


        var thanksMessage = '<html><head><title>Thanks +'document.getElementById('firstname').value+'</title>';
        thanksMessage += '<link rel="stylesheet" href="mysite.css" type="text/css">\n';
        thanksMessage += '</head><body><br><font class="thanksC">Thank you ';
        thanksMessage += document.getElementById('firstname').value+'!<br><br>A copy of your order\n';
        thanksMessage += 'has been sent to you at '+document.getElementById('email').value;
        thanksMessage += '<br><br>Please shop again!</font></body></html>';

        Now that your message has been composed, the function that created it can call the
        popwin() method to display it like this:

        objHandle.popwin(thanksMessage,'thanksWin',125,80);

        In the real world, you would put the concantenation of the message inside the <head></head>
        tags of your page. Then you would place the call to popwin() as the attribute of an event
        in an HTML element like this:

            <a href="#" onclick="objHandle.popwin(thanksMessage,'thanksWin',125,80)">Text</a>

            <img src="something.jpg" onclick="objHandle.popwin(thanksMessage,'thanksWin',125,80)" border="0" height="100" width="200">


        If you are going to have multiple Pop-Up links with the SAME CUSTOM HTML then you can
        specify that ONCE in the common specification format with the method htmlContent(). As
        an example, using the above message concantenation:

        objHandle.htmlContent(thanksMessage);

        Then the above two examples would look like this:

            <a href="#" onclick="objHandle.popwin('','thanksWin',125,80)">Text</a>

            <img src="something.jpg" onclick="objHandle.popwin('','thanksWin',125,80)" border="0" height="100" width="200">

        Of course, the best way to do it would be to set the window name and dimensions
        via the proper method calls (as in common specification window) and then call
        this method with no arguments.

        Then all popwin() method calls with NO first argument specified, will use the value
        you set in htmlContent() OR the value you set in url().


        Do not attempt to pass raw HTML in the first argument. Always assign that HTML content
        to a JavaScript variable and then assign that variable as the first argument.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  HOW TO LAUNCH THESE WINDOWS: TEXT LINK, BUTTON, IMAGE, FUNCTION CALL

  The Pop-Up Window object launches a window, as we have seen, with a call to the method popwin().

  This can be done any way you launch/trigger a link or JavaScript function. The most common
  events that will be used IN ADDITION TO JAVASCRIPT FUNCTION CALLS are:

        onClick
        onMouseOver
        onMouseOut

  Here are examples for text links, buttons and images:


        onClick:

            <a href="#" onclick="objHandle.popwin('http://www.foo.com/somepage.html')">Text Link</a>

            <img src="/images/myHandsomeMug_small.jpg" border="0" width="200" height="200" onClick="objHandle.popwin('/images/myHandsomeMug_big.jpg','mug',400,400)">

            <input type="button" value="Show Pics" width="80" onClick="objHandle.popwin('pics.html')">

        onMouseOver or onMouseOut

            <a href="#" onmouseover="objHandle.popwin('http://www.foo.com/somepage.html')">Text Link</a>

            <img src="/images/myHandsomeMug_small.jpg" border="0" width="200" height="200" onmouseout="objHandle.popwin('/images/myHandsomeMug_big.jpg','mug',400,400)">

            <input type="button" value="Show Pics" width="80" onmouseover="objHandle.popwin('disclaimer.html')">



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW IMPLEMENTATION - SETTING PARAMETERS



    a.) Naming the window

      If you have other code that may access the same Pop-Up Window, then you should name the window.
      If you do not specify a name, the library will generate it's own name for the window.

      The method to set a name is:

          objHandle.name('winNameHere');

      To set the value inline, it is the second argument to the popwin() method:

          objHandle.popwin(url,[NAME],width,height,left,top,scrollbars,location,directories,status,menubar,toolbar,resizable);

      If you chooose not to assign a name, then you must provide a pair of empty quotes in it's place:  ''
      Do not leave the argument blank.



    b.)  Setting window Width

      The value for the width of the window is expressed as an integer. Do NOT include any 'px' at the
      end of the value. The Width is optional, if not provided, the library will calculate 1/2 the screen width.

      The method to set the width is:

          objHandle.width(100);

      To set the value inline, it is the third argument to the popwin() method:

          objHandle.popwin(url,name,[WIDTH],height,left,top,scrollbars,location,directories,status,menubar,toolbar,resizable);

      If you are going to enter an argument to the RIGHT of the WIDTH argument, then you MUST provide
      an argument for WIDTH.

      ***NOTE: The width refers to the OUTSIDE width of the new window.

      SECURITY WARNING:  IE, Firefox and NN will NOT allow you to open a window less than 100px wide.
                         If you specify a smaller size, the window will automatically be re-sized to
                         100px wide.



    c.)  Setting window Height

      The value for the height of the window is expressed as an integer. Do NOT include any 'px' at the
      end of the value. The Height is optional, if not provided, the library will calculate 1/2 the screen height.

      The method to set the height is:

          objHandle.height(100);

      To set the value inline, it is the fourth argument to the popwin() method:

          objHandle.popwin(url,name,width,[HEIGHT],left,top,scrollbars,location,directories,status,menubar,toolbar,resizable);

      If you are going to enter an argument to the RIGHT of the HEIGHT argument, then you MUST provide
      an argument for HEIGHT.

      ***NOTE: The height refers to the OUTSIDE height of the new window.

      SECURITY WARNING:  IE, Firefox and NN will NOT allow you to open a window less than 100px high.
                         If you specify a smaller size, the window will automatically be re-sized to
                         100px high.



    d.)  Setting window Left position

      The value for the LEFT position of the window, the X co-ordinate, is expressed as an integer representing
      the distance in pixels for the left side of the Pop-Up Window from the left side of the screen. You may
      also optionally specify the case sensitive keyword 'center', in quotes, which will position the Pop-Up
      window in the center of the screen along the X-axis. If you don't want to specify any value and use
      the default location, then do not include this method in your code.

      If you do not specify a value for the left position, the library will place the first unspecified window
      in the upper left corner of the screen and then cascade subsequent ones below and to the right.

      The method to set the left position is:

          objHandle.left(50);
          objHandle.left('center');

      To set the value inline, it is the fifth argument to the popwin() method:

          objHandle.popwin(url,name,width,height,[LEFT],top,scrollbars,location,directories,status,menubar,toolbar,resizable);

      **IMPORTANT NOTE:  You absolutely MUST supply an argument for this value when using inline code.
                         If you do not specify a value for the position and do not specify "center"
                         then you must use the keyword "default" in quotes. If you do not provide this
                         argument, the link will not work.



    e.)  Setting window Top position

      The value for the TOP position of the window, the Y co-ordinate, is expressed as an integer representing
      the distance in pixels for the top edge of the Pop-Up Window from the top edge of the screen. You may
      also optionally specify the case sensitive keyword 'center', in quotes, which will position the Pop-Up
      window in the center of the screen along the Y-axis.

      If you do not specify a value for the top position, the library will place the first unspecified window
      in the upper left corner of the screen and then cascade subsequent ones below and to the right.

      The method to set the top position is:

          objHandle.top(50);
          objHandle.top('center');

      To set the value inline, it is the sixth argument to the popwin() method:

          objHandle.popwin(url,name,width,height,left,[TOP],scrollbars,location,directories,status,menubar,toolbar,resizable);

      **IMPORTANT NOTE:  You absolutely MUST supply an argument for this value when using inline code.
                         If you do not specify a value for the position and do not specify "center" then
                         you must use the keyword "default" in quotes. If you do not provide this argument,
                         the link will not work.

      BROWSER CONSISTENCY: While all browsers calculate the TOP position from the top of the screen, you
                           need to know that Opera will NOT allow any Pop-Up Window to open or move ABOVE
                           the tabbed window area (to cover the MDI). That is, they can not cover the toolbars
                           at the top of the main browser window.



    f.)  Setting window to Center on screen

      As seen in (d) and (e), you can set the LEFT or TOP value to 'center'. If you are specifying the
      settings inline, then set both of the values to 'center'.

      If you are setting common specifications, you can shorthand this with one call to the method:

          objHandle.center();

      **WARNING: Unless your inline popwin() method calls say otherwise, all windows will open up
                 in the center of the screen ON TOP OF ONE ANOTHER!

                 Setting a value in the methods left() and top() will be ignored if you also call
                 the center() method.



    g.)  Providing scrollbars in new window

      To turn on scrollbars in the Pop-Up Window, you can call the method scrollbars() for common
      specification settings OR provide the value '1' or 'yes' to the seventh argument of the
      popwin() method:

          objHandle.scrollbars();

          objHandle.popwin(url,name,width,height,left,top,['1' or 'yes'],location,directories,status,menubar,toolbar,resizable);


      BROWSER CONSISTENCY: Scrollbars works in all browsers, for Opera users it's optional if they
                           have a scroll wheel or similar on their mouse.

      RESERVED WORD: "all"
          There is a shortcut to turning on ALL of the settings (scrollbars, location, etc.). Instead
          of providing a true or false value to the Scrollbars argument, specify the word "all" in
          quotes and all of the settings will be turned on. You won't need to specify any more of the
          arguments. This will give you a fully functional browser window sized to your specification
          and located where you want it.


    h.) Providing location field (URL field) in new window

      To turn on the location field (URL field) in the Pop-Up Window, you can call the method
      location() for common specification settings OR provide the value '1' or 'yes' to the
      eigth argument of the popwin() method:

          objHandle.location();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,['1' or 'yes'],directories,status,menubar,toolbar,resizable);


      BROWSER CONSISTENCY: Work in IE, Firefox and NN. It only works in Opera if the window width
                           is equal to or greater than 400px wide. As well, in Opera the location
                           field and Toolbar appear together with this setting turned on.



    i.) Providing Diretories (Netscape only) in new window

      To turn on directories in the Pop-Up Window, you can call the method directories() for common
      specification settings OR provide the value '1' or 'yes' to the ninth argument of the
      popwin() method:

          objHandle.directories();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,location,['1' or 'yes'],status,menubar,toolbar,resizable);


      BROWSER CONSISTENCY: Works in Netscape and Firefox. I've heard rumblings it may be supported in IE in the future.



    j.) Providing Status bar in new window

      To turn on the status bar in the Pop-Up Window, you can call the method status() for common
      specification settings OR provide the value '1' or 'yes' to the tenth argument of the
      popwin() method:

          objHandle.status();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,location,directories,['1' or 'yes'],menubar,toolbar,resizable);


      BROWSER CONSISTENCY: Works in IE and NN. In Firefox it is always ON and in Opera it is always OFF because
                           the parent container window already has the status bar.



    k.) Providing Menubar in new window


      To turn on the menu bars in the Pop-Up Window, you can call the method menubar() for common
      specification settings OR provide the value '1' or 'yes' to the eleventh argument of the
      popwin() method:

          objHandle.menubar();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,location,directories,status,['1' or 'yes'],toolbar,resizable);


      BROWSER CONSISTENCY: Works in IE, Firefox and NN. In Opera it is always OFF because
                           the parent container window already has the menubar.



    l.) Providing Toolbar in new window

      To turn on toolbars in the Pop-Up Window, you can call the method toolbar() for common
      specification settings OR provide the value '1' or 'yes' to argument number twelve of the
      popwin() method:

          objHandle.toolbar();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,location,directories,status,menubar,['1' or 'yes'],resizable);


      BROWSER CONSISTENCY: Works in IE, Firefox and NN. See "Location Setting" for Opera users.



    m.) Allowing window to be resizable

      To allow the Pop-Up Window to be re-sized by the user, you can call the method resizable() for
      common specification settings OR provide the value '1' or 'yes' to argument number thirteen of
      the popwin() method:

          objHandle.resizable();

          objHandle.popwin(url,name,width,height,left,top,scrollbars,location,directories,status,menubar,toolbar,['1' or 'yes']);


      BROWSER CONSISTENCY: Works in IE, Firefox and NN. In Opera, Pop-Up Windows are ALWAYS resizable.



    n.) Shortcut to provide all settings

      As we saw in "a.) Naming the window" of this section, you can turn on all the settings with use
      of the keyword "all" in the second argument to popwin() for inline calls.

      If you are creating a Common Specification, then you can also shorthand this with a call to the
      the following method:

          objHandle.all();



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POP-UP WINDOW IMPLEMENTATION - RETRIEVING THE NAME OF THE LAST OPENED WINDOW

  As stated in the section above, if you do not provide a name for the window, the library
  will automatically assign a name. It is possible to retrieve the name using the
  fetchName() method. This method will always return the name of the last Pop-Up Window
  that was opened through the specified object handle of the library. One simple use for
  this would be to see if users opened a "terms and conditions" window immediately before
  clicking a submit button. The syntax for this method is:

      var lastWinName = objHandle.fetchName();


  If no window has been opened, a value of zero '0' will be returned.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  POPUP WINDOW PROPERTIES NOT SUPPORTED IN THIS OBJECT

  All the documentation you will find quite clearly states that MSIE4 and NN4.0+ supports
  the following settings for a pop-up window. Unfortunately, MISE4 is hard to find nowadays
  and the newest Netscape browser (v8 as of this writing), no longer supports the first
  two of them. This opinion is based on testing IE6.0 and NN8.0 on WinXP.

  The reason the first setting is no longer supported is for user security reasons. The rest,
  well, like most things the browser companies do, who knows??

    alwaysLowered
    alwaysRaised
    dependent     //This actually works in Firefox 1.5 and earlier versions of NN.
    hotkeys


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  BROWSER INCONSISTENCIES SUMMARY: WELCOME TO THE INTERNET

  The new window settings behave differently in different browsers. So that you are
  aware, here is how they behave in the big four, based on testing:

    scrollbars   IE: works,  NN: works,  Firefox: works,      Opera: works, (optional if user has mouse scroll button)

    location     IE: works,  NN: works,  Firefox: works,      Opera: works only if window width is >= 400px
                                                                     Location and Toolbar appear together

    toolbar      IE: works,  NN: works,  Firefox: works,      Opera: See "location" setting

    directories  IE: no,     NN: works,  Firefox: works,      Opera: No 

    status       IE: works,  NN: works,  Firefox: always on,  Opera: Always off

    menubar      IE: works,  NN: works,  Firefox: works,      Opera: Always off

    resizable    IE: works,  NN: works,  Firefox: works,      Opera: Always Resizable


    (For those of you upset that I don't include Safari and call it the Big Five, sorry.)


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  FULL PROPERTY AND METHOD LIST

  There are no properties for you to set with this object, only methods to be called:



  popwin() METHODS:

  objHandle.url('[Document Name || URL])

  objHandle.name('[WindowName]');

  objHandle.width([Integer value]);

  objHandle.height([Integer value]);

  objHandle.left([Integer value]);

  objHandle.top([Integer value]);

  objHandle.center();      //No arguments

  objHandle.scrollbars();  //No arguments: Default is Off

  objHandle.location();    //No arguments: Default is Off

  objHandle.directories(); //No arguments: Default is Off

  objHandle.status();      //No arguments: Default is Off

  objHandle.menubar();     //No arguments: Default is Off

  objHandle.toolbar();     //No arguments: Default is Off

  objHandle.resizable();   //No arguments: Default is ON

  objHandle.all();         //No arguments

  objHandle.htmlContent('[HTML Content Generated On The Fly]');

  objHandle.fetchName();   //No arguments

  objHandle.popwin([url],[name],[width],[height],[left],[top],[scrollbars],[location],[directories],[status],[menubar],[toolbar],[resizable]);




  powerTip() METHODS:

  objHandle.powerTipCSS('[String representing typical CSS attribute:value pairs]');

  objHandle.powerTip(this, event, '[Custom HTML content]',[Width],[Height],[ShowCount],'[Optinal CSS Over-Rides]');



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  OBJECT GENERATOR UTILITY

  Included in the ZIP file is an HTML document called "popwin_generator.html". Call this in your
  browser for an intuitive and easy to use generator for both Pop-Up Windows and powerTips.

  If you are using custom HTML content for your window/powertip that is more than a hundred or
  so characters, I'd recommend you generate the code with only some marker text, like "INSERT
  HERE" and then add your custom HTML code OR a JavaScript variable afterwards. It will make
  the copy and paste process simpler. That doesn't mean you CAN'T add it in the generator though,
  just a tip.

  Oh, yeah, unlike SOME JavaScript generators out there, it works in all four browsers
  listed in this document ;-))



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  9.) Samples of instantion, property assignment and launch codes


  In the ZIP file there are some example files. Unzip all contents to the SAME folder on
  your hard drive, then in your browser of choice, view any of the following pages:

  example_pops.html

  example_glossary.html

  Any other HTML pages in the zip file are simply for use demonstrating Pop-Up Windows
  and do not need to be viewed directly.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  DEBUGGING

  This object library has been tested extensively in Opera 9.0, IE6.0, Firefox 1.5 and
  Netscape 8.0. If you call your page and encounter problems with the Pop-Up/powerTip
  operation, then the following suggestions will help you find the problem. Based on
  the above tests, the library should function well in IE5+, Opera 6+, NN4+ and
  Firefox 1.5+.  I don't have access to Safari or a Mac but I haven't used any code
  those browsers don't understand. Feedback would be appreciated.

  >> Check all methods that are called. All methods MUST end in parenthesis whether or not
     arguments are passed to it. For example:

     objHandle.scrollbars;   //Not so good
     objHandle.scrollbars();   //MUCH BETTER!


  >> Arguments improperly assigned for their native type. What this means is that if you
     are passing an argument as an integer, you can just type the value. If you are passing
     an argument that is a string, you must enclose that in quotes. If you are passing an
     argument as a array (reference), you must NOT enclose it in quotes. Here are some examples:

     objHandle.url(someNiftyPage.html);    //This is VERY bad. JavaScript will crash in the browser
     objHandle.url('someNiftyPage.html');  //Martha says, "This is a very good thing"

     objHandle.width('200');    // Not Acceptable
     objHandle.width(200);      // Preferred

  >> Empty arguments. If you are not passing an argument to a method (inside the brackets) then make
     sure you pass SOMETHING. Either a zero (if it won't do something you don't want it to) or pass
     a null string, two quotes with nothing (not even a space) between them.

     objHandle.popwin('page.html'),,200,200);   //This is bad, the link/event won't work at all.
     objHandle.popwin('page.html'),'',200,200); //The correct way to pass no value.


  >> Typos are easy. If you have assigned a property or argument correctly according to it's native type
     then your next check should be that you have typed all property and method names correctly. It's 
     easy to overlook. What I recommend (and this works) is to start at the bottom of the list of methods
     you have typed and work you way upwards, reading each method and handle name backwards (from right
     to left). This will help make typo's jump out at you.

  >> Wrong object handle used. When you have more than one Pop-Up Window/powerTip object on a page. It is
     quite easy to use the wrong object handle when setting a property or calling a method. Check your
     object handle name for the correct name AND for typo's while you are checkign your speling on the
     methods.

  >> Browser Version. If you are using Internet Explorer 5.0, that is probably the cause of the problems.
     Update your version of IE and try again.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  SUPPORT

  If you have run some debugging, are not using Internet Explorer 5.0 and have a headache
  from beating your head on the wall, you can contact me for assistance. I will require
  that you send me the page you are using the Pop-Up Window object on as well as any other
  CSS or JS files needed for the page (unless you link to them with a full URL in the
  page).

  Once I have rectified the problem, I will notify you. Payment of $40 per hour (one hour
  minimum ) is required before the solution will be released. In almost all cases, the
  solution will be within that hour.

  If I am not able to find a solution for what you are encountering then you will be
  notified and YOU WILL NOT OWE ME ANYTHING. I do not accept any payment unless I can
  provide a working solution. If I estimate that my time will exceed one hour, then you
  will be notified BEFORE I commence any work.

  I do offer limited email support for this library as it is free, easy to implement and
  well documented. Any mistakes that occur which prevent it from operating are most
  likely yours. If you are using it for a mission critical application and MUST get it
  running but can't figure it out, I will offer custom integration per the terms above.

  Note that I must limit my response to only TWO issues per user.

  PLEASE CONTACT ME AT:      james_melanson@yahoo.ca

            ***If you have a feature you would like to see added, let me know!



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

