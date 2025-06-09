import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "./components/ui/Loading";
import { Router } from "./general/Router";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense" />
        </PageWithHeader>
      }
    >
      <Router />
    </Suspense>
  </BrowserRouter>
);
