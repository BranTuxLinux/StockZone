"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input onChange={handleChange} name="password" type="password" />
        <button>Click</button>
      </form>
    </div>
  );
}
