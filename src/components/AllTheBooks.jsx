import { FaArrowCircleUp } from "react-icons/fa";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";
/* import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json"; */

function AllTheBooks({ searchQuery, darkMode }) {
  const arrowup = () => {
    window.location.href = "#";
  };

  return (
    <>
      <div className={`d-flex justify-content-center flex-wrap gap-5 my-5 pb-5 `}>
        {[...fantasy /*  ...history, ...horror, ...romance, ...scifi */]
          .filter((libro) => libro.title.toLowerCase().includes(searchQuery))
          .map((libro) => (
            <SingleBook key={libro.asin} libro={libro} />
          ))}
      </div>
      <FaArrowCircleUp className="arrowup " onClick={arrowup} />
    </>
  );
}

export default AllTheBooks;
