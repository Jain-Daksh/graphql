import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import DisplayData from './component/DisplayData'
import Mutation from './component/Mutation'
import SearchData from './component/SearchData'
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
        <br />
        <SearchData />
        <br />
        <Mutation />
      </div>
    </ApolloProvider>
  )
}

export default App
