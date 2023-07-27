var wms_layers = [];

var format_buildiiiiiiiiiiiiiiiiiiiinpro_0 = new ol.format.GeoJSON();
var features_buildiiiiiiiiiiiiiiiiiiiinpro_0 = format_buildiiiiiiiiiiiiiiiiiiiinpro_0.readFeatures(json_buildiiiiiiiiiiiiiiiiiiiinpro_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildiiiiiiiiiiiiiiiiiiiinpro_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildiiiiiiiiiiiiiiiiiiiinpro_0.addFeatures(features_buildiiiiiiiiiiiiiiiiiiiinpro_0);
var lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildiiiiiiiiiiiiiiiiiiiinpro_0, 
                style: style_buildiiiiiiiiiiiiiiiiiiiinpro_0,
                interactive: true,
                title: '<img src="styles/legend/buildiiiiiiiiiiiiiiiiiiiinpro_0.png" /> buildiiiiiiiiiiiiiiiiiiiinpro'
            });
var format_road_1 = new ol.format.GeoJSON();
var features_road_1 = format_road_1.readFeatures(json_road_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_road_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_road_1.addFeatures(features_road_1);
var lyr_road_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_road_1, 
                style: style_road_1,
                interactive: true,
                title: '<img src="styles/legend/road_1.png" /> road'
            });

lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0.setVisible(true);lyr_road_1.setVisible(true);
var layersList = [lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0,lyr_road_1];
lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0.set('fieldAliases', {'gid': 'gid', });
lyr_road_1.set('fieldAliases', {'Id': 'Id', });
lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0.set('fieldImages', {'gid': 'TextEdit', });
lyr_road_1.set('fieldImages', {'Id': 'Range', });
lyr_buildiiiiiiiiiiiiiiiiiiiinpro_0.set('fieldLabels', {'gid': 'inline label', });
lyr_road_1.set('fieldLabels', {'Id': 'inline label', });
lyr_road_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});