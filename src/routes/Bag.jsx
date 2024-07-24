import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItem = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const itemsFound = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {itemsFound.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary></BagSummary>
      </div>
    </main>
  );
};

export default Bag;
