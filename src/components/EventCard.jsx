export default function EventCard() {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231218085851.png" />
                </a>

                <header className="p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            Event Title
                                    </a>
                    </h1>
                    <h2 className="text-gray-500">02 Feb 2024 - 04 Feb 2024</h2>
                    <h2 className="font-bold">Rp. 150.000</h2>
                </header>

                <footer className="flex items-center justify-between leading-none border-t-2 p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                            Organizer Name
                                </p>
                    </a>
                </footer>
            </article>
        </div>
    )
}