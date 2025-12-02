import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-8">
      {/* Logos */}
      <div className="flex gap-10 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="w-24 transition-transform hover:scale-110"
            alt="Vite logo"
          />
        </a>

        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-24 transition-transform hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setCount((c) => c + 1)}
        >
          count is {count}
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Edit <code className="font-mono text-blue-600">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Footer text */}
      <p className="mt-6 text-gray-500">
        Click the logos above to learn more
      </p>
    </div>
  );
}

export default App;
