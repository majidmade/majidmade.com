import './App.css';
import StrikethroughCarousel from "./StrikethroughCarousel/StrikethroughCarousel";
import SocialIcons from "./SocialIcons/SocialIcons";

const roles = ["sage", "pivotal", "vmware", "flowhub"];

function App() {
  return (<div className='App'>
    <main>
      <h1><mark>hi</mark></h1>
      <text>
        im <mark>majid</mark> from denver, colorado.
        <br/><br/>
        im a <mark>software engineer</mark> at:
      </text>
      {/*<text>*/}
      {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
      {/*  Maecenas consectetur mauris vitae urna dapibus:*/}
      {/*</text>*/}
      <StrikethroughCarousel items={roles}/>
      <SocialIcons/>
    </main>
  </div>);
}

export default App;
