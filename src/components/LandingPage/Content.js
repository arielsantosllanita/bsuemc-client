export default function Content() {
  return (
    <div className="mt-24 w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16">
      <div>
        <h1 className="text mb-2">About us</h1>
        <p className="text-justify text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat neque laborum, placeat nobis minima reprehenderit quae, unde assumenda iure enim earum quis voluptatum, ab temporibus quo! Nisi quis voluptatibus maiores.
        </p>
      </div>
      <div>
        <img src="/img/about_us.svg" alt="About us" />
      </div>
      <div className="order-4 md:order-3">
        <img src="/img/finance.svg" alt="Mission and Vision" />
      </div>
      <div className="order-3 md:order-4">
        <h1 className="text mb-2">Mission and Vision</h1>
        <p className="text-justify text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ut quidem eligendi repudiandae voluptas fugiat repellendus at eaque asperiores doloremque facere ex exercitationem, ullam possimus fugit corrupti labore nemo esse?
        </p>
      </div>
    </div>
  )
}
