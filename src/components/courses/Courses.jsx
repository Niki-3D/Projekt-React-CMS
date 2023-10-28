import "./Courses.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Courses = () => {
  const { boxOrder } = useContext(AppContext);

  return (
    <div id="courses" className="container">
      <div className="courses">
        <div className="course" name="1" style={{ order: boxOrder[0] }}>
          <h2>Kurs HTML</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course" name="2" style={{ order: boxOrder[1] }}>
          <h2>Kurs CSS</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
        <div className="course" name="3" style={{ order: boxOrder[2] }}>
          <h2>Kurs JavaScript</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam id
            suscipit unde magni alias dolorem iure sapiente nostrum. Ab dolores
            quam iure temporibus. Excepturi fugit cupiditate ut odio. Vero,
            eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
