// authService.ts
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const authenticate = async (username: string, password: string): Promise<string> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();
  const user = users.find((u) => u.username === username && u.email === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return 'dummy_token';
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const clearAuthToken = () => {
  localStorage.removeItem('token');
};
