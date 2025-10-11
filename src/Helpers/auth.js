// Helper functions for authentication

export const validateCredentials = (username, password) => {
  // Simple validation - in a real app, this would check against a database
  return username === "admin" && password === "admin";
};

export const saveUserData = (userData) => {
  // Save user data to localStorage (in a real app, this would be sent to a server)
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = () => {
  // Get user data from localStorage
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

export const clearUserData = () => {
  // Clear user data from localStorage
  localStorage.removeItem('userData');
};

export const isAuthenticated = () => {
  // Check if user is authenticated
  return getUserData() !== null;
};
