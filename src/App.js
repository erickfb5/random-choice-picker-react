import { useState } from "react";
import "./App.css";

const App = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTags = e.target.value
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
      setTags(newTags);
      e.target.value = "";
    }
  };

  const pickRandomTag = () => {
    const randomIndex = Math.floor(Math.random() * tags.length);
    const randomTag = tags[randomIndex];
    highlightTag(randomTag);
    setTimeout(() => unHighlightTag(randomTag), 100);
  };

  const highlightTag = (tag) => {
    const tagEl = document.getElementById(tag);
    tagEl.classList.add("highlight");
  };

  const unHighlightTag = (tag) => {
    const tagEl = document.getElementById(tag);
    tagEl.classList.remove("highlight");
  };

  return (
    <div className="container">
      <h3>
        Enter all of the choices divided by a comma (','). <br /> Press enter
        when you're done
      </h3>
      <textarea
        placeholder="Enter choices here..."
        onKeyDown={handleKeyDown}
      ></textarea>

      <div id="tags">
        {tags.map((tag) => (
          <span key={tag} id={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <button className="btn-pick" onClick={pickRandomTag}>Pick a Random Tag</button>
    </div>
  );
};

export default App;
