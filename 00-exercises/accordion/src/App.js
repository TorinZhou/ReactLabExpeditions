import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

function App() {
  console.log(lorem.generateWords(6));
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}
function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const handleSwitchOpenIndex = (index) => {
    setOpenIndex(index);
  };
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <Item
          key={i}
          index={i + 1}
          title={faq.title}
          openIndex={openIndex}
          onOpen={handleSwitchOpenIndex}
        >
          {faq.text}
        </Item>
      ))}
      <Item
        key={222}
        index={23}
        title={"Test1"}
        openIndex={openIndex}
        onOpen={handleSwitchOpenIndex}
      >
        <>
          <h3>Test</h3>
          <ul>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
          </ul>
        </>
      </Item>
    </div>
  );
}

function Item({ index, title, openIndex, onOpen, children }) {
  const isOpen = index === openIndex;
  const handleClick = () => {
    // index === openIndex ? onOpen(null) : onOpen(index);
    onOpen(isOpen ? null : index);
  };
  return (
    <div className={`item ${isOpen ? "open" : null}`} onClick={handleClick}>
      <p className="number">{index < 9 ? `0${index}` : index + 1}</p>
      <div className="title">{title}</div>
      {isOpen ? <div className="icon">+</div> : <div className="icon">-</div>}
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
