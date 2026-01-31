
import { useState } from "react";
import SetupScreen from "./components/user_side/js/SetupScreen";
import ExamLayout from "./components/user_side/js/ExamLayout";
import './App.css'
//import "./components/user_side/css/style";

 function App() {
const [started, setStarted] = useState(false);
const [mode, setMode] = useState("practice");


return (
<>
{!started ? (
<SetupScreen mode={mode} setMode={setMode} start={() => setStarted(true)} />
) : (
<ExamLayout mode={mode} />
)}
</>
);
}
export default App;