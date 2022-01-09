window.onload = function () {
    var date = new Date();
    var hours = date.getHours();
    var dateNew = new Date();
    var minutes = dateNew.getMinutes();
    var ampm = hours >= 12 ? 'PM': 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
  
   
    var now = new Date()
    var curHr = now.getHours()
    let sayHi;
  
    if (curHr < 12) {
        sayHi = 'Good Morning, ';
    } else if (curHr < 18) {
        sayHi  = 'Good Afternoon, ';
    } else {
        sayHi= 'Good Evening, ';
    } 


    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = minutes + ampm;
    document.getElementById('goodDisplay').innerHTML = sayHi;

  };
  