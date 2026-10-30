import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackLink from "./back-link";

// Toasts are only used by the tools, so their styles load here instead of on every page.
export default function ToolsLayout({ children }) {
  return (
    <div className="wrap py-10 md:py-14">
      <BackLink />
      {children}
      <ToastContainer position="bottom-right" />
    </div>
  );
}
