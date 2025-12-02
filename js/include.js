const repoName = "";

// Load Navbar
fetch(`/components/navbar.html`)
    .then(res => res.text())
    .then(data => {
        const el = document.getElementById("navbar-placeholder");
        if (el) el.innerHTML = data;
    });

// Load Footer
fetch(`/components/footer.html`)
    .then(res => res.text())
    .then(data => {
        const el = document.getElementById("footer-placeholder");
        if (el) el.innerHTML = data;
    });
