import About from './components/About';
import Banner from './components/Banner';
import Food_type from './components/Food_type';
import Menu from './components/Menu';
import Testimonia from './components/Testimonia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<About />
			<Food_type />
			<Menu />
			<Testimonia />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
