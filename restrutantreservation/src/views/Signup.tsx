import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Set the display name for the user
      await updateProfile(user, { displayName });
      console.log('User registered and profile updated:', user);
      navigate('/reservationform');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4 py-5 text-brown">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="displayName" className="mb-1">Display Name</label>
              <input type="text" className="form-control" id="displayName" value={displayName}
              onChange={(e) => setDisplayName(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" className="form-control" id="email" value={email}
              onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="mb-1">Password</label>
              <input type="password" className="form-control" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;