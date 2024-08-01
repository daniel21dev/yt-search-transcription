import './App.css'
import { useState } from 'react'

// import { transcriptService } from './service/transcript';
import { client } from './amplifyClient';

function App() {
  const [url, setUrl] = useState<string>('')

  const getTranscript = async () => {
    try {
      await client.queries.sayHello({
        name: "amplify"
      })
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <div className='container mx-auto'>
        <div className='h-screen '>
          <div className='flex flex-col'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name="url"
              id="ulr"
              value={url}
              onChange={
                (e) => {
                  setUrl(e.target.value)
                }
              } />


            <button className="btn btn-primary" onClick={getTranscript}>Primary</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
