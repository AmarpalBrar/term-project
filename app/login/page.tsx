import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { handleLogin } from "../api";

export default async function LoginPage() {
  return (
  <main className="min-h-screen bg-gray-50 p-8">      
      <div className="max-w-2xl mx-auto">
       <form className="space-y-4" action={handleLogin}>
        <h1 className="text-3xl font-semibold text-gray-800 text-center">Login</h1>
     <Label htmlFor="username">Username</Label>
     <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              required
              className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-6 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium"
            />
    <Label htmlFor="password">Password</Label>
    <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              className="bg-white rounded-lg shadow-sm hover:shadow-md w-full p-6 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium"
            />
     <Button type="submit" className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Click me</Button>
     </form>
    </div>
    </main>
  );
}
