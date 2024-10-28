import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import '../public/css/global.css'
import Home from './pages/Home'
import Login from "./pages/auth/Login"

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "Login",
        element: <Login />,
    },
]);

// Rendering the app
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);

