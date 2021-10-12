import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import PortfolioList from './components/PortfolioList';
import myPortfolio from './portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutMe />
			<PortfolioList myPortfolioList={myPortfolio} />
			<Contact />
			<Footer />
		</>
	);
}

export default App;