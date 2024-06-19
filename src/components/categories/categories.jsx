import "./categories.css";
import { categories } from "../../pages/data";
import CategoriesItem from "./categoriesItem";

export default function Categories() {
  return (
    <div className="ContainerCategory">
      {categories.map((item) => (
        <CategoriesItem key={item.id} item={item} />
      ))}
    </div>
  );
}
