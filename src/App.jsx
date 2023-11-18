import MainContent from './components/MainContent';
import Sidebar from './components/sidebar';

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio" >
      <h2>Olá, meu nome é</h2>
      <h1>Victor Pavan Baumgartner</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  )
}

export default App
