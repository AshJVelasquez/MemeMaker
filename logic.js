var svg = document.querySelector("svg");
var img = document.querySelector("img");
var canvas = document.querySelector("canvas");

// get svg data
var xml = new XMLSerializer().serializeToString(svg);

// make it base64
var svg64 = btoa(xml);
var b64Start = 'data:image/svg+xml;base64,';

// prepend a "header"
var image64 = b64Start + svg64;

// set it as the source of the img element
img.src = image64;

// draw the image onto the canvas
canvas.getContext('2d').drawImage(img, 0, 0);

function dlCanvas() {
  var dt = canvas.toDataURL('image/png'); // << this fails in IE/Edge...
  dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
  dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
  this.href = dt;
};
document.getElementById('dl').addEventListener('click', dlCanvas, false);

// var inputTopTxt = document.querySelector("input");
// var displayTopTxt = document.getElementId("tpTxtSVG");

//function on handle change
// var handleChange = function () {
//   var text = inputTopTxt.textContent;
//   displayTopTxt.textContent = text;
// };

// //loading the upload image
// var loadFile = function (event) {
//   var image = document.getElementById("output");
//   image.scr = URL.createdObjectURL(event.target.files[0]);
// };

//adjusting changes to text
// inputTopTxt.onchange = handleChange;

// draw the image onto the canvas
// var draw = function () {
//   // set it as the source of the img element
//   //loadFile();
//   var xml = new XMLSerializer().serializeToString(svg);
//   // make it base64
//   var svg64 = btoa(xml);
//   var b64Start = "data:image/svg+xml;base64,";
//   // prepend a "header"
//   var image64 = b64Start + svg64;
//   canvas.getContext("2d").drawImage(img, 0, 0);
// };

// var downloadCanvas = function () {
//   var dt = canvas.toDataURL("image/png"); // this fails in IE/Edge...
//   dt = dt.replace(/^data:image\/[^;]*/, "data:application/octet-stream");
//   dt = dt.replace(
//     /^data:application\/octet-stream/,
//     "data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png"
//   );
//   this.href = dt;
// };

// var saveEdgeImg = function () {
//   if (!window.localStorage) {
//     alert("This function is not supported by your browser.");
//     return;
//   }
//   var blob = new Blob(
//     [
//       b64toBlob(
//         canvas.toDataURL("png").replace(/^data:image\/(png|jpg);base64,/, ""),
//         "image/png"
//       )
//     ],
//     { type: "image/png" }
//   );
//   saveAs(blob, "testfile1.png");
// };

// //Attempting to adda step/refresh function
// function step() {
//   draw();
//   window.requestAnimationFrame(step);
// }

// step();

document.getElementById("saveImg").onclick(downloadCanvas);
