function showMood(id){
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(p=>p.style.display='none');
    const el = document.getElementById(id);
    if(el) el.style.display='block';
}
