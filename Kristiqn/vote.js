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
    const storageKey = `song_vote_${index}`;
    let hasVoted = localStorage.getItem(storageKey) === 'true';
    let currentVotes = hasVoted ? 1 : 0;
    
    const voteCounter = voteBtn.nextElementSibling;
    if (hasVoted) {
        voteBtn.innerText = 'Voted';
        voteBtn.className = 'vote-btn voted';
        voteCounter.innerText = '1';
    } else {
        voteBtn.innerText = 'Vote';
        voteBtn.className = 'vote-btn not-voted';
        voteCounter.innerText = '0';
    }

  
    voteBtn.addEventListener('click', () => {
        if (!hasVoted) {
            voteBtn.innerText = 'Voted';
            voteBtn.className = 'vote-btn voted';
            currentVotes = 1; 
            hasVoted = true;
            localStorage.setItem(storageKey, 'true'); 
        } else {
            voteBtn.innerText = 'Vote';
            voteBtn.className = 'vote-btn not-voted';
            currentVotes = 0; 
            hasVoted = false;
            localStorage.setItem(storageKey, 'false'); 
        }
        voteCounter.innerText = currentVotes;
    });
});