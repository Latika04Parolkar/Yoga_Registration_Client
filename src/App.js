import { useState } from "react";
import MobileNumber from "./MobileNumber/MobileNumber";
import Registration from "./Registration/Registration";
import UserDashboard from "./UserDashboard/UserDashboard";

function App() {

  const [screen, setScreen] = useState(0);

  function ChangeScreen(i) {
    setScreen(i);
  }

  return (
    <>
      {screen === 0 ? <MobileNumber change={ChangeScreen}/> : null}
      {screen === 1 ? <Registration change={ChangeScreen}/> : null}
      {screen === 2 ? <UserDashboard change={ChangeScreen}/> : null}
    </>
  );
}

export default App;
