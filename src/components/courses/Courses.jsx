import "./Courses.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";

const Courses = () => {
  const { boxOrder } = useContext(AppContext);

  return (
    <div id="courses" className="container">
      <div className="courses">
        <div className="course" name="1" style={{ order: boxOrder[0] }}>
          <h2>The Witcher 1</h2>
          <p>
            The Witcher 1 is the first installment in the iconic Witcher game
            series. Follow Geralt of Rivia as he navigates through a dark and
            immersive fantasy world, filled with intriguing characters and
            challenging quests.
          </p>
        </div>
        <div className="course" name="2" style={{ order: boxOrder[1] }}>
          <h2>The Witcher 2</h2>
          <p>
            The Witcher 2: Assassins of Kings continues Geralt's journey,
            offering players a gripping narrative with impactful choices that
            shape the outcome of the story. Immerse yourself in political
            intrigue and epic battles.
          </p>
        </div>
        <div className="course" name="3" style={{ order: boxOrder[2] }}>
          <h2>The Witcher 3</h2>
          <p>
            The Witcher 3: Wild Hunt is a masterpiece that concludes Geralt's
            saga. Explore a vast open world, face moral dilemmas, and hunt
            legendary monsters. The game is renowned for its storytelling,
            characters, and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
