mapboxgl.accessToken =
  "pk.eyJ1IjoiamFja2dyb3NzbWFuIiwiYSI6ImNpbWZqeG1hMjAxcHl2Y202cmhlZGRjYXcifQ.1-so8LElW5dTGT5o941u1w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jackgrossman/cjj7qb86l1r732rjrmdh31r70",
  pitch: 0,
  control: "topleft",
  bearing: 0,
  zoom: 12,
  center: [-74.56, 39.32]
});
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-left");
