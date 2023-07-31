import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import DisplayData from './component/DisplayData'
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  })
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List Of Users</h1>
        <DisplayData />
      </div>
    </ApolloProvider>
  )
}

export default App
