import { BsJustify, BsSearch } from 'react-icons/bs';

export default function Footer() {
    return (
        <footer>

            <div className="bg-green-900 py-4 text-white">
                <div className="container mx-auto px-4 md:px-12 flex flex-wrap -mx-1 lg:-mx-4">
                    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/4">
                        <h2 className="font-bold py-2">Tentang Schalter</h2>
                        <ul>
                            <li>Masuk</li>
                            <li>Biaya</li>
                            <li>Lihat Event</li>
                            <li>Syarat dan Ketentuan</li>
                            <li>Laporan Kesalahan Sistem</li>
                        </ul>
                    </div>

                    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/4">
                        <h2 className="font-bold py-2">Rayakan Eventmu</h2>
                        <ul>
                            <li>Cara Mempersiapkan Event</li>
                            <li>Cara Membuat Event</li>
                            <li>Cara Mempublikasikan Event</li>
                            <li>Cara Mengelola Event</li>
                        </ul>
                    </div>

                    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/4">
                        <h2 className="font-bold py-2">Lokasi Event</h2>
                        <ul>
                            <li>Jakarta</li>
                            <li>Bandung</li>
                            <li>Surabaya</li>
                            <li>Bali</li>
                            <li>Semua Kota</li>
                        </ul>
                    </div>

                    <div className="my-1 px-1 w-full sm:w-1/2 md:w-1/4">
                        <h2 className="font-bold py-2">Inspirasi Event</h2>
                        <ul>
                            <li>Festival</li>
                            <li>Konser</li>
                            <li>Olahraga</li>
                            <li>Workshop & Seminar</li>
                            <li>Semua Kategori</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-green-700 py-4 text-white text-center text-sm">
                <p>Tentang Kami • Blog • Karir • Kebijakan Privasi • Kebijakan Cookie • Panduan • Hubungi Kami</p>
            </div>
        </footer>

    )
}