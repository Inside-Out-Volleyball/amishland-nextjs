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
  { division: "12 Club/CLassic", start: "PM", location: "Mishawaka Fieldhouse" },
  { division: "13 Classic", start: "AM", location: "Mishawaka Fieldhouse/St Joe HS" },
  { division: "13 Club", start: "AM", location: "Mishawaka Fieldhouse" },
  { division: "14 Classic", start: "PM", location: "Mishawaka Fieldhouse/Bethel" },
  { division: "14 Club", start: "PM", location: "Mishawaka Fieldhouse/St Joe HS" },
  { division: "14 Open/Premier", start: "PM", location: "Century Center" },
  { division: "15 Classic", start: "PM", location: "Mishawaka Fieldhouse" },
  { division: "15 Club", start: "PM", location: "Mishawaka Fieldhouse/Century Center" },
  { division: "15 Open/Premier", start: "PM", location: "Century Center" },
  { division: "16 Classic", start: "AM", location: "Bethel" },
  { division: "16 Club", start: "AM", location: "Mishawaka Fieldhouse" },
  { division: "16 Open", start: "AM", location: "Mishawaka Fieldhouse/Century Center" },
  { division: "17 Club", start: "AM", location: "Mishawaka Fieldhouse" },
  { division: "18 Club", start: "AM", location: "Century Center" },
  { division: "17/18 Open", start: "AM", location: "Century Center" },
];
