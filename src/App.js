
import './App.css';
import BookList from './components/book-list';
import Navbar from './components/navbar';
import ThemeContextProvider from './context/theme-context';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
      </ThemeContextProvider>
        
    </div>
  );
}

export default App;
