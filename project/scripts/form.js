
const features = [
    {
      location: "all",
      feature: "Color Scheme",
    },
    {
      location: "home",
      feature: "Home Layout",
    },
    {
      location: "all",
      feature: "Menu Buttons",
    },
    {
      location: "all",
      feature: "Page Viewport Responsiveness",
    },
    {
      location: "form",
      feature: "Suggestion Form",
    },
    {
      location: "dice",
      feature: "Dice Rollers",
    },
    {
      location: "all",
      feature: "Navigation",
    },
  ];

const selectElement = document.querySelector("#websiteFeature");

features.forEach(feature => {
    let newFeature = document.createElement("option");
    newFeature.value = feature.location;
    newFeature.text = feature.feature;

    selectElement.appendChild(newFeature);
});