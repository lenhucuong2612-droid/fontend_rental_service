import CarCard from './CarCard';
import EmptyState from './EmptyState';
import { AnimatePresence } from 'framer-motion';

export default function VehicleGrid({ cars, onReset }) {
  if (cars.length === 0) {
    return <EmptyState onReset={onReset} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </AnimatePresence>
    </div>
  );
}
