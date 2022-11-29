/**
 * @package msgBox.js
 * @author: Ian Neal Higginson
 * @date: 24/11/2022
 * @version: 2.0.241122.1000
 * @usage: msg(_event, _action, _width, _height, _heading, _message)
 */

/* #region Destroy the message box */
function destroyTheBox() {
 "use strict";

 let bodyTag = document.getElementsByTagName("body")[0];
 let msgBoxDraggableElement = document.getElementById("msgBoxDraggableElement");

 bodyTag.removeChild(msgBoxDraggableElement);

 //
}
/* #endregion Destroy the message box */

/* #region darkenTheBox */
function darkenTheBox() {
 "use strict";

 var bColor, fColor;
 var msgDarkBox = document.getElementById("msgDarkBox");
 var msgBodyBox = document.getElementById("msgBodyBox");

 bColor = gc("bColor");
 fColor = gc("fColor");
 // console.log(`function darkenTheBox() bColor=> ${bColor}; fColor=> ${fColor}`);
 // console.log(`msgBodyBox.style.backgroundColor=> ${msgBodyBox.style.backgroundColor}`);

 if (msgBodyBox.style.backgroundColor === "rgb(255, 255, 255)") {

  msgBodyBox.style.backgroundColor = "rgb(0, 0, 0)";
  sc("bColor", "rgb(0, 0, 0)", 7, "", "");

  msgBodyBox.style.color = "rgb(255, 255, 255)";
  sc("fColor", "rgb(255, 255, 255)", 7, "", "");

  msgDarkBox.innerHTML = "L";
  msgDarkBox.style.backgroundColor = "#808080";

 } else {

  msgBodyBox.style.backgroundColor = "rgb(255, 255, 255)";
  sc("bColor", "rgb(255, 255, 255)", 7, "", "");

  msgBodyBox.style.color = "rgb(0, 0, 0)";
  sc("fColor", "rgb(0, 0, 0)", 7, "", "");

  msgDarkBox.innerHTML = "D";
  msgDarkBox.style.backgroundColor = "#080808";

 }

 //
}
/* #endregion darkenTheBox */

/* #region Function msg */
function msg(_event, _action, _width, _height, _heading, _message) {
 "use strict";

 sc("msg", "msg(_event, _action, _width, _height, _heading, _message)", 7, "", "");
 /* #region Global Variables */
 _event = event || window.event;
 if (_event !== undefined) {
  _event.preventDefault();
 }

 var _windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

 var _windowHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

 var _posTop;
 if (_event === undefined) {
  _posTop = 100;
 } else {
  _posTop = _event.pageY || _event.clientY;
 }

 var _Height = _height;
 if (_Height === "") {
  _Height = 200;
 }

 var _Width = _width;
 if (_Width === "") {
  _Width = 500;
 }
 /* #endregion Global Variables */

 /* #region Create the message box */
 function createTheBox() {

  /**
   ** The construction
   */
  /* #region Variables */
  var msgBodyBox, msgCloseBox, msgDarkBox, msgBoxDraggableElement, msgHeaderBox, msgInnerBox, msgOuterBox, msgBoxDraggableScript;
  let bodyTag = document.getElementsByTagName("body")[0];
  /* #endregion Variables */

  /**
   ** The outer box
   */
  /* #region msgOuterBox */
  msgOuterBox = document.createElement("div");
  msgOuterBox.id = "msgOuterBox";
  msgOuterBox.style.backgroundColor = "#00c8ff";
  msgOuterBox.style.borderTop = "blue solid thin";
  msgOuterBox.style.borderRadius = "5px";
  msgOuterBox.style.boxShadow = "2px 2px 5px #5098c7";
  msgOuterBox.style.height = _Height + "px";
  msgOuterBox.style.left = "5px";
  msgOuterBox.style.marginLeft = "200px";
  msgOuterBox.style.marginRight = "200px";
  msgOuterBox.style.marginTop = "10px";
  msgOuterBox.style.overflow = "hidden";
  msgOuterBox.style.position = "absolute";
  msgOuterBox.style.textAlign = "center";
  msgOuterBox.style.top = _posTop + "px"; //"80px";
  msgOuterBox.style.width = _Width + "px";
  msgOuterBox.style.zIndex = "100";
  /* #endregion msgOuterBox */

  /**
   ** The inner box
   */
  /* #region msgInnerBox */
  msgInnerBox = document.createElement("div");
  msgOuterBox.appendChild(msgInnerBox);
  msgInnerBox.id = "msgInnerBox";
  msgInnerBox.style.backgroundColor = "blue";
  msgInnerBox.style.borderTop = "blue solid thin";
  msgInnerBox.style.borderRadius = "5px";
  msgInnerBox.style.boxShadow = "2px 2px 5px #5098c7";
  msgInnerBox.style.height = (parseInt(msgOuterBox.style.height) - 120) + "px";
  msgInnerBox.style.left = (parseInt(msgOuterBox.style.left) + 5) + "px";  // "1%";
  msgInnerBox.style.marginBottom = "3.5px";
  msgInnerBox.style.marginLeft = "auto";
  msgInnerBox.style.marginRight = "auto";
  msgInnerBox.style.marginTop = "3.5px";
  msgInnerBox.style.overflow = "hidden";
  msgInnerBox.style.padding = "50px";
  msgInnerBox.style.position = "absolute";
  msgInnerBox.style.top = (parseInt(msgOuterBox.style.top) - _posTop) + "px";
  msgInnerBox.style.width = (parseInt(msgOuterBox.style.width) - 120) + "px";  // "88%";
  /* #endregion msgInnerBox */

  /**
   ** The header
   */
  /* #region msgHeaderBox */
  msgHeaderBox = document.createElement("div");
  msgInnerBox.appendChild(msgHeaderBox);
  msgHeaderBox.id = "msgHeaderBox";
  msgHeaderBox.style.backgroundColor = "#0094ff";
  msgHeaderBox.style.border = "#000000 solid thin";
  msgHeaderBox.style.borderRadius = "5px";
  msgHeaderBox.style.cursor = "move";
  msgHeaderBox.style.height = "5em";
  msgHeaderBox.style.left = (parseInt(msgInnerBox.style.left) - 10) + "px";
  msgHeaderBox.style.marginLeft = "1%";
  msgHeaderBox.style.marginRight = "1%";
  msgHeaderBox.style.overflowX = "hidden";
  msgHeaderBox.style.overflowY = "hidden";
  msgHeaderBox.style.paddingLeft = "5px";
  msgHeaderBox.style.paddingRight = "5px";
  msgHeaderBox.style.position = "absolute";
  msgHeaderBox.style.top = (parseInt(msgInnerBox.style.top) + 5) + "px";
  msgHeaderBox.style.width = (parseInt(msgInnerBox.style.width) + 70) + "px";
  msgHeaderBox.style.whiteSpace = "nowrap";
  msgHeaderBox.style.zIndex = "90";
  msgHeaderBox.innerHTML = "<h2 align='center'>Heading</h2>";
  /* #endregion msgHeaderBox */

  /**
   ** The close button
   */
  /* #region msgCloseBox */
  msgCloseBox = document.createElement("div");
  msgInnerBox.appendChild(msgCloseBox);
  msgCloseBox.id = "msgCloseBox";
  msgCloseBox.innerHTML = "X";
  msgCloseBox.style.backgroundColor = "red";
  msgCloseBox.style.border = "#000 solid thin";
  msgCloseBox.style.borderRadius = "5px";
  msgCloseBox.style.boxShadow = "2px 2px 5px #5098c7";
  msgCloseBox.style.color = "#ffffff";
  msgCloseBox.style.cursor = "pointer";
  msgCloseBox.style.fontSize = "2em";
  msgCloseBox.style.fontWeight = "bold";
  msgCloseBox.style.height = "1em";
  msgCloseBox.style.margin = "3px";
  msgCloseBox.style.paddingBottom = "4px";
  msgCloseBox.style.paddingLeft = "3px";
  msgCloseBox.style.paddingRight = "3px";
  msgCloseBox.style.paddingTop = "3px";
  msgCloseBox.style.position = "absolute";
  msgCloseBox.style.right = (parseInt(msgHeaderBox.style.width) - (parseInt(msgHeaderBox.style.width) - 20)) + "px";
  msgCloseBox.style.textAlign = "center";
  msgCloseBox.style.top = (parseInt(msgHeaderBox.style.height) + (parseInt(msgHeaderBox.style.height) * 4)) + "px";
  msgCloseBox.style.width = "1em";
  msgCloseBox.style.zIndex = "120";
  msgCloseBox.setAttribute("onclick", "destroyTheBox()");
  /* #endregion msgCloseBox */

  /**
   ** The dark button
   */
  /* #region msgDarkBox */
  msgDarkBox = document.createElement("div");
  msgInnerBox.appendChild(msgDarkBox);
  msgDarkBox.id = "msgDarkBox";
  msgDarkBox.innerHTML = "D";
  msgDarkBox.style.backgroundColor = "#808080";
  msgDarkBox.style.border = "#000 solid thin";
  msgDarkBox.style.borderRadius = "5px";
  msgDarkBox.style.boxShadow = "2px 2px 5px #5098c7";
  msgDarkBox.style.color = "#ffffff";
  msgDarkBox.style.cursor = "pointer";
  msgDarkBox.style.fontSize = "2em";
  msgDarkBox.style.fontWeight = "bold";
  msgDarkBox.style.height = "1em";
  msgDarkBox.style.margin = "3px";
  msgDarkBox.style.paddingBottom = "4px";
  msgDarkBox.style.paddingLeft = "3px";
  msgDarkBox.style.paddingRight = "3px";
  msgDarkBox.style.paddingTop = "3px";
  msgDarkBox.style.position = "absolute";
  msgDarkBox.style.right = (parseInt(msgHeaderBox.style.width) - (parseInt(msgHeaderBox.style.width) - 70)) + "px";
  msgDarkBox.style.textAlign = "center";
  msgDarkBox.style.top = (parseInt(msgHeaderBox.style.height) + (parseInt(msgHeaderBox.style.height) * 4)) + "px";
  msgDarkBox.style.width = "1em";
  msgDarkBox.style.zIndex = "120";
  msgDarkBox.setAttribute("onclick", "darkenTheBox()");
  /* #endregion msgDarkBox */

  /**
   ** The body, will contain the message.
   */
  /* #region msgBodyBox */
  var fColor;

  fColor = gc("fColor");

  msgBodyBox = document.createElement("div");
  msgInnerBox.appendChild(msgBodyBox);
  msgBodyBox.id = "msgBodyBox";

  if (fColor === "rgb(255, 255, 255)" || fColor === null || fColor === undefined) {
   msgBodyBox.style.backgroundColor = "rgb(0, 0, 0)";
   msgDarkBox.innerHTML = "L";
   msgDarkBox.style.backgroundColor = "#808080";
  } else {
   msgBodyBox.style.backgroundColor = "rgb(255, 255, 255)";
   msgDarkBox.innerHTML = "D";
   msgDarkBox.style.backgroundColor = "#080808";
  }

  msgBodyBox.style.borderTop = "blue solid thin";
  msgBodyBox.style.borderRadius = "5px";
  msgBodyBox.style.boxShadow = "2px 2px 5px #5098c7";

  if (msgBodyBox.style.backgroundColor === "rgb(0, 0, 0)") {
   msgBodyBox.style.color = "rgb(255, 255, 255)";
  } else {
   msgBodyBox.style.color = "rgb(0, 0, 0)";
  }

  msgBodyBox.style.height = (parseInt(msgInnerBox.style.height) + 0) + "px";
  msgBodyBox.style.left = (parseInt(msgInnerBox.style.left) - 10) + "px";
  msgBodyBox.style.marginBottom = "1em";
  msgBodyBox.style.marginLeft = "1%";
  msgBodyBox.style.marginRight = "1%";
  msgBodyBox.style.marginTop = "1em";
  msgBodyBox.style.overflowX = "hidden";
  msgBodyBox.style.overflowY = "auto";
  msgBodyBox.style.paddingLeft = "5px";
  msgBodyBox.style.paddingRight = "5px";
  msgBodyBox.style.paddingTop = "5px";
  msgBodyBox.style.position = "absolute";
  msgBodyBox.style.textAlign = "left";
  msgBodyBox.style.top = (parseInt(msgInnerBox.style.top) + parseInt(msgHeaderBox.style.height) + 60) + "px";
  msgBodyBox.style.width = (parseInt(msgInnerBox.style.width) + 70) + "px";
  msgBodyBox.setAttribute("z-index", "120");
  /* #endregion msgBodyBox */

  /**
   ** The draggable script
   */
  /* #region Draggable script */
  msgBoxDraggableScript = document.createElement("script");
  msgBoxDraggableScript.setAttribute("type", "text/javascript");
  msgBoxDraggableScript.setAttribute("src", "./js/msgBox/msgBoxDraggable.js");
  /* #endregion Draggable script */

  /**
   ** Dragable div
   */
  /* #region Dragable div */
  msgBoxDraggableElement = document.createElement("div");
  msgBoxDraggableElement.id = "msgBoxDraggableElement";
  bodyTag.appendChild(msgBoxDraggableElement);
  msgBoxDraggableElement.appendChild(msgOuterBox);
  msgBoxDraggableElement.appendChild(msgBoxDraggableScript);

  // msgBoxDraggableElement.style.border = "#000 solid thick";
  // msgBoxDraggableElement.style.zIndex = "200";

  msgBoxDraggableElement.style.height = "1px";
  msgBoxDraggableElement.style.left = "0px";
  msgBoxDraggableElement.style.position = "absolute";
  msgBoxDraggableElement.style.top = "0px";
  msgBoxDraggableElement.style.width = "1px";
  /* #endregion Dragable div */

  //
 }
 /* #endregion Create the message box */

 /**
  ** When the routine starts if it sees an openmessage box it will be removed.
  */
 /* #region If the message box exists kill it */
 let msgOuterBox = document.getElementById("msgOuterBox");
 if (typeof (msgOuterBox) !== "undefined" && msgOuterBox !== null) {
  destroyTheBox();
 }
 /* #endregion If the message box exists kill it */

 /**
  ** What to do?
  */
 /* #region Start */
 switch (_action.trim()) {
  case "+":
   createTheBox();
   setTimeout(() => {
    document.getElementById("msgHeaderBox").innerHTML = "<h2>" + _heading + "</h2>";
    document.getElementById("msgBodyBox").innerHTML = _message;
   }, 100);
   break;
  case "-":
   destroyTheBox();
   break;
 }
 /* #endregion Start */

}
/* #endregion Function msg */

/* #region Cookies */
/**
 ** Cookies
 */
//* Set cookie 'name, value, expiry date, path, site name'.
function sc(cname, cvalue, exdays, cpath, csamesite) {

 "use strict";

 //~ Cookie name.
 var cookieData = `${cname}=${cvalue}`;

 //~ Cookie Expiry Date.
 var d = new Date();
 d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
 var expiryDate = `expires=${d.toUTCString()};`;

 //~ Cookie Path.
 var path = "";
 if (cpath !== "") {
  path = `path=${cpath}`;
 } else {
  path = "path=/";
 }

 //~ Cookie SameSite Attribute.
 var SameSite = "";
 if (csamesite === "") {
  SameSite = `SameSite=None`;
 } else {
  SameSite = `SameSite=${csamesite}`;
 }

 //~ Set Cookie.
 document.cookie = `${cookieData}; ${expiryDate}; ${path}; ${SameSite}; Secure`;

 // console.info(document.cookie);

}

//* Get cookie 'name'.
function gc(cname) {
 "use strict";
 var name = cname + "=";
 var ca = document.cookie.split(";");
 for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) === " ") {
   c = c.substring(1);
   if (c.indexOf(name) !== -1) {
    return c.substring(name.length, c.length);
   }
  }
 }
 return "";
}

/* #endregion Cookies */
