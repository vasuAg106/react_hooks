import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  const [status, setStatus] = useState("Delivered");

  return (
    <div>
      <h1>Item is {status}.</h1>
      <button onClick={() => setStatus("not delivered")}>Change state</button>
    </div>
  );
}
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
