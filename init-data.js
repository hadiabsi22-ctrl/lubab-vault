// Initialize database with demo user
function initializeDatabase() {
    // Check if users exist
    let users = JSON.parse(localStorage.getItem('lubab_users') || '[]');
    
    // Always ensure demo user exists
    const demoUser = {
        id: '1',
        name: 'مستخدم تجريبي',
        email: 'user@example.com',
        password: 'password123',
        joinDate: '2024-01-01',
        avatar: 'https://ui-avatars.com/api/?name=مستخدم+تجريبي&background=8a0303&color=fff'
    };
    
    // Remove existing demo user if exists
    users = users.filter(u => u.email !== 'user@example.com');
    
    // Add demo user
    users.push(demoUser);
    
    // Save to localStorage
    localStorage.setItem('lubab_users', JSON.stringify(users));
    
    console.log('Database initialized with demo user:', demoUser);
    console.log('All users:', users);
    
    return users;
}

// Auto-initialize when script loads
initializeDatabase();
