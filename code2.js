gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGreenBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDGreenBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDGreenBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDGreenBackgroundObjects4= [];
gdjs.Game_32SceneCode.GDGreenBackgroundObjects5= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects5= [];
gdjs.Game_32SceneCode.GDCrateObjects1= [];
gdjs.Game_32SceneCode.GDCrateObjects2= [];
gdjs.Game_32SceneCode.GDCrateObjects3= [];
gdjs.Game_32SceneCode.GDCrateObjects4= [];
gdjs.Game_32SceneCode.GDCrateObjects5= [];
gdjs.Game_32SceneCode.GDStarObjects1= [];
gdjs.Game_32SceneCode.GDStarObjects2= [];
gdjs.Game_32SceneCode.GDStarObjects3= [];
gdjs.Game_32SceneCode.GDStarObjects4= [];
gdjs.Game_32SceneCode.GDStarObjects5= [];
gdjs.Game_32SceneCode.GDEnemyObjects1= [];
gdjs.Game_32SceneCode.GDEnemyObjects2= [];
gdjs.Game_32SceneCode.GDEnemyObjects3= [];
gdjs.Game_32SceneCode.GDEnemyObjects4= [];
gdjs.Game_32SceneCode.GDEnemyObjects5= [];
gdjs.Game_32SceneCode.GDcollectibleObjects1= [];
gdjs.Game_32SceneCode.GDcollectibleObjects2= [];
gdjs.Game_32SceneCode.GDcollectibleObjects3= [];
gdjs.Game_32SceneCode.GDcollectibleObjects4= [];
gdjs.Game_32SceneCode.GDcollectibleObjects5= [];
gdjs.Game_32SceneCode.GDWallCheckerObjects1= [];
gdjs.Game_32SceneCode.GDWallCheckerObjects2= [];
gdjs.Game_32SceneCode.GDWallCheckerObjects3= [];
gdjs.Game_32SceneCode.GDWallCheckerObjects4= [];
gdjs.Game_32SceneCode.GDWallCheckerObjects5= [];
gdjs.Game_32SceneCode.GDScoreObjects1= [];
gdjs.Game_32SceneCode.GDScoreObjects2= [];
gdjs.Game_32SceneCode.GDScoreObjects3= [];
gdjs.Game_32SceneCode.GDScoreObjects4= [];
gdjs.Game_32SceneCode.GDScoreObjects5= [];
gdjs.Game_32SceneCode.GDEnemySpawnObjects1= [];
gdjs.Game_32SceneCode.GDEnemySpawnObjects2= [];
gdjs.Game_32SceneCode.GDEnemySpawnObjects3= [];
gdjs.Game_32SceneCode.GDEnemySpawnObjects4= [];
gdjs.Game_32SceneCode.GDEnemySpawnObjects5= [];
gdjs.Game_32SceneCode.GDNewVideoObjects1= [];
gdjs.Game_32SceneCode.GDNewVideoObjects2= [];
gdjs.Game_32SceneCode.GDNewVideoObjects3= [];
gdjs.Game_32SceneCode.GDNewVideoObjects4= [];
gdjs.Game_32SceneCode.GDNewVideoObjects5= [];
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1= [];
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects2= [];
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects3= [];
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects4= [];
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects5= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11013468);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("idle down");
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11015188);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("walk up");
}
}}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11016916);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("walk down");
}
}}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11018324);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("walk left");
}
}}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11020444);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("walk right");
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects2Objects = Hashtable.newFrom({"Crate": gdjs.Game_32SceneCode.GDCrateObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallCheckerObjects1Objects = Hashtable.newFrom({"WallChecker": gdjs.Game_32SceneCode.GDWallCheckerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.Game_32SceneCode.GDCrateObjects1});
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11009100);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11009932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11010764);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("Down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11010876);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "None" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getCenterXInScene()),(( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getCenterYInScene()));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Up" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("Top")),(( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("Top")));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Down" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("Bottom")),(( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("Bottom")));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("Left")),(( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("Left")));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects2[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointX("Right")),(( gdjs.Game_32SceneCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects2[0].getPointY("Right")));
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.Game_32SceneCode.GDCrateObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.Game_32SceneCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallCheckerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("None");
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects4Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects4});
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "RandomMovement", 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects4 */
{gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects4Objects, "Pathfinding", 300, 600, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "FindingThePlayer", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects3 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getPointX("")), (( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getPointY("")));
}
}}

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11023804);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects3, gdjs.Game_32SceneCode.GDEnemyObjects4);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects4[i].getBehavior("Pathfinding").setMaxSpeed(100);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects4[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects3, gdjs.Game_32SceneCode.GDEnemyObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects4[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects4[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects4[k] = gdjs.Game_32SceneCode.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects4.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects3[k] = gdjs.Game_32SceneCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects3Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects3});
gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "RandomMovement", 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);

{gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects3Objects, "Pathfinding", 300, 600, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11029220);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].setColor("74;144;226");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].getBehavior("Pathfinding").setMaxSpeed(20);
}
}}

}


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects3[k] = gdjs.Game_32SceneCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{gdjs.evtsExt__TravelToRandomPositions__TravelToRandomPositions.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, "Pathfinding", 100, 200, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemySpawnObjects1Objects = Hashtable.newFrom({"EnemySpawn": gdjs.Game_32SceneCode.GDEnemySpawnObjects1});
gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.Game_32SceneCode.GDEnemySpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemySpawnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(2)).setBoolean(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").setMaxSpeed(100);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].setColor("255;255;255");
}
}}

}


};gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariables().getFromIndex(2), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(2), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects1[k] = gdjs.Game_32SceneCode.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, 640, 64);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].getBehavior("Pathfinding").setMaxSpeed(300);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcollectibleObjects2Objects = Hashtable.newFrom({"collectible": gdjs.Game_32SceneCode.GDcollectibleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDStarObjects2Objects = Hashtable.newFrom({"Star": gdjs.Game_32SceneCode.GDStarObjects2});
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11036244);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").setMaxSpeed(600);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PowerUpTime");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PowerUpTime") >= 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11037260);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}}

}


};gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11037876);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}}

}


};gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("collectible"), gdjs.Game_32SceneCode.GDcollectibleObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDcollectibleObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11032364);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDcollectibleObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDcollectibleObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDcollectibleObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32SceneCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects2[i].getBehavior("Text").setText("SCORE: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Star"), gdjs.Game_32SceneCode.GDStarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDStarObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11034268);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDStarObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDStarObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDStarObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(5);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs.Game_32SceneCode.GDEnemyObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects2});
gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDEnemyObjects2, gdjs.Game_32SceneCode.GDEnemyObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects3[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects3[k] = gdjs.Game_32SceneCode.GDEnemyObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDEnemyObjects2[k] = gdjs.Game_32SceneCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDEnemyObjects2[i].getVariables().getFromIndex(2)).setBoolean(true);
}
}}

}


};gdjs.Game_32SceneCode.mapOfEmptyGDcollectibleObjects = Hashtable.newFrom({"collectible": []});
gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Game_32SceneCode.GDEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfEmptyGDcollectibleObjects) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("B_to_walk_thru_wall"), gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemySpawn"), gdjs.Game_32SceneCode.GDEnemySpawnObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallChecker"), gdjs.Game_32SceneCode.GDWallCheckerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDWallCheckerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDWallCheckerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemySpawnObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemySpawnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1[i].hide();
}
}}

}


{


gdjs.Game_32SceneCode.eventsList5(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList12(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList15(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList17(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("KonamiCode").KC_Inputted((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11043540);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "killers-when_you_were_young.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11044748);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "The Killers - Mr. Brightside.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11045964);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Human.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11047204);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "killers-all_these_things_that_i_have_done.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11048412);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SmileLikeYouMeanIt.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 6;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11049620);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "JennyWasaFriendofMine.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 7;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11050828);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "ReadMyMind.WAV", false, 50, 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects1.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects2.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects3.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects4.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects5.length = 0;
gdjs.Game_32SceneCode.GDStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDStarObjects4.length = 0;
gdjs.Game_32SceneCode.GDStarObjects5.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects5.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects1.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects2.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects3.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects4.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects5.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects4.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects5.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects5.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects5.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects2.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects3.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects4.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects5.length = 0;

gdjs.Game_32SceneCode.eventsList18(runtimeScene);
gdjs.Game_32SceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDGreenBackgroundObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects1.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects2.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects3.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects4.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects5.length = 0;
gdjs.Game_32SceneCode.GDStarObjects1.length = 0;
gdjs.Game_32SceneCode.GDStarObjects2.length = 0;
gdjs.Game_32SceneCode.GDStarObjects3.length = 0;
gdjs.Game_32SceneCode.GDStarObjects4.length = 0;
gdjs.Game_32SceneCode.GDStarObjects5.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemyObjects5.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects1.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects2.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects3.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects4.length = 0;
gdjs.Game_32SceneCode.GDcollectibleObjects5.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallCheckerObjects5.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects4.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects5.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects4.length = 0;
gdjs.Game_32SceneCode.GDEnemySpawnObjects5.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewVideoObjects5.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects1.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects2.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects3.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects4.length = 0;
gdjs.Game_32SceneCode.GDB_9595to_9595walk_9595thru_9595wallObjects5.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
