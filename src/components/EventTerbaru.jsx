import { BsChevronCompactRight } from 'react-icons/bs';
import EventCard from './EventCard';

export default function EventTerbaru() {
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <h1 className="font-bold text-2xl">Event Terbaru</h1>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>

            <div className="text-center py-10">
                <a href="#" className="rounded-lg mx-2 px-4 py-2 border-2 border-green-500 text-green-500">Jelajah ke lebih banyak event</a>
            </div>
        </div>
    )
}