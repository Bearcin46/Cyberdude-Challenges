import AlertBox from "./Components/AlertBox";
import Button from "./Components/Button";
import CardComponent from "./Components/CardComponent";

function App() {
  return (
    <div className="flex flex-col gap-4 py-10 md:px-20 max-w-3xl">
      <h1 className="text-3xl font-bold">Bootstrap Buttons</h1>
      <p>
        Bootstrap includes several predefined button styles, each serving its
        own semantic purpose, with a few extras thrown in for more control.
      </p>
      <Button />
      <h1 className="text-3xl font-bold">Bootstrap Alerts</h1>
      <AlertBox />
      <h1 className="text-3xl font-bold">Bootstrap Cards</h1>
      <CardComponent />
    </div>
  );
}

export default App;
