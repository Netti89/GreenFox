$('#FirstButton').click(function () {console.log("Yeah,you clicked me.");});
$('#SecondButton').click(function () {$('#FirstButton').text('You clicked on the Second Button.')});
$('#ThirdButton').click(() => {$('button').css('background','green');});

$('#text').val('blue');
var color;
$('#last').click(function() {
    color = $('#text').val();
    {$('button').css('background',`${color}`);}
});

