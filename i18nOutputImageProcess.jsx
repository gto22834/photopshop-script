#target photoshop

function findI18nFolder(layers, name) {
  for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];

      if (layer.typename === "LayerSet" && layer.name === "i18n") {
          return layer;
      }
  }
  return null;
}

function listLayersInFolder(folder) {
  var subLayers = folder.layers;
  var layerNames = [];
  for (var j = 0; j < subLayers.length; j++) {
      var subLayer = subLayers[j];
      layerNames.push(subLayer.name);
  }
  return layerNames;
}

function hideAllLayersInFolder(folder) {
  var subLayers = folder.layers;
  for (var j = 0; j < subLayers.length; j++) {
      subLayers[j].visible = false;
  }
}

function saveLayersAsFiles() {
    var doc = app.activeDocument;
    var outputFolder = Folder.selectDialog("選擇輸出文件夾");

    if (outputFolder == null) return;

    alert(doc.name);
    var layers = doc.layers;
    var i18nFolder = findI18nFolder(layers, "i18n");

    var i18nFolderLayers = i18nFolder.layers;
    for (var j = 0; j < i18nFolderLayers.length; j++) {
      // 隱藏所有圖層
      hideAllLayersInFolder(i18nFolder);
      // 顯示當前圖層
      i18nFolderLayers[j].visible = true;
      var filePath = outputFolder + '/' + i18nFolderLayers[j].name + ".png";
      var file = new File(filePath);
      var options = new ExportOptionsSaveForWeb();
      options.format = SaveDocumentType.PNG;
      options.PNG8 = false; // true 為 PNG-8, false 為 PNG-24
      options.transparency = true;
      options.interlaced = false;
      options.quality = 100;
      app.activeDocument.exportDocument(file, ExportType.SAVEFORWEB, options);
      // app.activeDocument.saveAs(file, options, true, Extension.LOWERCASE);
    }

    alert("圖層資料夾中的圖層已成功導出到" + outputFolder);
}

saveLayersAsFiles();
