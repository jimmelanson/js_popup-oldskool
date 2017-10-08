/*
       Created 2007, James Melanson, jmelanson1965@gmail.com

       JSPopupObject     2007.01.13


    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.


*/

//Reguired for library to work, do not remove or alter
var foo = 1;

//--------------------------------

var JmOoJpJpwNumVal = 0;

function jspopup () {
  JmOoJpJpwNumVal++;
  this.id = JmOoJpJpwNumVal;

  document.write('<div id="JmOoJpJpwNumVal_nodal'+JmOoJpJpwNumVal+'" style="display:none;position:absolute;left:0px;top:0px;" onClick="this.style.display=\'none\'"></div>');
  this.nodalId = 'JmOoJpJpwNumVal_nodal'+JmOoJpJpwNumVal;

  this.windowOffsetX = 0;
  this.windowOffsetY = 0;
  this.windowCounter = 0;
  this.windowIteration = 0;

  this.defaultName = 'JmOoJpJpwNameVal';

  this.setUrl = new String();
  this.setName = new String();
  this.setWidth = new Number();
  this.setHeight = new Number();
  this.setLeft = new Number();
  this.setTop = new Number();

  this.setCenter = 0;
  this.setScrollbars = 0;
  this.setLocation = 0;
  this.setDirectories = 0;
  this.setStatus = 0;
  this.setMenubar = 0;
  this.setToolbar = 0;
  this.setResizeable = 0;
  this.setContent = new String();

  this.ptcss = ''; //Do not instantiate a string object for this
  this.ptcounter = new Array();

  this.url = function() { if(arguments[0]) {this.setUrl = arguments[0];} }
  this.name = function() { if(arguments[0]) {this.setName = arguments[0];} }
  this.width = function() { if(arguments[0]) {this.setWidth = arguments[0];} }
  this.height = function() { if(arguments[0]) {this.setHeight = arguments[0];} }
  this.left = function() { if(arguments[0]) {this.setLeft = arguments[0];} }
  this.top = function() { if(arguments[0]) {this.setTop = arguments[0];} }
  this.center = function() { this.setCenter = 1; }
  this.scrollbars = function() { this.setScrollbars = 1;}
  this.location = function() { this.setLocation = 1; }
  this.directories = function() { this.setDirectories = 1; }
  this.status = function() { this.setStatus = 1; }
  this.menubar = function() { this.setMenubar = 1; }
  this.toolbar = function() { this.setToolbar = 1; }
  this.resizable = function() { this.setResizeable = 1; }
  this.all = function() {
    this.setCenter = 1;
    this.setScrollbars = 1;
    this.setLocation = 1;
    this.setDirectories = 1;
    this.setStatus = 1;
    this.setMenubar = 1;
    this.setToolbar = 1;
    this.setResizeable = 1;
  }
  this.htmlContent = function() { if(arguments[0]) {this.setContent = arguments[0]; } }
  this.fetchName = function() { if(this.lastName) { return this.lastName; } else { return '0'; } }
  this.popwin = function() {
    if(arguments[6] == 'all') {
      this.all();
      arguments[6] = 1;
      arguments[7] = 1;
      arguments[8] = 1;
      arguments[9] = 1;
      arguments[10] = 1;
      arguments[11] = 1;
      arguments[12] = 1;
    }
    var useUrl = new String();
    if(arguments[0] != undefined) {
      if(arguments[0].indexOf('<') >= 0) {
        this.setContent = arguments[0];
        arguments[0] = '';
      } else {
        if(arguments[0]) {
          useUrl = arguments[0];
        } else {
          useUrl = this.setUrl;
        }
      }
    } else {
      if(this.setUrl) {
        useUrl = this.setUrl;
      }
    }
    if(!arguments[1] && this.setName) {
      arguments[1] = this.setName;
    }
    if(!arguments[2] && this.setWidth) {
      arguments[2] = this.setWidth;
    }
    if(!arguments[3] && this.setHeight) {
      arguments[3] = this.setHeight;
    }
    if(!arguments[4] && this.setLeft) {
      arguments[4] = this.setLeft;
    }
    if(!arguments[5] && this.setTop) {
      arguments[5] = this.setTop;
    }
    this.windowIteration++;
    this.windowCounter++;
    var winString = new String();
    if(arguments[1] == undefined) {
      arguments[1] = this.defaultName + this.id + this.windowCounter.toString();
    } else {
      if(arguments[1] == '') {
        arguments[1] = this.defaultName + this.id + this.windowCounter.toString();
      }
    }
    this.lastName = arguments[1];
    if(arguments[2] <= 0) {
      arguments[2] = parseInt(screen.width / 2);
    }
    winString += 'width='+arguments[2];
    if(arguments[3] <= 0) {
      arguments[3] = parseInt(screen.height / 2);
    }
    winString += ',height='+arguments[3];
    if( (arguments[4] == 'center') || (this.setCenter == 1) ) {
      arguments[4] = (screen.width) ? (screen.width-arguments[2]) / 2 : 100;
    } else {
      if(arguments[4] == 'default') {
        arguments[4] = '';
      }
    }
    if( (arguments[5] == 'center') || (this.setCenter == 1) ) {
      arguments[5] = (screen.height) ? (screen.height-arguments[3]) / 2 : 100;
    } else {
      if(arguments[5] == 'default') {
        arguments[5] = '';
      }
    }
    if(!arguments[5]) {
      if(arguments[5] != 0) {
        if( ((this.windowIteration * 20) + this.windowOffsetX + arguments[3]) > screen.height) {
          this.windowOffsetX += 20;
          this.windowOffsetY += 20;
          this.windowIteration = 1;
        }
        arguments[5] = (this.windowIteration * 20) + this.windowOffsetX;
      }
    }
    if(navigator.appName=='Opera') {
      if(arguments[5] > 160) {
        arguments[5] -= 160;
      }
    }
    winString += ',top='+arguments[5]+',screenY='+arguments[5];
    if(!arguments[4]) {
      if(arguments[4] != 0) {
        if( ((this.windowIteration * 20) + this.windowOffsetY + arguments[2]) > screen.width) {
          this.windowOffsetX += 20;
          this.windowOffsetY += 20;
          this.windowIteration = 1;
        }
        arguments[4] = (this.windowIteration * 20) + this.windowOffsetY;
      }
    }
    winString += ',left='+arguments[4]+',screenX='+arguments[4];
    if(arguments[6] == undefined) {
      arguments[6] = this.setScrollbars;
    }
    winString += ',scrollbars='+arguments[6];
    if(arguments[7] == undefined) {
      arguments[7] = this.setLocation;
    }
    winString += ',location='+arguments[7];
    if(arguments[8] == undefined) {
      arguments[8] = this.setDirectories;
    }
    winString += ',directories='+arguments[8];
    if(arguments[9] == undefined) {
      arguments[9] = this.setStatus;
    }
    winString += ',status='+arguments[9];
    if(arguments[10] == undefined) {
      arguments[10] = this.setMenubar;
    }
    winString += ',menubar='+arguments[10];
    if(arguments[11] == undefined) {
      arguments[11] = this.setToolbar;
    }
    winString += ',toolbar='+arguments[11];
    if(arguments[12] == undefined) {
      arguments[12] = this.setResizable;
    }
    winString += ',resizable='+arguments[12];
    var newWin;
    if(useUrl.length > 0) {
      newWin = window.open(useUrl, arguments[1], winString);
      newWin.focus();
    }
    else if(this.setContent.length > 0) {
      newWin = window.open('', arguments[1], winString);
	  var htmlContent = newWin.document;
	  htmlContent.write(this.setContent);
	  htmlContent.close();
      newWin.focus();
    } else {
      window.alert('No destination specified.\n\nNo content specified.\n\nPlease contact the web master!');
    }
    return false;
  }
  this.powerTipCSS = function() {
    if(arguments[0]) {
      this.ptcss = arguments[0];
    }
  }
  this.powerTipCount = function() {
    if(arguments[0]) {
      this.ptcount = arguments[0];
    } else {
      this.ptcount = 0;
    }
  }
  this.powerTip = function() {
    //arguments[0] = this
    //arguments[1] = event
    //arguments[2] = content
    //arguments[3] = width
    //arguments[4] = height
    //arguments[5] = show X many times
    //arguments[6] = toolTipCSS Override
    if(arguments[2] && arguments[3] && arguments[4]) {
      if(arguments[5]) {
        if(arguments[5] > 0) {
          if(this.ptcounter[arguments[0]]) {
            this.ptcounter[arguments[0]] += 1;
          } else {
            this.ptcounter[arguments[0]] = new Number(1);
          }
          if(this.ptcounter[arguments[0]] > arguments[5]) {
            return false;
          }
        }
      }
      var avWidth = new Number(0);
      var avHeight = new Number(0);
      this.powertipX = 0;
      this.powertipY = 0;
      if (navigator.appName=="Netscape") {
        avWidth = window.innerWidth-16;
        avHeight = window.innerHeight-16;
      }
      if (navigator.userAgent.indexOf('Opera') != -1) {
        avWidth = document.body.clientWidth-20;
        avHeight = document.body.clientHeight-20;
      }
      if (navigator.appName.indexOf("Microsoft")!=-1) {
        avWidth = document.body.offsetWidth-20;
        avHeight = document.body.offsetHeight-20;
        this.powertipX = arguments[1].x
        this.powertipY = arguments[1].y
      } else {
        this.powertipX = arguments[1].pageX;
        this.powertipY = arguments[1].pageY;
      }
      if( (this.powertipX + parseInt(arguments[3])) > avWidth) {
        this.powertipX = avWidth - parseInt(arguments[3]);
      }
      document.getElementById(this.nodalId).innerHTML = arguments[2];
      document.getElementById(this.nodalId).style.left = this.powertipX+'px';
      document.getElementById(this.nodalId).style.top = this.powertipY+'px';
      document.getElementById(this.nodalId).style.width = arguments[3]+'px';
      document.getElementById(this.nodalId).style.height = arguments[4]+'px';
      var cssString = '';
      if((typeof arguments[6] == 'string') && (arguments[6].length > 0) ) {
        cssString = arguments[6];
      }
      else if(this.ptcss != '') {
        cssString = this.ptcss;
      }
      if(cssString) {
        if(cssString.indexOf(':') > 0) {
          var args = new Array();
          if(cssString.indexOf(';') > 0) {
            args = cssString.split(';');
          } else {
            args[0] = cssString;
          }
          for(var ai = 0; ai< args.length; ai++) {
            if(args[ai]) {
              var arg_bits = args[ai].split(':');
              if(arg_bits[0] == 'left') {
                this.powertipX = arg_bits[1];
                if(this.powertipX.indexOf('px') > 0) {
                  this.powertipX = this.powertipX.substr(0, (this.powertipX.length - 2) );
                }
              }
              if(arg_bits[0] == 'top') {
                this.powertipY = arg_bits[1];
                if(this.powertipY.indexOf('px') > 0) {
                  this.powertipY = this.powertipY.substr(0, (this.powertipY.length - 2) );
                }
              }
              if(arg_bits[0].indexOf('-') > 0) {
                var camelCase = arg_bits[0].split('-');
                var newCamel = camelCase.shift();
                while(camelCase.length > 0) {
                  var camelCaseBit = camelCase.shift();
                  newCamel += camelCaseBit.charAt(0).toUpperCase()+camelCaseBit.substr(1);
                }
                document.getElementById(this.nodalId).style[newCamel] = arg_bits[1];
              } else {
                document.getElementById(this.nodalId).style[arg_bits[0]] = arg_bits[1];
              }
            }
          }
        }
      } else {
        document.getElementById(this.nodalId).style.backgroundColor = '#FFFFE0';
        document.getElementById(this.nodalId).style.color = '#000000';
        document.getElementById(this.nodalId).style.border = '2px solid #000000';
        document.getElementById(this.nodalId).style.padding = '3px';
        document.getElementById(this.nodalId).style.fontFamily = 'tahoma,verdana,helvetica,sans-serif';
        document.getElementById(this.nodalId).style.fontSize = '10pt';
      }
      document.getElementById(this.nodalId).style.zIndex = '100';
      document.getElementById(this.nodalId).style.display = 'block';
      return false;
    }
  }
}

