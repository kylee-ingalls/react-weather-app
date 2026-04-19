import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <p>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/kylee-ingalls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kylee Ingalls
          </a>
          , is open sourced on{" "}
          <a
            href="https://github.com/kylee-ingalls/react-weather-app/blob/main/src/main.jsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , and is hosted on{" "}
          <a
            href="https://weather-app-react-ki.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
