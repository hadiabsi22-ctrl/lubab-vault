// Supabase Global Configuration - Technical Handover
// This file contains the unified supabase client configuration
// Use this file in all HTML pages to avoid declaration conflicts

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // استخدام var أو window لتجنب تعارض النطاقات في الصفحات المتعددة
    if (typeof window.supabaseClient === 'undefined') {
        window.supabaseClient = supabase.createClient(
            'https://fyydjnzmpjwtedrzbzck.supabase.co',
            'sb_publishable_YBDpVlQXcEazTGb-_Aj1Uw_ZIC0YYfO'
        );
    }
    
    // Make supabase available globally
    window.supabase = window.supabaseClient;
    
    console.log('Supabase client initialized successfully');
});

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.supabaseClient;
}
