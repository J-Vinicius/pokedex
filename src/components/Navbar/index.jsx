import pokeball from '../../assets/images/pokeball.png'

function Navbar({pokemonFilter}) {
    return (
        <nav className="bg-primary border-gray-200">
            <div className="max-w-screen-md md:flex items-center justify-between mx-auto p-4 grid grid-col-2 gap-2">
                <div className="flex items-center mb-2">
                    <img src={pokeball} className="h-8 mr-3" alt="Pokeball" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Pokédex</span>
                </div>
                <div className="flex space-x-2 col-span-2">
                    <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fillRule="nonzero"/>
                        </svg>
                    </div>
                    <input onChange={(e) => pokemonFilter(e.target.value)} type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50" placeholder="Procurar" />
                    </div>
                    <div className="p-2 m-auto w-9 h-100 rounded-full bg-gray-50">
                        <svg className="w-4 h-4 text-primary -mt-[1px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z" fillRule="nonzero"/></svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;