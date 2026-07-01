"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <>
      <div>
        <h1> Login </h1>
        <p>Sing in to your account</p>
        <div>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <p>Forgot password</p>
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}
