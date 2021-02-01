function success(position){
    console.log.(position);
}

function errpr(){
    alert('Posisi Tidak Dapat Diakses')
}
function userlocation(){
    if(navigator.geolocation){
        alert('Geolocation Tidak Didukung');
    } else
    navigator.geolocation.getCurrentPosition(success, error);
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);
    userlocation();
}
    index();