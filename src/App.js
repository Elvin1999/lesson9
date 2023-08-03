import { Profiler, StrictMode, useState } from "react";
import "./App.css";
import Blog from "./Blog";
import Counter from "./Counter";
import Item from "./Item";
import MyList from "./MyList";

function onRender(phase, actualDuration, baseDuration, startTime, commitTime) {
  console.log(
    " startTime : " +
      startTime +
      " actualDuration : " +
      actualDuration +
      " baseDuration : " +
      baseDuration +
      " commitTime : " +
      commitTime +
      "phase : " +
      phase
  );
}

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];
function App() {
  let [stories, setStories] = useState(initialStories);
  return (
    // <Profiler onRender={onRender}>
    //   <div className="App">
    //      <Counter></Counter>
    //     <MyList></MyList>
    //     <Blog></Blog>
    //   </div>
    // </Profiler>
    // <div className="App">
    //   <Counter></Counter>
    //   <MyList></MyList>
    //   <Blog></Blog>
    // </div>

<div style={{
  width:"100%",
  height:"100vh",
  textAlign:"center"
}}>
  <Item stories={stories}></Item>
</div>

  );
}

export default App;
