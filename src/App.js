
import './App.css';
import BookList from './components/book-list';
import Navbar from './components/navbar';
import ThemeToggle from './components/theme-toggle';
import AuthContextProvider from './context/auth-context';
import BookContextProvider from './context/book-context';
import ThemeContextProvider from './context/theme-context';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
      </AuthContextProvider>


    </div>
  );
}

export default App;
