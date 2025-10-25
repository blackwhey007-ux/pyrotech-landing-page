import React from 'react';
import { EVENT_CARDS } from '../../utils/constants';
import EventCard from './EventCard';
import SectionTitle from '../shared/SectionTitle';

const EventGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Wähle Deinen Anlass"
          subtitle="Spektakuläre Feuerwerke für jeden besonderen Moment"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {EVENT_CARDS.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;
