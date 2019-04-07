var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_spainLow;
chart.projection = new am4maps.projections.Miller();
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
// Hover state
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var lastSelected;
polygonTemplate.events.on("hit", function(ev) {
  if (lastSelected) {
    lastSelected.isActive = false;
  }
  ev.target.series.chart.zoomToMapObject(ev.target);
  if (lastSelected !== ev.target) {
    lastSelected = ev.target;
  } else {
    chart.goHome();
  }
})