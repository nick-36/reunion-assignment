export const priceOptions = [
  { value: "500-2500", label: "$500-$2500" },
  { value: "2500-4500", label: "$2500-$4500" },
  { value: "4500-6500", label: "$4500-$6500" },
  { value: "6500-8500", label: "$6500-$8500" },
  { value: "8500-10000", label: "$8500-$10000" },
];
export const propTypeOptions = [
  { value: "apartment", label: "Apartments" },
  { value: "house", label: "Houses" },
  { value: "office", label: "Offices" },
  { value: "studio", label: "Studios" },
  { value: "villa", label: "Villas" },
];
export const locationOptions = [
  { value: "New York", label: "New York" },
  { value: "Los Angeles", label: "Los Angeles" },
  { value: "Chicago", label: "Chicago" },
  { value: "San Francisco", label: "San Francisco" },
  { value: "Washington", label: "Washington" },
];

export const customStyles = {
  option: (provided, state) => ({
    ...provided,

    color: state.isSelected ? "#fff" : "",
    padding: 10,
    fontSize: "1.2rem",
  }),
  control: (provided, state) => ({
    ...provided,
    width: 150,
    fontSize: "1.4rem",
    border: "none",
    fontWeight: "700",
  }),
};
