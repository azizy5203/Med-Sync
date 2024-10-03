import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="w-1/2 mx-auto h-full">
      <h1 className="text-background">Login</h1>
      <Input
        type="email"
        placeholder="Email"
      />
    </div>
  );
}

export default Login;
