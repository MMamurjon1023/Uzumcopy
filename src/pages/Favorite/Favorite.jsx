import { useStore } from "../../store/store";
import Card from "../../Containers/Card/Card";
import { Products } from "../../data/productsData";

const Favorite = () => {
  const { favorite, addToFavorite, removeFromFavorite } = useStore();
  const favorites = favorite.map((id) =>
    Products.find((product) => id == product.productId)
  );
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        {favorites.map((product) => (
          <Card product={product} key={product.productId} />
        ))}
      </div>
    </div>
  );
};
export default Favorite;
