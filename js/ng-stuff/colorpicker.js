//Picker 1
var picker1 = new YAHOO.widget.ColorPicker("container1", {
    showcontrols: false,
    showhexcontrols: false,
    showhexsummary: false,
    showhsvcontrols: false,
    showrgbcontrols: false,
    showwebsafe: false,
    images: {
        PICKER_THUMB: "picker_thumb.png",
        HUE_THUMB: "hue_thumb.png"
    }
});

//Picker2
var picker2 = new YAHOO.widget.ColorPicker("container2", {
    showcontrols: false,
    showhexcontrols: false,
    showhexsummary: false,
    showhsvcontrols: false,
    showrgbcontrols: false,
    showwebsafe: false,
    images: {
        PICKER_THUMB: "picker_thumb.png",
        HUE_THUMB: "hue_thumb.png"
    }
});

//Picker3
var picker3 = new YAHOO.widget.ColorPicker("container3", {
    showcontrols: false,
    showhexcontrols: false,
    showhexsummary: false,
    showhsvcontrols: false,
    showrgbcontrols: false,
    showwebsafe: false,
    images: {
        PICKER_THUMB: "picker_thumb.png",
        HUE_THUMB: "hue_thumb.png"
    }
});

//Picker1 change color
var onRgbChange1 = function(o) {
    txtcolor1 = o.newValue;
    endcolor1 = "rgb("+txtcolor1+")";
    document.getElementsByClassName('maincontent')[0].style.color=endcolor1;

}

//Picker2 change color
var onRgbChange2 = function(o) {
    txtcolor2 = o.newValue;
    endcolor2 = "rgb("+txtcolor2+")";
    document.getElementsByClassName('maincontent')[0].style.backgroundColor=endcolor2;

}

//Picker3 change color
var onRgbChange3 = function(o) {
    txtcolor3 = o.newValue;
    endcolor3 = "rgb("+txtcolor3+")";
    document.getElementsByTagName('body')[0].style.backgroundColor=endcolor3;

}

//Picker1 call change method
picker1.on("rgbChange", onRgbChange1);

//Picker2 call change method
picker2.on("rgbChange", onRgbChange2);

//Picker3 call change method
picker3.on("rgbChange", onRgbChange3);

//Reset Picker1 & Picker2
YAHOO.util.Event.on("reset", "click", function(e) {
    picker1.setValue([255, 255, 255], false);
    picker2.setValue([0, 142, 116], false);
    picker3.setValue([178, 224, 151], false);
});