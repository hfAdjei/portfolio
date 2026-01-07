import { Calendar } from 'lucide-react';

export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-50 border border-purple-200 rounded-lg">
      <Calendar className="w-4 h-4 text-purple-600" />
      <span className="text-sm font-medium text-purple-700 tracking-wide">
        AVAILABLE FOR WORK
      </span>
    </div>
  );
}
