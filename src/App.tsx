import './questions/question-1'
import { Layout } from './questions/question-3'
import './questions/question-4'
import './questions/question-5'
import { ZenoParadox } from './questions/question-6'
import './questions/question-7'
import './questions/question-2'

function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: "56px" }}>
      <Layout />
      <ZenoParadox />
    </div>
  )
}

export default App
