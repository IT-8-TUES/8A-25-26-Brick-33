(function(){
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(p=>p.style.display='none');
    function showMood(id){
        playlists.forEach(p=>p.style.display='none');
        const el = document.getElementById(id);
        if(el) el.style.display='block';
        el && el.scrollIntoView({behavior:'smooth',block:'start'});
    }
    document.querySelectorAll('.mood-buttons button').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const mood = btn.getAttribute('data-mood');
            showMood(mood);
        });
    });
})();
