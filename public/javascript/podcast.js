// Instantiate a slider
var mySlider = new Slider("input.slider", {
    // initial options object
});

// Call a method on the slider
var value = mySlider.getValue();

// For non-getter methods, you can chain together commands
mySlider
    .setValue(5)
    .setValue(7);

    // Instantiate a slider
var mySlider = $("input.slider").bootstrapSlider();
 
// Call a method on the slider
var value = mySlider.bootstrapSlider('getValue');
 
// For non-getter methods, you can chain together commands
    mySlider
        .bootstrapSlider('setValue', 5)
        .bootstrapSlider('setValue', 7);