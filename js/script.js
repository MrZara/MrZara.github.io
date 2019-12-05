function opensite() { /*функція виконання кнопоцьки*/
    var SN = document.getElementById('Season1').value; /*Змінні серії і сезона*/
    var SS = document.getElementById('Series2').value;
    if(SN>3){alert('Wrong Number of Season');} else if(SS>15){alert('Wrong Number of Series');}/*Умови для полів на 
    перевірку правильності серії і сезону*/ else {

    if(/[^[\d]/.test(SN)){alert('Letter in box Season');} else if(/[^[\d]/.test(SS)){alert('Letter in box Series');}/*умови 
    на перевірку чи не ввели буковку*/
      else {/*виконуєм дію відкриття сайта і додаєм перевірені змінні*/
    var site = 'https://rezka.ag/series/comedy/22632-grand-tur-2016.html#t:33-s:' + SN + '-e:' + SS;
  window.open(site, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=800");}}}




document.getElementById("Jeremy1").addEventListener("click", function() {
  alert("Jeremy Clarkson!");
});
 
document.getElementById("James1").addEventListener("click", function() {
  alert("James May!");
});

document.getElementById("Hammond1").addEventListener("click", function() {
  alert("Hammond Richard!");
});

window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });



const Series2 = document.querySelector('input[type="Series2"]');

Series2.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

Series2.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});


btn.addEventListener("click", function () {
    topbody.style.backgroundImage = 'url(img/top1.jpg)';
    this.style.visibility = 'hidden';
    btn1.style.visibility = 'visible';
    teamshow.style.background = 'gray';
    footer1.style.backgroundImage = 'url(img/end1.jpg)';
    header.style.color = 'Blue';
    topbody.style.color = 'Blue';
    teamshow.style.color = 'Blue';
    })

    btn1.addEventListener("click", function () {
    topbody.style.backgroundImage = 'url(img/top.jpg)';
    this.style.visibility = 'hidden';
    btn.style.visibility = 'visible';
    teamshow.style.background = 'white';
    footer1.style.backgroundImage = 'url(img/end.jpg)';
    header.style.color = 'white';
    topbody.style.color = 'white';
    teamshow.style.color = 'gray';
    })