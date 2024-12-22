gdjs.Song_32MenuCode = {};
gdjs.Song_32MenuCode.localVariables = [];
gdjs.Song_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Song_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1= [];
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects2= [];
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1= [];
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects2= [];
gdjs.Song_32MenuCode.GDHumanObjects1= [];
gdjs.Song_32MenuCode.GDHumanObjects2= [];
gdjs.Song_32MenuCode.GDATTIDObjects1= [];
gdjs.Song_32MenuCode.GDATTIDObjects2= [];
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1= [];
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects2= [];
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1= [];
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects2= [];
gdjs.Song_32MenuCode.GDThe_9595KillersObjects1= [];
gdjs.Song_32MenuCode.GDThe_9595KillersObjects2= [];
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1= [];
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects2= [];
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Song_32MenuCode.GDNewSprite2Objects1= [];
gdjs.Song_32MenuCode.GDNewSprite2Objects2= [];


gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDWhen_95959595you_95959595were_95959595youngObjects1Objects = Hashtable.newFrom({"When_you_were_young": gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDMr_95959595_95959595BrightsideObjects1Objects = Hashtable.newFrom({"Mr__Brightside": gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDHumanObjects1Objects = Hashtable.newFrom({"Human": gdjs.Song_32MenuCode.GDHumanObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDATTIDObjects1Objects = Hashtable.newFrom({"ATTID": gdjs.Song_32MenuCode.GDATTIDObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDSmile_95959595like_95959595you_95959595mean_95959595itObjects1Objects = Hashtable.newFrom({"Smile_like_you_mean_it": gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDJenny_95959595Was_95959595a_95959595Friend_95959595of_95959595MineObjects1Objects = Hashtable.newFrom({"Jenny_Was_a_Friend_of_Mine": gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1});
gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDRead_95959595My_95959595MindObjects1Objects = Hashtable.newFrom({"Read_My_Mind": gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1});
gdjs.Song_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDWhen_95959595you_95959595were_95959595youngObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
/* Reuse gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDMr_95959595_95959595BrightsideObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
/* Reuse gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDHumanObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
/* Reuse gdjs.Song_32MenuCode.GDHumanObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDATTIDObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Song_32MenuCode.GDATTIDObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Smile_like_you_mean_it"), gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDSmile_95959595like_95959595you_95959595mean_95959595itObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
/* Reuse gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1 */
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDJenny_95959595Was_95959595a_95959595Friend_95959595of_95959595MineObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
/* Reuse gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
gdjs.copyArray(runtimeScene.getObjects("Smile_like_you_mean_it"), gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(6);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1[i].setOutlineEnabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.Song_32MenuCode.mapOfGDgdjs_9546Song_959532MenuCode_9546GDRead_95959595My_95959595MindObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
/* Reuse gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Smile_like_you_mean_it"), gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(7);
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineColor("65;117;5");
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineEnabled(true);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineEnabled(false);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineEnabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ATTID"), gdjs.Song_32MenuCode.GDATTIDObjects1);
gdjs.copyArray(runtimeScene.getObjects("Human"), gdjs.Song_32MenuCode.GDHumanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jenny_Was_a_Friend_of_Mine"), gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mr__Brightside"), gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1);
gdjs.copyArray(runtimeScene.getObjects("Read_My_Mind"), gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1);
gdjs.copyArray(runtimeScene.getObjects("Smile_like_you_mean_it"), gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1);
gdjs.copyArray(runtimeScene.getObjects("When_you_were_young"), gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1);
{for(var i = 0, len = gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDHumanObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDHumanObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDATTIDObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDATTIDObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1[i].setOutlineThickness(5);
}
}{for(var i = 0, len = gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length ;i < len;++i) {
    gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1[i].setOutlineThickness(5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PacCheif", false);
}}

}


};

gdjs.Song_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Song_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Song_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length = 0;
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects2.length = 0;
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length = 0;
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects2.length = 0;
gdjs.Song_32MenuCode.GDHumanObjects1.length = 0;
gdjs.Song_32MenuCode.GDHumanObjects2.length = 0;
gdjs.Song_32MenuCode.GDATTIDObjects1.length = 0;
gdjs.Song_32MenuCode.GDATTIDObjects2.length = 0;
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length = 0;
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects2.length = 0;
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length = 0;
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects2.length = 0;
gdjs.Song_32MenuCode.GDThe_9595KillersObjects1.length = 0;
gdjs.Song_32MenuCode.GDThe_9595KillersObjects2.length = 0;
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length = 0;
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects2.length = 0;
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Song_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Song_32MenuCode.GDNewSprite2Objects2.length = 0;

gdjs.Song_32MenuCode.eventsList0(runtimeScene);
gdjs.Song_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Song_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects1.length = 0;
gdjs.Song_32MenuCode.GDWhen_9595you_9595were_9595youngObjects2.length = 0;
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects1.length = 0;
gdjs.Song_32MenuCode.GDMr_9595_9595BrightsideObjects2.length = 0;
gdjs.Song_32MenuCode.GDHumanObjects1.length = 0;
gdjs.Song_32MenuCode.GDHumanObjects2.length = 0;
gdjs.Song_32MenuCode.GDATTIDObjects1.length = 0;
gdjs.Song_32MenuCode.GDATTIDObjects2.length = 0;
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects1.length = 0;
gdjs.Song_32MenuCode.GDSmile_9595like_9595you_9595mean_9595itObjects2.length = 0;
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects1.length = 0;
gdjs.Song_32MenuCode.GDJenny_9595Was_9595a_9595Friend_9595of_9595MineObjects2.length = 0;
gdjs.Song_32MenuCode.GDThe_9595KillersObjects1.length = 0;
gdjs.Song_32MenuCode.GDThe_9595KillersObjects2.length = 0;
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects1.length = 0;
gdjs.Song_32MenuCode.GDRead_9595My_9595MindObjects2.length = 0;
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Song_32MenuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Song_32MenuCode.GDNewSprite2Objects1.length = 0;
gdjs.Song_32MenuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['Song_32MenuCode'] = gdjs.Song_32MenuCode;
