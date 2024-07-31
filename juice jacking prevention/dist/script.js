document.addEventListener("DOMContentLoaded", function() {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('main');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    window.showSection = showSection;

    window.scanForThreats = function() {
        alert("Scanning for threats...");
        // Implement threat scanning logic here
    };

    window.otherRelevantActions = function() {
        alert("Performing other relevant actions...");
        // Implement other relevant actions logic here
    };

    window.viewAlertDetails = function(alertId) {
        alert(`Viewing details for alert ${alertId}...`);
        // Implement view alert details logic here
    };

    window.dismissAlert = function(alertId) {
        alert(`Dismissing alert ${alertId}...`);
        // Implement dismiss alert logic here
    };

    window.resolveAllAlerts = function() {
        alert("Resolving all alerts...");
        // Implement resolve all alerts logic here
    };

    window.submitFeedback = function(event) {
        event.preventDefault();
        alert("Feedback submitted. Thank you!");
        event.target.reset();
    };

    window.configureSecuritySettings = function() {
        alert("Configuring security settings...");
        // Implement configure security settings logic here
    };

    window.saveSettings = function() {
        const alertPreferences = document.getElementById('alerts').checked;
        const accountName = document.getElementById('account-name').value;
        const accountEmail = document.getElementById('account-email').value;
        alert(`Settings saved. Alert Preferences: ${alertPreferences ? 'On' : 'Off'}, Name: ${accountName}, Email: ${accountEmail}`);
        // Implement save settings logic here
    };
});