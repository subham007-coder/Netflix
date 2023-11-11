function showVideo() {
    document.getElementById('video-modal').style.display = 'block';
}

function hideVideo() {
    document.getElementById('video-modal').style.display = 'none';
}

function showDetails(title) {
    document.getElementById('details-title').innerText = title;
    document.getElementById('details-modal').style.display = 'block';
}

function hideDetails() {
    document.getElementById('details-modal').style.display = 'none';
}

// Close modals when clicking outside the content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
};
