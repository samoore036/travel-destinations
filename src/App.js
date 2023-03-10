import Header from './components/Header';
import DestinationDiv from './components/DestinationDiv';
import data from './data';

function App() {
  const londonData = data.filter((data) => data.location === 'London');
  const amsterdamData = data.filter((data) => data.location === 'Amsterdam');
  const copenhagenData = data.filter((data) => data.location === 'Copenhagen');
 
  return (
    <div className="App">
      <Header />
      <div className='main-content'>
        <DestinationDiv title='London' data={londonData}/>
        <DestinationDiv title='Amsterdam' data={amsterdamData}/>
        <DestinationDiv title='Copenhagen' data={copenhagenData}/>
      </div>
    </div>
  );
}

export default App;
