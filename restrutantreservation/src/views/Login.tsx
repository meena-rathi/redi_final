import React, { useState } from 'react';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
  setUserName: (name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, setUserName }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User:', user); // Log the user object to inspect its properties

      if (user.displayName) {
        const userName: string = user.displayName;
        setUserName(userName);
        console.log('Username:', userName); // Log the username
      } else {
        console.log('Display name not set for this user.');
      }

      onLogin();
      navigate("/ReservationForm");
      console.log('User logged in:', user);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4 py-5 text-brown">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="mb-4 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="mb-1">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="mb-1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="mt-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;