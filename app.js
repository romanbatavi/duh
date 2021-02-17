function success(position){
    console.log(position);
}

function error(){
    alert('POSISI TIDAK DAPAT DIAKSES');
}

function userLocation(){
    if(!navigator.geolocation){
        alert('GEOLOCATION TIDAK DIDUKUNG');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);
    userLocation();
}
index();