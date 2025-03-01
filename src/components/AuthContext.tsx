interface User {
  username: string;
  email: string;
  isAdmin: boolean;
}

// ...existing code...

const login = async (username: string, password: string) => {
  // Simulate login - replace with actual API call
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find((u: User) => u.username === username);
  
  if (user && user.password === password) {
    setUser({
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin || false // Add admin check
    });
    return true;
  }
  return false;
};

// ...existing code...
