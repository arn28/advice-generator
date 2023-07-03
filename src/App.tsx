import './App.scss'
import { AntdConfigProvider } from './components/AntdConfigProvider'
import { CardContainer } from './components/CardContainer'

function App() {
  return (
    <AntdConfigProvider>
      <div className='App'>
        <CardContainer />
      </div>
    </AntdConfigProvider>
  )
}

export default App
