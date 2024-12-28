document.getElementById('alertButton'). addEventListener('click', function() {
    alert("Ahmad Subhi Maezar is a dedicated student who loves learning new things! He is passionate about technology and enjoys participating in school activities.");
    this.classList.add('clicked');
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 300);
});
