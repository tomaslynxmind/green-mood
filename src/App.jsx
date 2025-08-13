import About from './components/About';
import Banner from './components/Banner';
import FoodType from './components/FoodType';
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
			<FoodType />
			<Menu />
			<Testimonia />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
