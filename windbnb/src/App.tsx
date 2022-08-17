import "./App.css";
import Nav from "./Components/Nav";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Dispatch, SetStateAction, useState } from "react";

export interface Location {
	city: string,
	country: string,
};

export interface Guest {
	adult: number,
	child: number,
};

export interface NavProps {
	location: Location,
	setLocation: Dispatch<SetStateAction<{ city: string; country: string; }>>,
	guest: Guest,
	setGuest: Dispatch<SetStateAction<{ adult: number; child: number; }>>,
}

export interface BodyProps {
	location: Location,
	guest: Guest,
}

function App() {
	const [location, setLocation] = useState({
		city: "Helsinki",
		country: "Finland"
	});
	const [guest, setGuest] = useState({
		adult: 0,
		child: 0,
	})

	return (
		<div className="App">
			<Nav location={location} setLocation={setLocation} guest={guest} setGuest={setGuest} />
			<Body location={location} guest={guest} />
			<Footer />
		</div>
	);
}

export default App;
