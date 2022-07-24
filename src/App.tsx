import { useEffect, useState } from "react";
import AutoComplete from "./components/AutoComplete";

import "./App.css";

interface IData {
  [data: string]: string;
}

function App() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response: any) => {
        return response.json();
      })
      .then((data: any) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="content-card">
        <AutoComplete label="Auto Complete" data={data} />
      </div>
    </div>
  );
}

export default App;
