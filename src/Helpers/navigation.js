// Helper functions for navigation

export const navigateTo = (path) => {
  window.location.href = path;
};

export const goBack = () => {
  window.history.back();
};

export const goHome = () => {
  navigateTo('/');
};

export const goToLogin = () => {
  navigateTo('/login');
};

export const goToRegister = () => {
  navigateTo('/register');
};
