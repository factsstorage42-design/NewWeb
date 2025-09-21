// ====== ADMIN LOGIN ======
const adminBtn = document.getElementById('adminBtn');
const loginBox = document.getElementById('loginBox');
const loginBtn = document.getElementById('loginBtn');
const adminPassword = document.getElementById('adminPassword');
const loginMsg = document.getElementById('loginMsg');
const adminDashboard = document.getElementById('adminDashboard');
const mainPage = document.getElementById('mainPage');
const logoutBtn = document.getElementById('logoutBtn');

const headerImage = document.getElementById('headerImage');
const adminHeaderPreview = document.getElementById('adminHeaderPreview');
const adminLogoPreview = document.getElementById('adminLogoPreview');

const imageInput = document.getElementById('imageInput');
const logoInput = document.getElementById('logoInput');
const ottInput = document.getElementById('ottInput');

const ottSlider = document.getElementById('ottSlider');
const ottAdminControls = document.getElementById('ottAdminControls');
const addOttBtn = document.getElementById('addOttBtn');

// Admin Login Toggle
adminBtn.addEventListener('click', () => {
    loginBox.style.display = loginBox.style.display==='block'?'none':'block';
    loginMsg.style.display='none';
