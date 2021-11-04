import useIterator from "@hooks/useIterator";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function Services() {
  const [properties, prev, next] = useIterator(slides);

  return (
    <div className="w-3/4 mx-auto mt-24 relative">
      <h1 className="text-center text-3xl dark:text-gray-50">
        Services we offer
      </h1>
      <button onClick={prev} className="absolute -left-5 md:left-0 top-64 md:top-1/2">
        <MdKeyboardArrowLeft
          className="w-20 h-16 fill-current text-gray-700 dark:text-white"
        />
      </button>

      <ServicesContainer {...properties} />

      <button onClick={next} className="absolute -right-5 md:right-0 top-64 md:top-1/2">
        <MdKeyboardArrowRight
          className="w-20 h-16 fill-current text-gray-700 dark:text-white"
        />
      </button>
    </div>
  )
}

// Container for each slides inside the carousel
const ServicesContainer = ({ img, description }) => {
  const altText = img.split("/")[2].split(".")[0];

  return (
    <div className="w-full md:w-2/3 div-container
     mx-auto mt-10 theme-transition rounded-xl shadow-lg px-5 sm:px-10 pb-10"
    >
      <img
        src={img}
        alt={altText}
        className="md:max-h-72 p-5 mx-auto"
      />
      <p className="dark:text-gray-50 text-justify">
        {description}
      </p>
    </div>
  )
}

// Slides properties
const slides = [
  {
    img: "/img/rice_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }, {
    img: "/img/compassionate_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }, {
    img: "/img/emergency_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }, {
    img: "/img/gadget_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }, {
    img: "/img/medical_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }, {
    img: "/img/salary_loan.svg",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus."
  }
];
