$(document).ready(function() {
    $('#myContainer').multiscroll({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
        anchors: ['first', 'second', 'third','fourth'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['One', 'Two', 'Three','four'],
        loopBottom: true,
        loopTop: true
    });
});

