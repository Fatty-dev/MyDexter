import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import BlogPost from "./pages/Dashboard/BlogPost/BlogPost";
import LandingpageLayout from "./components/Layout/LandingpageLayout";
import Home from "./pages/LandingPage/Home/Home";
import Gettingstarted from "./pages/LandingPage/Gettingstarted/Gettingstarted";
import FAQ from "./pages/LandingPage/FAQ/FAQ";
import Pricing from "./pages/LandingPage/Pricing/Pricing";
import Blog from "./pages/LandingPage/Blog/Blog";
import BlogDetails from "./pages/LandingPage/Blog/BlogDetails";
import Privacy from "./pages/LandingPage/Privacy";
import Contact from "./pages/LandingPage/Contact/Contact";
import Login from "./pages/Onboard/Login";
import Signup from "./pages/Onboard/Signup";
import DashboardLayout from "./components/Dashboardcomp/DashboardLayout";
import Prompt from "./pages/Dashboard/DexterAI/Prompt";
import SuccessModal from "./components/Common/Modals/SuccessModal";
import ChatBubblePage from "./pages/Dashboard/DexterAI/ChatBubble";
import Settings from "./pages/Dashboard/Settings/Settings";
import PostDetails from "./pages/Dashboard/BlogPost/PostDetails";
import PostSettings from "./pages/Dashboard/BlogPost/postSettings/PostSettings";
import BulkArticle from "./pages/Dashboard/BlogPost/BulkArticle/BulkArticle";
import BlogLoading from "./pages/Dashboard/BlogPost/BlogLoading";
import Overview from "./pages/Dashboard/Overview/Overview";
import Strategies from "./pages/Dashboard/Strategies/Strategies";
import Analytics from "./pages/Dashboard/Analytics/Analytics";
import { ModalProvider } from "./lib/contexts/modal-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <QueryClientProvider client={queryClient}>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingpageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="getting-started" element={<Gettingstarted />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog-details" element={<BlogDetails />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="contact" element={<Contact />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Nested Routes under Dashboard */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="" element={<Prompt />} />
                <Route path="success" element={<SuccessModal isOpen />} />

                <Route path="chat/:chatId" element={<ChatBubblePage />} />
                <Route path="settings" element={<Settings />} />

                <Route path="blog-post" element={<BlogPost />} />
                <Route path="blog-post/:postId" element={<PostDetails />} />
                <Route
                  path="blog-post/:postId/settings"
                  element={<PostSettings />}
                />

                <Route path="bulk-article" element={<BulkArticle />} />
                <Route path="blog-loading" element={<BlogLoading />} />

                <Route path="overview" element={<Overview />} />
                <Route path="strategies" element={<Strategies />} />
                <Route path="analytics" element={<Analytics />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalProvider>

        <Toaster position="top-right" />
        <ReactQueryDevtools client={queryClient} />
      </QueryClientProvider>
    </FormProvider>
  );
};

export default App;
