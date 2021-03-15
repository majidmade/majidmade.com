import './App.css';
import StrikethroughCarousel from "./StrikethroughCarousel/StrikethroughCarousel";
import SocialIcons from "./SocialIcons/SocialIcons";

const roles = ["sage", "pivotal", "vmware", "flowhub"];

function App() {
  return (<div className='App'>
    <main>
      <h1><mark>hi</mark></h1>
      <text>
        im <mark>majid</mark> from denver.<br/>
        i studied <mark>philosophy</mark> at vcu;<br/>
        now i <mark>write software</mark> at:
      </text>
      <StrikethroughCarousel items={roles}/>
      <SocialIcons/>
    </main>
  </div>);
}

export default App;
