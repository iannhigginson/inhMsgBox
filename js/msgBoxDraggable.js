/**
 * @package msgBoxDraggable.js
 * @author: Ian Neal Higginson
 * @date: 24/11/2022
 * @version: 2.0.241122.1000
 */

/* #region Drag the message box */
function dragElement(draggableElement) {

 var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

 function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
 }

 function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  // set the element's new position:
  draggableElement.style.top = (draggableElement.offsetTop - pos2) + "px";
  draggableElement.style.left = (draggableElement.offsetLeft - pos1) + "px";
 }

 function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
 }

 if (typeof (draggableElement) !== "undefined" && draggableElement !== null) {
  // if present, the header is where you move the DIV from:
  var msgHeaderBox = document.getElementById("msgHeaderBox");
  msgHeaderBox.onmousedown = dragMouseDown;
 } else {
  // otherwise, move the DIV from anywhere inside the DIV:
  draggableElement.onmousedown = dragMouseDown;
 }

}

dragElement(document.getElementById("msgBoxDraggableElement"));
 /* #endregion Drag the message box */
