// import { response } from "express";
import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
      credentials: 'include'//This is important if you are using cookies for authentication
    });
  
  if (!response.ok) {
    // If the response wasn't in the 200-209 range
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }
  const data = await response.json();
  return data; // This typically includes the token and/or user data
  }
  catch (error) {
   // Re-throw the error to handle it in the component
   throw error instanceof Error ? error : new Error('Login failed'); 
  }
}

export { login };


  

    

  
