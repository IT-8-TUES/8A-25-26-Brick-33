const dialog = document.getElementById('popup');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');


openBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});

const allVoteButtons = document.querySelectorAll('.vote-btn');

allVoteButtons.forEach((voteBtn, index) => {
    const storageKey = `song_vote_state_${index}`;
    let hasVoted = localStorage.getItem(storageKey) === 'true';
    
    // Set initial layout state from memory
    if (hasVoted) {
        voteBtn.innerText = 'Voted';
        voteBtn.className = 'vote-btn voted';
    } else {
        voteBtn.innerText = 'Vote';
        voteBtn.className = 'vote-btn not-voted';
    }

    voteBtn.addEventListener('click', () => {
        if (!hasVoted) {
            voteBtn.innerText = 'Voted';
            voteBtn.className = 'vote-btn voted';
            hasVoted = true;
            localStorage.setItem(storageKey, 'true'); 
        } else {
            voteBtn.innerText = 'Vote';
            voteBtn.className = 'vote-btn not-voted';
            hasVoted = false;
            localStorage.setItem(storageKey, 'false'); 
        }
    });
});