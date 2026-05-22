function showMood(id){
    const playlists = document.querySelectorAll('.playlist');
    playlists.forEach(p=>p.style.display='none');
    const el = document.getElementById(id);
    if(el) el.style.display='block';
    updateAllButtons();
}

function getFavourites(){
    const fav = localStorage.getItem('favourites');
    return fav ? JSON.parse(fav) : [];
}

function saveFavourites(favourites){
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

function isSongFavourite(title, url){
    const favourites = getFavourites();
    return favourites.some(song => song.title === title && song.url === url);
}

function addToFavourites(title, url){
    const favourites = getFavourites();
    
    if(favourites.length >= 5){
        showNotification('Cannot add song: you have 5 favourite songs already', 'error');
        return false;
    }
    
    if(isSongFavourite(title, url)){
        showNotification('This song is already in your favourites', 'warning');
        return false;
    }
    
    favourites.push({ title, url });
    saveFavourites(favourites);
    showNotification('✓ Song added to favourites', 'success');
    updateAllButtons();
    return true;
}

function removeFromFavourites(title, url){
    const favourites = getFavourites();
    const index = favourites.findIndex(song => song.title === title && song.url === url);
    
    if(index === -1){
        showNotification('Song is not in your favourites', 'error');
        return false;
    }
    
    favourites.splice(index, 1);
    saveFavourites(favourites);
    showNotification('✓ Song removed from favourites', 'success');
    updateAllButtons();
    return true;
}

function showNotification(message, type = 'success'){
    let notif = document.getElementById('notification');
    
    if(!notif){
        notif = document.createElement('div');
        notif.id = 'notification';
        document.body.insertBefore(notif, document.body.firstChild);
    }
    
    notif.textContent = message;
    notif.className = 'notification ' + type;
    notif.classList.add('show');
    
    setTimeout(() => {
        notif.classList.remove('show');
    }, 3000);
}

function updateAllButtons(){
    const favourites = getFavourites();
    const isFull = favourites.length >= 5;
    const buttons = document.querySelectorAll('.song-button-group');
    
    buttons.forEach(btn => {
        const title = btn.getAttribute('data-title');
        const url = btn.getAttribute('data-url');
        const addBtn = btn.querySelector('.add-btn');
        const removeBtn = btn.querySelector('.remove-btn');
        
        if(!addBtn || !removeBtn) return;
        
        const isFav = isSongFavourite(title, url);
        
        if(isFav){
            removeBtn.classList.remove('disabled');
            removeBtn.style.opacity = '1';
            removeBtn.style.cursor = 'pointer';
        } else {
            removeBtn.classList.add('disabled');
            removeBtn.style.opacity = '0.3';
            removeBtn.style.cursor = 'not-allowed';
        }
        
        if(isFav){
            addBtn.classList.add('disabled');
            addBtn.style.opacity = '0.3';
            addBtn.style.cursor = 'not-allowed';
        } else if(isFull){
            addBtn.classList.add('disabled');
            addBtn.style.opacity = '0.3';
            addBtn.style.cursor = 'not-allowed';
        } else {
            addBtn.classList.remove('disabled');
            addBtn.style.opacity = '1';
            addBtn.style.cursor = 'pointer';
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    updateAllButtons();
});