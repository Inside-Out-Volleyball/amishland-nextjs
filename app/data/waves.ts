export type Wave = {
  division: string;
  start: string;
  location?: string;
};

export const wavesDecided = true; // Set to true when waves are finalized

export const waveTimes = [
  { wave: "AM", time: "8:00 AM", color: "green" },
  { wave: "PM", time: "3:00 PM", color: "pink" },
];

export const waves: Wave[] = [
  { division: "12 Classic", start: "PM" },
  { division: "12 Club", start: "PM" },
  { division: "13 Classic", start: "AM" },
  { division: "13 Club", start: "AM" },
  { division: "14 Classic", start: "PM" },
  { division: "14 Club", start: "PM" },
  { division: "14 Open/Premier", start: "PM", location: "Mishawaka Fieldhouse" },
  { division: "15 Classic", start: "PM" },
  { division: "15 Club", start: "PM" },
  { division: "15 Open/Premier", start: "PM", location: "Mishawaka Fieldhouse" },
  { division: "16 Classic", start: "AM" },
  { division: "16 Club", start: "AM" },
  { division: "16 Open", start: "AM", location: "Mishawaka Fieldhouse" },
  { division: "17 Club", start: "AM" },
  { division: "18 Club", start: "AM", location: "Century Center" },
  { division: "17/18 Open", start: "AM", location: "Century Center" },
];
