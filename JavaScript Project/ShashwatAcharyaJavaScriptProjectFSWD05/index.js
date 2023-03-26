function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var d = date.getDay();
    var mo = date.getMonth();
    var y = date.getFullYear();
    


    //To convert  time into 12 hour format
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    

    //to add a "0" before every single digit value.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    mo = (mo < 10) ? "0" + mo : mo;
    

    //to create time variable
    var timeline = "Time: " + h + ":" + m + ":" + s + " " + session;
    var dayline =  "\n" + "\n" + "Date: " + d + " " + mo + " " + y;

    //to display time
    document.getElementById("timeline").innerText = timeline;
    document.getElementById("dayline").innerText = dayline;
    
    setTimeout(showTime, 10000000000);
    
}

showTime();