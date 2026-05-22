function loadFavourites(){
    const favourites = getFavourites();
    const list = document.getElementById('favourites-list');
    const emptyMessage = document.getElementById('empty-message');
    
    list.innerHTML = '';
    
    if(favourites.length === 0){
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
        favourites.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'song-item fav-item';
            
            let songContent = '';
            if(song.url){
                songContent = `<a href="${song.url}" target="_blank">${song.title}</a>`;
            } else {
                songContent = song.title;
            }
            
            li.innerHTML = `
                <div class="song-content">
                    ${songContent}
                </div>
                <button class="song-btn remove-btn" onclick="removeFavouriteFromFavourites(${index})" title="Remove from favourites">🗑</button>
            `;
            
            list.appendChild(li);
        });
    }
}


function removeFavouriteFromFavourites(index){
    const favourites = getFavourites();
    if(index >= 0 && index < favourites.length){
        const song = favourites[index];
        favourites.splice(index, 1);
        saveFavourites(favourites);
        showNotification('✓ Song removed from favourites', 'success');
        loadFavourites();
    }
}

document.addEventListener('DOMContentLoaded', loadFavourites);