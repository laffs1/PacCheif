gdjs.PacCheifCode = {};
gdjs.PacCheifCode.localVariables = [];
gdjs.PacCheifCode.GDNewSpriteObjects1= [];
gdjs.PacCheifCode.GDNewSpriteObjects2= [];
gdjs.PacCheifCode.GDStartObjects1= [];
gdjs.PacCheifCode.GDStartObjects2= [];
gdjs.PacCheifCode.GDSettingsObjects1= [];
gdjs.PacCheifCode.GDSettingsObjects2= [];


gdjs.PacCheifCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.PacCheifCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PacCheifCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.PacCheifCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PacCheifCode.GDStartObjects1[k] = gdjs.PacCheifCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.PacCheifCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.PacCheifCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PacCheifCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.PacCheifCode.GDSettingsObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PacCheifCode.GDSettingsObjects1[k] = gdjs.PacCheifCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.PacCheifCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Song Menu", false);
}}

}


};

gdjs.PacCheifCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PacCheifCode.GDNewSpriteObjects1.length = 0;
gdjs.PacCheifCode.GDNewSpriteObjects2.length = 0;
gdjs.PacCheifCode.GDStartObjects1.length = 0;
gdjs.PacCheifCode.GDStartObjects2.length = 0;
gdjs.PacCheifCode.GDSettingsObjects1.length = 0;
gdjs.PacCheifCode.GDSettingsObjects2.length = 0;

gdjs.PacCheifCode.eventsList0(runtimeScene);
gdjs.PacCheifCode.GDNewSpriteObjects1.length = 0;
gdjs.PacCheifCode.GDNewSpriteObjects2.length = 0;
gdjs.PacCheifCode.GDStartObjects1.length = 0;
gdjs.PacCheifCode.GDStartObjects2.length = 0;
gdjs.PacCheifCode.GDSettingsObjects1.length = 0;
gdjs.PacCheifCode.GDSettingsObjects2.length = 0;


return;

}

gdjs['PacCheifCode'] = gdjs.PacCheifCode;
