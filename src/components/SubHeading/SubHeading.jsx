import { images } from "../../constants";
import "./SubHeading.css";

export default function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon-img" className="spoon__img" />
    </div>
  );
}
