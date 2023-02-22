import { Provider } from "react-redux";
// import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AccumulatedPage from "./pages/accumulated/AccumulatedPage";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div id="wrap">
        <Header />
        <AccumulatedPage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
