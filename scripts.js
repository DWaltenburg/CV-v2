function toggleTheme() {
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
        setTheme('light')
        localStorage.setItem('theme', 'light')
        document.getElementById('brandlogo').src = "Images/GitHubLogo.png"
        document.getElementById('cvIcon').src = "https://img.icons8.com/ios/500/parse-from-clipboard.png"
        document.getElementById('projectIcon').src = "https://img.icons8.com/dotty/500/project-management.png"
        document.getElementById('profileIcon').src = "https://img.icons8.com/ios/500/user-male-circle--v2.png"
        return
    } else {
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        document.getElementById('brandlogo').src = "Images/GitHub-Mark-Light-120px-plus.png"
        document.getElementById('cvIcon').src = "https://img.icons8.com/ios/500/dee2e6/parse-from-clipboard.png"
        document.getElementById('projectIcon').src = "https://img.icons8.com/dotty/500/dee2e6/project-management.png"
        document.getElementById('profileIcon').src = "https://img.icons8.com/ios/500/dee2e6/user-male-circle--v2.png"
        return
    }
}
const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById('brandlogo').src = "Images/GitHub-Mark-Light-120px-plus.png"
        document.getElementById('cvIcon').src = "https://img.icons8.com/ios/500/dee2e6/parse-from-clipboard.png"
        document.getElementById('projectIcon').src = "https://img.icons8.com/dotty/500/dee2e6/project-management.png"
        document.getElementById('profileIcon').src = "https://img.icons8.com/ios/500/dee2e6/user-male-circle--v2.png"
        document.getElementById('themeToggler').checked = true
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }
}
// setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'auto')