import { Carousel } from "react-responsive-carousel";

export default function Services() {
  return (
    <>
      <h3 className="dark:text-gray-50 text-center text-4xl mt-12">
        Services we offer
      </h3>
      
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        className="w-full md:w-2/3 div-container mx-auto mt-9 md:rounded-xl shadow-lg pb-4"
      >
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/rice_loan.svg" alt="Rice Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
            Something about the given scenarios which i don't really about this person.
          </p>
        </div>
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/compassionate_loan.svg" alt="Compassionate Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
          </p>
        </div>
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/emergency_loan.svg" alt="Emergency Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
          </p>
        </div>
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/gadget_loan.svg" alt="Gadget Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
          </p>
        </div>
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/medical_loan.svg" alt="Medical Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
          </p>
        </div>
        <div>
          <img className="max-h-60 md:max-h-72 p-5 mx-auto" src="/img/salary_loan.svg" alt="Salary Loan" />
          <p className="dark:text-gray-50 text-justify px-5 sm:px-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni cumque harum doloremque quam perferendis 
            magnam quia minima commodi provident recusandae libero id mollitia, fuga nobis voluptas aliquid nihil voluptatibus.
          </p>
        </div>
      </Carousel>
    </>
  )
}
