// Dead Strike - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Dead Strike loaded successfully!');
    
    const actionBtn = document.getElementById('action-btn');
    
    if (actionBtn) {
        actionBtn.addEventListener('click', function() {
            alert('Welcome to Dead Strike! 🚀');
        });
    }
});
