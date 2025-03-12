import { Header } from "./components/Header";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-70px)]">
        <Login />
      </main>
      <Footer />
    </>
  );
}

export default App;
