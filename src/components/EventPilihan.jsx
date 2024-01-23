import EventCard from "./EventCard";

export default function EventPilihan() {
    return (
        <div className="container my-12 mx-auto px-4 md:px-12">
            <h1 className="font-bold text-2xl">Event Pilihan</h1>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}