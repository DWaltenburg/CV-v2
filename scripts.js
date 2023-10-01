function toggleTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        setTheme('light')
        localStorage.setItem('theme', 'light')
        document.getElementById('brandlogo').src = "Images/GitHubLogo.png"
        document.getElementById('cvIcon').src = "Images/cv-dark.png"
        document.getElementById('projectIcon').src = "Images/project-dark.png"
        document.getElementById('profileIcon').src = "Images/profile-dark.png"
        return
    } else {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        document.getElementById('brandlogo').src = "Images/GitHub-Mark-Light-120px-plus.png"
        document.getElementById('cvIcon').src = "Images/cv-light.png"
        document.getElementById('projectIcon').src = "Images/project-light.png"
        document.getElementById('profileIcon').src = "Images/profile-light.png"
        return
    }
}
const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById('brandlogo').src = "Images/GitHub-Mark-Light-120px-plus.png"
        document.getElementById('cvIcon').src = "Images/cv-light.png"
        document.getElementById('projectIcon').src = "Images/project-light.png"
        document.getElementById('profileIcon').src = "Images/profile-light.png"
        document.getElementById('themeToggler').checked = true
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
}
// setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'auto')