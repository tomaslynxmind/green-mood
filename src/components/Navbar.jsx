import {useState} from 'react';
import Container from './Container';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const nav = [
		{href: '#home', label: 'Início'},
		{href: '#about', label: 'Sobre'},
		{href: '#food', label: 'Categoria'},
		{href: '#food-menu', label: 'Menu'},
		{href: '#testimonials', label: 'Avaliações'},
		{href: '#contact', label: 'Contato'},
	];

	return (
		<nav className='sticky top-0 z-50 w-full px-6 bg-white/40 backdrop-blur'>
			<Container className='flex items-center justify-between py-3'>
				<a href='#home' className='text-2xl font-extrabold tracking-tight'>
					Green <span className='text-brand-600'>Mood</span>
				</a>
				<button className='md:hidden p-2 rounded-lg border' aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
					<div className='space-y-1'>
						<span className={`block h-0.5 w-6 bg-slate-900 transition ${open ? 'translate-y-1.5 rotate-45' : ''}`}></span>
						<span className={`block h-0.5 w-6 bg-slate-900 transition ${open ? 'opacity-0' : ''}`}></span>
						<span className={`block h-0.5 w-6 bg-slate-900 transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`}></span>
					</div>
				</button>
				<ul className='hidden md:flex items-center gap-6 text-sm'>
					{nav.map(l => (
						<li key={l.href}>
							<a href={l.href} className='hover:text-brand-600'>
								{l.label}
							</a>
						</li>
					))}
				</ul>
			</Container>
			{open && (
				<div className='md:hidden border-t'>
					<Container>
						<ul className='flex flex-col py-2'>
							{nav.map(l => (
								<li key={l.href}>
									<a href={l.href} className='block px-2 py-3 hover:bg-brand-50 rounded-xl' onClick={() => setOpen(false)}>
										{l.label}
									</a>
								</li>
							))}
						</ul>
					</Container>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
