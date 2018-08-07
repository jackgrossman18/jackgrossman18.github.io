mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja2dyb3NzbWFuIiwiYSI6ImNpbWZqeG1hMjAxcHl2Y202cmhlZGRjYXcifQ.1-so8LElW5dTGT5o941u1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jackgrossman/cjkim8kfl09c12rpb7q96uvm7",
  pitch: 0,
  control: "topleft",
  bearing: 0,
  zoom: 11,
  center: [-77.037, 38.895]
});
var nav = new mapboxgl.NavigationControl();
// var responsive = new mapboxgl.AttributionControl({
//   compact: true
// });

map.addControl(nav, "top-left");
