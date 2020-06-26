$('#FirstButton').click(function () {console.log("Yeah,you clicked me.");});
$('#SecondButton').click(function () {$('#FirstButton').text('You clicked on the Second Button.')});
$('#ThirdButton').click(() => {$('button').css('background','green');});