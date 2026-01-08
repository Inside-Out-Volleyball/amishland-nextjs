export type Location = {
  name: string;
  courts: string;
  addressLines: string[];
  seatingAvailable: boolean;
  seatingText: string;
  apparel: boolean;
  concessions: boolean;
};

export const locations: Location[] = [
  {
    name: "Mishawaka Fieldhouse",
    courts: "1A-10",
    addressLines: ["6155 Veterans Pkwy", "Mishawaka, IN 46530"],
    seatingAvailable: true,
    seatingText: "Chairs around all courts, NO outside chairs allowed",
    apparel: true,
    concessions: true,
  },
  {
    name: "Century Center",
    courts: "1-6",
    addressLines: ["120 S Doctor MLK Blvd", "South Bend, IN 46601"],
    seatingAvailable: true,
    seatingText: "Chairs provided - NO outside chairs are allowed",
    apparel: true,
    concessions: true,
  },
  {
    name: "Penn High School",
    courts: "1-5",
    addressLines: ["56100 Bittersweet Rd", "Mishawaka, IN 46545"],
    seatingAvailable: true,
    seatingText: "Some chairs provided - outside chairs are allowed",
    apparel: false,
    concessions: true,
  },
  {
    name: "Indiana University South Bend",
    courts: "1-3",
    addressLines: ["1700 E Mishawaka Ave", "Mishawaka, IN 46615"],
    seatingAvailable: true,
    seatingText: "Chairs provided – NO outside chairs",
    apparel: false,
    concessions: true,
  },
  {
    name: "Saint Joseph High School",
    courts: "1-3",
    addressLines: ["453 N Notre Dame Ave", "South Bend, IN 46617"],
    seatingAvailable: true,
    seatingText: "Bleachers – NO outside chairs",
    apparel: false,
    concessions: true,
  },
  {
    name: "Bethel University",
    courts: "1-3",
    addressLines: ["1001 Bethel Cir", "Mishawaka, IN 46545"],
    seatingAvailable: true,
    seatingText: "Bleachers - NO outside chairs",
    apparel: false,
    concessions: true,
  },
];
