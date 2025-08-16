
import List from "./List";

function App() {
  const Animals = [
    { name: "Lion", scientificname: "Panthero Leo", averageWeight: 140, eat: "Meat" },
    { name: "Gorilla", scientificname: "Gorilla Beringei", averageWeight: 205, eat: "Plants, Insects" },
    { name: "Zebra", scientificname: "Equus quagga", averageWeight: 322, eat: "Plants" }
  ]

  return (
      <List item={Animals} category={"Animals"} />
  );

}
export default App;