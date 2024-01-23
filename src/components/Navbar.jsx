import { BsJustify, BsSearch } from 'react-icons/bs';

export default function Navbar() {
    return (
        <div className="bg-green-900 py-4">
            <div className="container mx-auto px-4 md:px-12  flex justify-between">
                <div>
                    <h1 className="w-full mx-2 text-2xl text-white font-bold">SCHALTER!</h1>
                </div>

                <div className="hidden lg:block font-sans text-black flex items-center justify-center">
                    <div className="rounded-lg overflow-hidden flex">
                        <input type="text" className="w-96 px-4 py-2" placeholder="Cari event seru disini..." />
                        <button className="flex items-center bg-green-600 justify-center px-4">
                            <svg className="h-4 w-4 text-slate-50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="block lg:hidden flex items-center">
                    <BsSearch className="text-white text-2xl mx-3" />
                    <BsJustify className="text-white text-3xl" />
                </div>

                <div className="hidden lg:block">
                    <button type="button" className="rounded-lg mx-2 px-4 py-2 border-2 border-slate-50 text-slate-50">Daftar</button>
                    <button type="button" className="rounded-lg mx-2 px-4 py-2 bg-green-600 text-slate-50">Masuk</button>
                </div>
            </div>
        </div>
    )
}