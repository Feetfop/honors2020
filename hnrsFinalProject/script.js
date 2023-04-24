const videolinks = ["https://www.youtube.com/watch?v=ykyNVb904sY&t=853s", "https://www.youtube.com/watch?v=25vhFI9MBmM", "https://www.youtube.com/watch?v=oUPRwfb37sM", "https://www.youtube.com/watch?v=K3OFzBEZuyM&t=1567s"];
var videonum = 0

function setInvisible() {
    document.getElementById('vid2').hidden = true
    document.getElementById('vid3').hidden = true
    document.getElementById('vid4').hidden = true
}

function nextVideo() {
    if (videonum <= 3) {
        videonum = videonum + 1
    } else {
        videonum = 0
    }
    document.getElementById('frame').src = videolinks(videonum)
    
}
