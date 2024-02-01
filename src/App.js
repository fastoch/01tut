import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Cocoa-covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Freshly-packed Hazelnuts"
    },
    {
      id: 3,
      checked: false,
      item: "Home-brewed Ginger-flavoured Beers"
    }
  ])

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;