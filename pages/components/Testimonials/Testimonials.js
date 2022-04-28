import Testimonial from "./Testimonial";

const reviews = [
  {
    name: "Sushil Shrestha",
    image: "kale.png",
    text: `
    “Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”
    `,
  },
  {
    name: "Bibek Pandit",
    image: "pandit.jpg",
    text: `
    “Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”
    `,
  },
  {
    name: "Sunita Rana",
    image: "sunita.png",
    text: `
    “Manage has supercharged our team’s workflow. The ability to
    maintain visibility on larger milestones at all times keeps
    everyone motivated.”
    `,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold">What's Different About Manage?</h2>
        <div className="flex flex-col space-y-12 mt-24 md:flex-row md:space-x-6 md:space-y-0">
          {reviews.map((review, index) => (
            <Testimonial
              key={index}
              name={review.name}
              image={review.image}
              text={review.text}
            />
          ))}
        </div>
        <div className="my-16">
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight transition duration-300 ease-out"
        >
          Get Started
        </a>          
        </div>

      </div>
    </section>
  );
}

export default Testimonials