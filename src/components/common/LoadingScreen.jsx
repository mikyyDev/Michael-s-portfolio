import { Sparkles } from "lucide-react";

function LoadingScreen() {
  return (
    <div
      className="loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loading-content">
        <div className="loading-logo">
          <Sparkles size={30} />
        </div>
        <h1>Michael Alula</h1>
        <p>Building intelligent experiences...</p>
        <div className="loading-bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
