import Request from "./components/Request"

function App() {// key fetcher

  return (
    <main>
      <h1>requisição <span style={{color: "blue"}}>SWR</span></h1>
      <p style={{color: "red"}}>
        request for API (interface de programação de aplicações)
      </p>
      <Request />
    </main>
  )
}

export default App
