import Header from "./components/Header";
import Main from "./components/Main";
import { ItemProvider } from "./context/ItemContext";

function App() {
  return (
    <ItemProvider>
      <Header />
      <Main />
    </ItemProvider>
  );
}

export default App;
