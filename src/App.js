import "./App.css";
import logo from "./assets/images/logo.svg";
import Button from "./components/atom/Button";

function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-14">
        <div className="flex gap-8 w-[300px]">
          <Button theme="text">Personal</Button>
          <Button theme="text">Business</Button>
          <Button theme="text">Partners</Button>
        </div>
        <div>
          <img src={logo} alt="Uphold Logo" />
        </div>
        <div className="w-[300px]">
          <Button theme="action" className="float-right">
            Log in
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
