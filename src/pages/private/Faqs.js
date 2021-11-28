import { useState, useRef } from "react"
import { MdExpandMore } from 'react-icons/md';

// TODO: ADD CONTENT FOR FREQUENTLY ASKED QUESTIONS
export default function Faqs() {
  return (
    <div className="w-full border border-b-0 rounded-md shadow-lg">
      <Accordion
        title="How to become a member?"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
      <Accordion
        title="What are the requirements when applying for loan?"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
      <Accordion
        title="Lorem ipsum"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
      <Accordion
        title="Lorem ipsum"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
      <Accordion
        title="Lorem ipsum"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
      <Accordion
        title="Lorem ipsum"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium,
         nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. 
         Saepe optio eaque porro? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur 
         odit voluptates dolor vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? 
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor 
         vel neque at voluptas iure esse iste fugit inventore mollitia maiores. Saepe optio eaque porro? Lorem ipsum dolor, sit 
         amet consectetur adipisicing elit. Laudantium, nihil soluta consequatur odit voluptates dolor vel neque at voluptas iure 
         esse iste fugit inventore mollitia maiores. Saepe optio eaque porro?"
      />
    </div>
  )
}

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive(prevState => !prevState);
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180');
  }

  return (
    <div className="flex flex-col div-container">
      <button
        className="p-4 border-b cursor-pointer focus:outline-none flex items-center justify-between"
        onClick={toggleAccordion}
      >
        <p className="text">{title}</p>

        <MdExpandMore className={`${rotate} fill-current dark:text-white h-6 w-6`} />
      </button>

      <div
        ref={contentSpace}
        style={{ maxHeight: height }}
        className="overflow-auto duration-700 ease-in-out bg-gray-50 dark:bg-gray-500"
      >
        <p className="text-justify text px-4 py-5 border-b">{content}</p>
      </div>
    </div>
  )
}