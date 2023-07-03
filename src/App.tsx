import './App.scss'
import { AntdConfigProvider } from './components/AntdConfigProvider'
import { CardContainer } from './components/CardContainer'
import { FooterAttribution } from './components/FooterAttribution'

function App() {
  return (
    <AntdConfigProvider>
      <div className='App'>
        <CardContainer />
        <FooterAttribution />
      </div>
    </AntdConfigProvider>
  )
}

export default App
