import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const BagSummary = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const FinalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  const CONVENIENCE_FEES = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  FinalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  const finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePlaceOrder = () => {
    {
      totalItem > 0
        ? Swal.fire({
            position: "center",
            icon: "success",
            title: "Kudos your Order is Placed.",
            text: " Enjoy your shopping at SS myntra App",
            showConfirmButton: false,
            timer: 2500,
          })
        : Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops... No Orders in Bag",
            text: " Enjoy your shopping at SS myntra App",
            showConfirmButton: false,
            timer: 2500,
          });
    }
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni" onClick={handlePlaceOrder}>
          PLACE ORDER
        </div>
      </button>
    </div>
  );
};

export default BagSummary;
