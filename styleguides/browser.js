jquery.on('click', function() {
    var self = this;
    var color = jquery(self).attr('color');
    var hex = '';

    switch (color) {
        case 'blue':
            hex = '#0000FF';
            break;
        case 'red':
            hex = '#FF0000';
            break;
        case 'green':
            hex = '#00FF00';
            break;
        default:
            hex = '#FFFFFF';
    }

    jquery('.custom-div').css('background-color', hex);

});
