import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from 'react-helmet-async';
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import LocationPage from "@/pages/LocationPage";
import ServiceAreaPage from "@/pages/ServiceAreaPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/:slug" component={ServicePage} />
      <Route path="/areas/:slug" component={LocationPage} />
      <Route path="/service-area/:serviceSlug/:locationSlug" component={ServiceAreaPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Router />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
