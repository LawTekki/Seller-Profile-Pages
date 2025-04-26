import React, { useState } from "react";
import { EventCard } from "./EventCard";
import { AddEventButton } from "./AddEventButton";
import { AddEventModal } from "./AddEventModal";
import { PreviewModal } from "./PreviewModal";

interface Event {
  id: number;
  image: string;
  status: string;
  title: string;
  date: string;
  time: string;
  description: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
    description: "Join us for an insightful session on mastering case-solving techniques. Learn from industry experts and enhance your problem-solving skills.",
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
    description: "Join us for an insightful session on mastering case-solving techniques. Learn from industry experts and enhance your problem-solving skills.",
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
    description: "Join us for an insightful session on mastering case-solving techniques. Learn from industry experts and enhance your problem-solving skills.",
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/4bbc64506d8036e6a8ac608258306d65c855fef4?placeholderIfAbsent=true",
    status: "UPCOMING",
    title: "How to crack cases like a boss",
    date: "27th July, 2024",
    time: "2:00PM",
    description: "Join us for an insightful session on mastering case-solving techniques. Learn from industry experts and enhance your problem-solving skills.",
  },
];

export const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddEvent = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddNewEvent = (eventData: {
    title: string;
    date: string;
    time: string;
    image: string;
    description: string;
  }) => {
    const newEvent = {
      id: events.length + 1,
      status: "UPCOMING",
      ...eventData,
    };
    setEvents([...events, newEvent]);
  };

  const handlePreview = (eventId: number) => {
    const event = events.find((e) => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setIsPreviewModalOpen(true);
    }
  };

  const handleClosePreview = () => {
    setIsPreviewModalOpen(false);
    setSelectedEvent(null);
  };

  const handleUpdateEvent = (updatedData: {
    title: string;
    date: string;
    time: string;
    description: string;
  }) => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, ...updatedData }
          : event
      );
      setEvents(updatedEvents);
    }
  };

  const handleRegister = (eventId: number) => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="relative max-w-[880px] w-full mx-auto flex flex-col items-center">
      <div className="mb-12 w-full">
        <div className="flex justify-end">
          <AddEventButton onClick={handleAddEvent} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 w-full">
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            status={event.status}
            title={event.title}
            date={event.date}
            time={event.time}
            onPreview={() => handlePreview(event.id)}
            onRegister={() => handleRegister(event.id)}
          />
        ))}
      </div>

      <AddEventModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleAddNewEvent}
      />

      {selectedEvent && (
        <PreviewModal
          isOpen={isPreviewModalOpen}
          onClose={handleClosePreview}
          event={selectedEvent}
          onUpdate={handleUpdateEvent}
        />
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up">
          Registration successful!
        </div>
      )}
    </section>
  );
};
