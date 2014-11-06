myAppModule.directive('ngColorPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'htmlColorPicker'
    },
    function link(scope, element, attrs) {

        //Picker1
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

        //Picker1 change color
        var onRgbChange1 = function(o) {
            txtcolor1 = o.newValue;
            endcolor1 = "rgb("+txtcolor1+")";
            document.getElementsByClassName('maincontent')[0].style.color=endcolor1;

        };

        //Picker1 call change method
        picker1.on("rgbChange", onRgbChange1);

        //Reset Picker1 & Picker2 & Picker3
        YAHOO.util.Event.on("reset", "click", function(e) {
            picker1.setValue([255, 255, 255], false);
        });
    };
});