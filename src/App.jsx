import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Posts from './Components/Posts';
import Contacts from './Components/Contacts';

import './index.css';

export default function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main className='container'>
				<aside>
					<UserProfile />
					<Posts />
				</aside>
				<aside className='contacts'>
					<Contacts />
				</aside>
			</main>
		</>
	);
}
