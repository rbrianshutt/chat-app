import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home = () => {
	const [user] = useAuthState(auth);
	//console.log(user)
	return (
		<div className='max-w-[728px] mx-auto text-center'>
			<Head>
				<title>Chat App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className='flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative'>
				<Navbar />
				{user ? <Chat /> : null}
			</section>
		</div>
	);
};

export default Home;
