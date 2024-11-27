import { useDispatch, useSelector } from "react-redux";
import { bagSiceAction } from "../Store/BagSlice";
import { MdAddModerator } from "react-icons/md";
import { MdAutoDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagSiceAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagSiceAction.removeFromBag(item.id));
  };
  return (
    <div className="item-card">
      <img className="item-image" src={item.image} alt="item images" />
      <div className="item-card-text">
        <div className="rating">
          {item.rating.stars}⭐|{item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">TK {item.current_price}</span>
          <span className="original-price">Tk {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
      </div>
      {elementFound ? (
        <button type="button" className="btn-add-bag2" onClick={handleRemove}>
          <MdAutoDelete />
          Remove
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToBag}>
          <MdAddModerator />
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
