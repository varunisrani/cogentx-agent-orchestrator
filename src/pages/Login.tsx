import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Define the form schema with Zod
const formSchema = z.object({
  email: z.string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z.string()
    .min(6, { message: "Password must be at least 6 characters" })
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  
  // Initialize react-hook-form with zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log("Login attempt with:", data.email);
    // In a real application, you would handle authentication here
    // For now, we'll just log the attempt and redirect to home
    alert("Login functionality will be implemented in a future update.");
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-cogent-dark">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card className="border border-white/10 bg-black/20 backdrop-blur-sm shadow-xl">
            <CardHeader className="space-y-2">
              <div className="flex justify-center mb-2">
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">CogentX</span>
              </div>
              <CardTitle className="text-2xl font-bold text-center">Sign in to your account</CardTitle>
              <CardDescription className="text-center text-gray-400">
                Enter your credentials below to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email" 
                            className="bg-background/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="••••••••" 
                            type="password" 
                            className="bg-background/50"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-600 bg-background/50 text-cogent-orange focus:ring-cogent-orange"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-cogent-orange hover:text-cogent-orange-hover">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full mt-6 bg-cogent-orange hover:bg-cogent-orange-hover transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
            <div className="px-6 py-2">
              <Separator className="bg-white/10" />
            </div>
            <CardFooter className="flex justify-center pt-2 pb-6">
              <div className="text-sm text-center text-muted-foreground">
                Don't have an account?{" "}
                <a href="#" className="text-cogent-orange hover:text-cogent-orange-hover hover:underline">
                  Create one
                </a>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;