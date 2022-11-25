/**
 * @package msgBox.js
 * @author: Ian Neal Higginson
 * @date: 24/11/2022
 * @version: 2.0.241122.1000
 * @usage: msg(_event, _action, _width, _height, _heading, _message)
 */

/* #region Destroy the message box */
function destroyTheBox() {
 let bodyTag = document.getElementsByTagName("body")[0];
 let msgBoxDraggableElement = document.getElementById("msgBoxDraggableElement");
 bodyTag.removeChild(msgBoxDraggableElement);
}
/* #endregion Destroy the message box */

/* #region Function msg */
function msg(_event, _action, _width, _height, _heading, _message) {

 var _windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

 var _windowHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

 var _posTop = 0;
 _posTop = _event.pageY;
 if (_posTop === undefined) {
  _posTop = _windowHeight / 4;
 }
 _posTop = _posTop + "px";

 var _Height = _height;
 if (_Height === "" || isNaN(_Height) === true) { _Height = "300px"; }
 var _Width = _width;
 if (_Width === "" || isNaN(_Width) === true) { _Width = _windowWidth / 4 + "px"; }

 /* #region Create the message box */
 function createTheBox() {
  /**
   ** The construction
   */
  var msgBodyBox, msgCloseBox, msgBoxDraggableElement, msgHeaderBox, msgInnerBox, msgOuterBox, msgBoxDraggableScript;
  let bodyTag = document.getElementsByTagName("body")[0];

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
  msgOuterBox.style.height = _height;
  msgOuterBox.style.left = "5px";// _windowWidth / 2 - _windowWidth / 5;
  msgOuterBox.style.marginLeft = "200px";
  msgOuterBox.style.marginRight = "200px";
  msgOuterBox.style.marginTop = "10px";
  msgOuterBox.style.overflow = "hidden";
  msgOuterBox.style.position = "absolute";
  msgOuterBox.style.textAlign = "center";
  msgOuterBox.style.top = "80px"; // _posTop;
  msgOuterBox.style.width = _width;
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
  msgInnerBox.style.height = parseInt(msgOuterBox.style.height) - 120 + "px";
  msgInnerBox.style.left = (parseInt(msgOuterBox.style.left) + 5) + "px";  // "1%";
  msgInnerBox.style.marginBottom = "3.5px";
  msgInnerBox.style.marginLeft = "auto";
  msgInnerBox.style.marginRight = "auto";
  msgInnerBox.style.marginTop = "3.5px";
  msgInnerBox.style.overflow = "hidden";
  msgInnerBox.style.padding = "50px";
  msgInnerBox.style.position = "absolute";
  msgInnerBox.style.top = (parseInt(msgOuterBox.style.top) - 75) + "px";
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
  msgHeaderBox.style.overflowX = "auto";
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
   ** The body, will contain the message.
   */
  /* #region msgBodyBox */
  msgBodyBox = document.createElement("div");
  msgInnerBox.appendChild(msgBodyBox);
  msgBodyBox.id = "msgBodyBox";
  msgBodyBox.style.backgroundColor = "#f5f5f5";
  msgBodyBox.style.borderTop = "blue solid thin";
  msgBodyBox.style.borderRadius = "5px";
  msgBodyBox.style.boxShadow = "2px 2px 5px #5098c7";
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
  msgBoxDraggableScript.setAttribute("src", "./js/msgBoxDraggable.js");
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
  msgBoxDraggableElement.style.left = "0px"; //_windowWidth / 2;
  msgBoxDraggableElement.style.position = "absolute";
  msgBoxDraggableElement.style.top = "0px"; //_windowHeight / 2;
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
 switch (_action.trim()) {
  case "+":
   createTheBox();
   break;
  case "-":
   destroyTheBox();
   break;
 }

 document.getElementById("msgHeaderBox").innerHTML = "<h2>" + _heading + "</h2>";
 document.getElementById("msgBodyBox").innerHTML = _message;


}
/* #endregion Function msg */
