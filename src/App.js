import './App.css';
import StrikethroughCarousel from "./StrikethroughCarousel/StrikethroughCarousel";
import SocialIcons from "./SocialIcons/SocialIcons";

const roles = ["sage", "pivotal", "vmware", "flowhub"];

function App() {
  return (<div className='App'>
    <main>
      <h1><mark>hi</mark></h1>
      <p>
        im <mark>majid</mark> from denver.<br/>
        i studied <mark>philosophy</mark> at vcu;<br/>
        now i <mark>make software</mark> at:
      </p>
      <StrikethroughCarousel items={roles} msDelay={1000}/>
      <SocialIcons/>
    </main>
  </div>);
}

export default App;
