import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppTwo from "./AppTwo.jsx";
import AppTree from "./components/AppTree.jsx";
import TanstackQuery1 from "./components/TanstackQuery1.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackQuery2 from "./components/TanstackQuery2.jsx";
import TanstackQuery3 from "./components/TanstackQuery3.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    {/* queryClientProvider nos dá acesso a todas as funções e estrutra de dados do react-query */}
    {/* <App /> */}
    {/* <AppTwo /> */}
    <AppTree />
    {/* <TanstackQuery1 /> */}
    {/* <TanstackQuery2 />  */}
    {/* <TanstackQuery3 /> */}
  </QueryClientProvider>,
);
