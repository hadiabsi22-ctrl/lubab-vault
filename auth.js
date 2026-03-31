// Authentication Management System
// Handles user sessions, remember me functionality, and auto-logout

class AuthManager {
    constructor() {
        this.SESSION_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
        this.init();
    }

    init() {
        this.checkSession();
        this.setupAutoLogout();
    }

    // Check if user session is still valid
    checkSession() {
        const currentUser = localStorage.getItem('lubab_current_user');
        if (!currentUser) {
            return false;
        }

        try {
            const userData = JSON.parse(currentUser);
            
            // If session has timestamp, check if it's expired
            if (userData.loginTime) {
                const now = Date.now();
                const sessionAge = now - userData.loginTime;
                
                // If session is older than 30 days, logout
                if (sessionAge > this.SESSION_DURATION) {
                    this.logout();
                    return false;
                }
                
                // If user didn't choose "remember me", logout after 1 hour
                if (!userData.rememberMe && sessionAge > (60 * 60 * 1000)) {
                    this.logout();
                    return false;
                }
            }
            
            return true;
        } catch (error) {
            console.error('Error checking session:', error);
            this.logout();
            return false;
        }
    }

    // Setup auto-logout check
    setupAutoLogout() {
        // Check session every 5 minutes
        setInterval(() => {
            this.checkSession();
        }, 5 * 60 * 1000);
    }

    // Logout user
    logout() {
        localStorage.removeItem('lubab_current_user');
        localStorage.removeItem('lubab_remember_me');
        
        // Redirect to login if not already there
        if (!window.location.href.includes('login.html')) {
            window.location.href = 'login.html';
        }
    }

    // Get current user
    getCurrentUser() {
        if (!this.checkSession()) {
            return null;
        }

        try {
            const userData = JSON.parse(localStorage.getItem('lubab_current_user'));
            return userData;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }

    // Update UI based on auth status
    updateAuthUI() {
        const user = this.getCurrentUser();
        const loginBtns = document.querySelectorAll('a[href="login.html"]');
        
        if (user && loginBtns.length > 0) {
            loginBtns.forEach(btn => {
                btn.textContent = user.name;
                btn.href = 'dashboard.html';
            });
        }
    }
}

// Create global auth manager instance
const authManager = new AuthManager();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}
