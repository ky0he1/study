function time(){
    var time = document.getElementById('time');
    var zone = document.getElementById('zone');
    var body = document.body;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var tStr = year + '/' + month + '/' + date;
    var timer = new Date(tStr);             // その日の0時0分をセット
    var morning = timer.setHours(4);        // 朝4時
    var noon = timer.setHours(10);          // 昼10時
    var evening = timer.setHours(16);       // 夕16時
    var night = timer.setHours(19);         // 夜19時
    if (now >= morning && now < noon) {
        time.style.color = 'yellow';         // 朝
        zone.innerHTML = '朝';
        zone.style.color = 'yellow';
    } else if (now >= noon && now < evening) {
        time.style.color = 'red';            // 昼
        zone.innerHTML = '昼';
        zone.style.color = 'red';
    } else if (now >= evening && now < night) {
        time.style.color = 'orange';         // 夕
        zone.innerHTML = '夕';
        zone.style.color = 'orange'
    } else if (now >= night || now < morning) {
        time.style.color = 'black';          // 夜
        zone.innerHTML = '夜';
        zone.style.color = 'black';
    }
    document.getElementById("time").innerHTML = now.toLocaleString();
}
setInterval('time()',1000);
