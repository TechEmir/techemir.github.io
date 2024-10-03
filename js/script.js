// COOKIE CONSENT
// Set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check for cookie consent
if (!getCookie('cookiesAccepted')) {
    document.getElementById('cookie-consent').style.display = 'block';
}

// Accept cookies
document.getElementById('accept-cookies').onclick = function() {
    setCookie('cookiesAccepted', 'true', 30); // Set cookie for 30 days
    document.getElementById('cookie-consent').style.display = 'none';
};

// Decline cookies
document.getElementById('decline-cookies').onclick = function() {
    setCookie('cookiesAccepted', 'declined', 30); // Set a decline cookie for 30 days
    document.getElementById('cookie-consent').style.display = 'none';
};
