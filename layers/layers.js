var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_COMCOM_PCHcopie_1 = new ol.format.GeoJSON();
var features_COMCOM_PCHcopie_1 = format_COMCOM_PCHcopie_1.readFeatures(json_COMCOM_PCHcopie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMCOM_PCHcopie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMCOM_PCHcopie_1.addFeatures(features_COMCOM_PCHcopie_1);
var lyr_COMCOM_PCHcopie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMCOM_PCHcopie_1, 
                style: style_COMCOM_PCHcopie_1,
                popuplayertitle: "COMCOM_PCH copie",
                interactive: true,
                title: 'COMCOM_PCH copie'
            });
var format_Traiteurgeocoded_2 = new ol.format.GeoJSON();
var features_Traiteurgeocoded_2 = format_Traiteurgeocoded_2.readFeatures(json_Traiteurgeocoded_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traiteurgeocoded_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traiteurgeocoded_2.addFeatures(features_Traiteurgeocoded_2);
var lyr_Traiteurgeocoded_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traiteurgeocoded_2, 
                style: style_Traiteurgeocoded_2,
                popuplayertitle: "Traiteur.geocoded",
                interactive: true,
                title: '<img src="styles/legend/Traiteurgeocoded_2.png" /> Traiteur.geocoded'
            });
var format_Fournisseuralimentairegeocoded_3 = new ol.format.GeoJSON();
var features_Fournisseuralimentairegeocoded_3 = format_Fournisseuralimentairegeocoded_3.readFeatures(json_Fournisseuralimentairegeocoded_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fournisseuralimentairegeocoded_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fournisseuralimentairegeocoded_3.addFeatures(features_Fournisseuralimentairegeocoded_3);
var lyr_Fournisseuralimentairegeocoded_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fournisseuralimentairegeocoded_3, 
                style: style_Fournisseuralimentairegeocoded_3,
                popuplayertitle: "Fournisseur alimentaire.geocoded",
                interactive: true,
                title: '<img src="styles/legend/Fournisseuralimentairegeocoded_3.png" /> Fournisseur alimentaire.geocoded'
            });
var format_COMCOM_PCH_4 = new ol.format.GeoJSON();
var features_COMCOM_PCH_4 = format_COMCOM_PCH_4.readFeatures(json_COMCOM_PCH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMCOM_PCH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMCOM_PCH_4.addFeatures(features_COMCOM_PCH_4);
var lyr_COMCOM_PCH_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMCOM_PCH_4, 
                style: style_COMCOM_PCH_4,
                popuplayertitle: "COMCOM_PCH",
                interactive: true,
                title: '<img src="styles/legend/COMCOM_PCH_4.png" /> COMCOM_PCH'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_COMCOM_PCHcopie_1.setVisible(true);lyr_Traiteurgeocoded_2.setVisible(true);lyr_Fournisseuralimentairegeocoded_3.setVisible(true);lyr_COMCOM_PCH_4.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_COMCOM_PCHcopie_1,lyr_Traiteurgeocoded_2,lyr_Fournisseuralimentairegeocoded_3,lyr_COMCOM_PCH_4];
lyr_COMCOM_PCHcopie_1.set('fieldAliases', {'SOURCE': 'SOURCE', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARROND': 'ARROND', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPULATION': 'POPULATION', 'MULTI_CANT': 'MULTI_CANT', 'COMMUNES_C': 'COMMUNES_C', 'COMMUNES_1': 'COMMUNES_1', 'NOM_COMCOM': 'NOM_COMCOM', });
lyr_Traiteurgeocoded_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'ADRESSE': 'ADRESSE', 'CP': 'CP', 'VILLE': 'VILLE', 'RAISON SOCIALE': 'RAISON SOCIALE', 'PRESTATION PROPOSEE': 'PRESTATION PROPOSEE', 'BOISSON': 'BOISSON', 'LIVRAISON': 'LIVRAISON', 'SURCOUT LIVRAISON': 'SURCOUT LIVRAISON', 'DRESSAGE': 'DRESSAGE', 'SERVICE': 'SERVICE', 'DEBARASSAGE': 'DEBARASSAGE', 'ZONE DE LIVRAISON': 'ZONE DE LIVRAISON', 'COMMENTAIRES / NOTE SUR 5 ETOILES / AVIS (qualité / rapport qualité-prix / professionnalisme)': 'COMMENTAIRES / NOTE SUR 5 ETOILES / AVIS (qualité / rapport qualité-prix / professionnalisme)', 'LOCAL': 'LOCAL', 'QUALITE': 'QUALITE', 'CONTACT': 'CONTACT', 'MAIL': 'MAIL', 'TEL': 'TEL', 'SITE INTERNET': 'SITE INTERNET', 'CC': 'CC', 'SIRET': 'SIRET', 'result_label': 'result_label', 'result_score': 'result_score', 'result_score_next': 'result_score_next', 'result_type': 'result_type', 'result_id': 'result_id', 'result_housenumber': 'result_housenumber', 'result_name': 'result_name', 'result_street': 'result_street', 'result_postcode': 'result_postcode', 'result_city': 'result_city', 'result_context': 'result_context', 'result_citycode': 'result_citycode', 'result_oldcitycode': 'result_oldcitycode', 'result_oldcity': 'result_oldcity', 'result_district': 'result_district', 'result_status': 'result_status', });
lyr_Fournisseuralimentairegeocoded_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'RAISON SOCIALE': 'RAISON SOCIALE', 'TYPE DE FOURNISSEUR': 'TYPE DE FOURNISSEUR', 'PRODUITS VENDUS': 'PRODUITS VENDUS', 'BOISSON': 'BOISSON', 'CONTACT': 'CONTACT', 'MAIL': 'MAIL', 'TEL': 'TEL', 'SITE INTERNET': 'SITE INTERNET', 'ADRESSE': 'ADRESSE', 'CP': 'CP', 'VILLE': 'VILLE', 'SIRET': 'SIRET', 'COMPTE SYDEL': 'COMPTE SYDEL', 'result_label': 'result_label', 'result_score': 'result_score', 'result_score_next': 'result_score_next', 'result_type': 'result_type', 'result_id': 'result_id', 'result_housenumber': 'result_housenumber', 'result_name': 'result_name', 'result_street': 'result_street', 'result_postcode': 'result_postcode', 'result_city': 'result_city', 'result_context': 'result_context', 'result_citycode': 'result_citycode', 'result_oldcitycode': 'result_oldcitycode', 'result_oldcity': 'result_oldcity', 'result_district': 'result_district', 'result_status': 'result_status', });
lyr_COMCOM_PCH_4.set('fieldAliases', {'SOURCE': 'SOURCE', 'NOM': 'NOM', 'CODE_INSEE': 'CODE_INSEE', 'STATUT': 'STATUT', 'CANTON': 'CANTON', 'ARROND': 'ARROND', 'DEPART': 'DEPART', 'REGION': 'REGION', 'POPULATION': 'POPULATION', 'MULTI_CANT': 'MULTI_CANT', 'COMMUNES_C': 'COMMUNES_C', 'COMMUNES_1': 'COMMUNES_1', 'NOM_COMCOM': 'NOM_COMCOM', });
lyr_COMCOM_PCHcopie_1.set('fieldImages', {'SOURCE': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARROND': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'MULTI_CANT': 'TextEdit', 'COMMUNES_C': 'TextEdit', 'COMMUNES_1': 'TextEdit', 'NOM_COMCOM': 'TextEdit', });
lyr_Traiteurgeocoded_2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ADRESSE': 'TextEdit', 'CP': 'TextEdit', 'VILLE': 'TextEdit', 'RAISON SOCIALE': 'TextEdit', 'PRESTATION PROPOSEE': 'TextEdit', 'BOISSON': 'TextEdit', 'LIVRAISON': 'TextEdit', 'SURCOUT LIVRAISON': 'TextEdit', 'DRESSAGE': 'TextEdit', 'SERVICE': 'TextEdit', 'DEBARASSAGE': 'TextEdit', 'ZONE DE LIVRAISON': 'TextEdit', 'COMMENTAIRES / NOTE SUR 5 ETOILES / AVIS (qualité / rapport qualité-prix / professionnalisme)': 'TextEdit', 'LOCAL': 'TextEdit', 'QUALITE': 'TextEdit', 'CONTACT': 'TextEdit', 'MAIL': 'TextEdit', 'TEL': 'TextEdit', 'SITE INTERNET': 'TextEdit', 'CC': 'TextEdit', 'SIRET': 'TextEdit', 'result_label': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', 'result_type': 'TextEdit', 'result_id': 'TextEdit', 'result_housenumber': 'TextEdit', 'result_name': 'TextEdit', 'result_street': 'TextEdit', 'result_postcode': 'TextEdit', 'result_city': 'TextEdit', 'result_context': 'TextEdit', 'result_citycode': 'TextEdit', 'result_oldcitycode': 'TextEdit', 'result_oldcity': 'TextEdit', 'result_district': 'TextEdit', 'result_status': 'TextEdit', });
lyr_Fournisseuralimentairegeocoded_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'RAISON SOCIALE': 'TextEdit', 'TYPE DE FOURNISSEUR': 'TextEdit', 'PRODUITS VENDUS': 'TextEdit', 'BOISSON': 'TextEdit', 'CONTACT': 'TextEdit', 'MAIL': 'TextEdit', 'TEL': 'TextEdit', 'SITE INTERNET': 'TextEdit', 'ADRESSE': 'TextEdit', 'CP': 'TextEdit', 'VILLE': 'TextEdit', 'SIRET': 'TextEdit', 'COMPTE SYDEL': 'TextEdit', 'result_label': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', 'result_type': 'TextEdit', 'result_id': 'TextEdit', 'result_housenumber': 'TextEdit', 'result_name': 'TextEdit', 'result_street': 'TextEdit', 'result_postcode': 'TextEdit', 'result_city': 'TextEdit', 'result_context': 'TextEdit', 'result_citycode': 'TextEdit', 'result_oldcitycode': 'TextEdit', 'result_oldcity': 'TextEdit', 'result_district': 'TextEdit', 'result_status': 'TextEdit', });
lyr_COMCOM_PCH_4.set('fieldImages', {'SOURCE': 'TextEdit', 'NOM': 'TextEdit', 'CODE_INSEE': 'TextEdit', 'STATUT': 'TextEdit', 'CANTON': 'TextEdit', 'ARROND': 'TextEdit', 'DEPART': 'TextEdit', 'REGION': 'TextEdit', 'POPULATION': 'TextEdit', 'MULTI_CANT': 'TextEdit', 'COMMUNES_C': 'TextEdit', 'COMMUNES_1': 'TextEdit', 'NOM_COMCOM': 'TextEdit', });
lyr_COMCOM_PCHcopie_1.set('fieldLabels', {'SOURCE': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARROND': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPULATION': 'no label', 'MULTI_CANT': 'no label', 'COMMUNES_C': 'no label', 'COMMUNES_1': 'no label', 'NOM_COMCOM': 'no label', });
lyr_Traiteurgeocoded_2.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'ADRESSE': 'no label', 'CP': 'no label', 'VILLE': 'no label', 'RAISON SOCIALE': 'no label', 'PRESTATION PROPOSEE': 'no label', 'BOISSON': 'no label', 'LIVRAISON': 'no label', 'SURCOUT LIVRAISON': 'no label', 'DRESSAGE': 'no label', 'SERVICE': 'no label', 'DEBARASSAGE': 'no label', 'ZONE DE LIVRAISON': 'no label', 'COMMENTAIRES / NOTE SUR 5 ETOILES / AVIS (qualité / rapport qualité-prix / professionnalisme)': 'no label', 'LOCAL': 'no label', 'QUALITE': 'no label', 'CONTACT': 'no label', 'MAIL': 'no label', 'TEL': 'no label', 'SITE INTERNET': 'no label', 'CC': 'no label', 'SIRET': 'no label', 'result_label': 'no label', 'result_score': 'no label', 'result_score_next': 'no label', 'result_type': 'no label', 'result_id': 'no label', 'result_housenumber': 'no label', 'result_name': 'no label', 'result_street': 'no label', 'result_postcode': 'no label', 'result_city': 'no label', 'result_context': 'no label', 'result_citycode': 'no label', 'result_oldcitycode': 'no label', 'result_oldcity': 'no label', 'result_district': 'no label', 'result_status': 'no label', });
lyr_Fournisseuralimentairegeocoded_3.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'RAISON SOCIALE': 'no label', 'TYPE DE FOURNISSEUR': 'no label', 'PRODUITS VENDUS': 'no label', 'BOISSON': 'no label', 'CONTACT': 'no label', 'MAIL': 'no label', 'TEL': 'no label', 'SITE INTERNET': 'no label', 'ADRESSE': 'no label', 'CP': 'no label', 'VILLE': 'no label', 'SIRET': 'no label', 'COMPTE SYDEL': 'no label', 'result_label': 'no label', 'result_score': 'no label', 'result_score_next': 'no label', 'result_type': 'no label', 'result_id': 'no label', 'result_housenumber': 'no label', 'result_name': 'no label', 'result_street': 'no label', 'result_postcode': 'no label', 'result_city': 'no label', 'result_context': 'no label', 'result_citycode': 'no label', 'result_oldcitycode': 'no label', 'result_oldcity': 'no label', 'result_district': 'no label', 'result_status': 'no label', });
lyr_COMCOM_PCH_4.set('fieldLabels', {'SOURCE': 'no label', 'NOM': 'no label', 'CODE_INSEE': 'no label', 'STATUT': 'no label', 'CANTON': 'no label', 'ARROND': 'no label', 'DEPART': 'no label', 'REGION': 'no label', 'POPULATION': 'no label', 'MULTI_CANT': 'no label', 'COMMUNES_C': 'no label', 'COMMUNES_1': 'no label', 'NOM_COMCOM': 'no label', });
lyr_COMCOM_PCH_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});