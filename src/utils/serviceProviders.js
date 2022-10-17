const listOfServiceProviders = [
  { id: "1", name: "MTN" },
  { id: "2", name: "AIRTEL" },
  { id: "3", name: "9MOBILE" },
];

export const serviceProviderOptions = listOfServiceProviders.map((provider) => {
  return { value: provider.name, label: provider.name };
});
