var countDownDate=Date.UTC(2022,01,11,13,00,00);var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById('targetData').innerHTML=days+'<span class="dayStr">&nbsp;day(s)</span> '+hours+'<span class="dayStr">&nbsp;:</span> '+minutes+'<span class="dayStr">&nbsp;:</span> '+seconds;if(distance<0){clearInterval(x);document.getElementById('targetData').innerHTML='EXPIRED';}},1000);