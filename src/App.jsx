
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Booknarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className="flex items-center">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
