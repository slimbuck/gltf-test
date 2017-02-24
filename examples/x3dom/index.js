var modelInfo = ModelIndex.getCurrentModel();
if (!modelInfo) {
    modelInfo = TutorialModelIndex.getCurrentModel();
}
if (!modelInfo) {
    document.getElementById('container').innerHTML = 'Please specify a model to load';
    throw new Error('Model not specified or not found in list.');
}


document.onload = function () {
    var shape = $("#gltf");
    var scale = modelInfo.scale;
    shape.attr({scale: scale + " " + scale + " " + scale});
    if (modelInfo.name == 'GearboxAssy') {
        document.querySelector('timesensor').remove();
        shape.attr({translation: "-159.20 -17.02 -3.21"});
    }
    shape.append("<ExternalShape id='exshape' url='../../" + modelInfo.category + "/" + modelInfo.path + "' />");
}
