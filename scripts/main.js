// Main JavaScript for LUBAB Digital Platform

// Check if user is already logged in
function checkAuthStatus() {
    const currentUser = localStorage.getItem('lubab_current_user');
    if (currentUser) {
        // User is logged in, redirect to dashboard
        window.location.href = '/dashboard.html';
    }
    // If not logged in, stay on index page (not login)
}

// Check auth status when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('LUBAB Digital Platform loaded!');
    checkAuthStatus();
});

// Handle navigation clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        console.log('Navigation button clicked:', e.target.textContent);
    }
});

export { checkAuthStatus };
