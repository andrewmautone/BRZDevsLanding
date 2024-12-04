import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import Router from "preact-router";
import Header from "./components/header.tsx";
import Contact from "./contact.tsx";
import { useEffect } from "preact/hooks";

declare global {
  interface Window {
    Tawk_API: any;
    gtag: any;
  }
}

const Main = () => (
  useEffect(() => {
    window.Tawk_API.onChatMessageVisitor(() => {
      window.gtag("event", "conversion", { send_to: "AW-16805749542/Jfq-CMOh0vIZEKbGzc0-" });
    });
  }, []),
  (
    <div class="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style="font-family: Manrope, 'Noto Sans', sans-serif">
      <div class="layout-container flex h-full grow flex-col">
        <Header />
        <Router>
          <App path="/" />
          <Contact path="/contact" />
        </Router>
      </div>
    </div>
  )
);

render(<Main />, document.getElementById("app")!);
