import Image from "next/image";

const Testimonial = ({name, image, text}) => {
  return (
    <div className="flex flex-col space-y-6 items-center p-6 rounded-lg bg-veryLightGray md:w-1/3">
      <div className="relative w-20 h-20 -mt-14">
        <Image
          src={`/images/${image}`}
          layout="fill"
          objectFit="cover"
          alt="image"
          className="rounded-full"
        />
      </div>
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">
        {text}
      </p>
    </div>
  );
};

export default Testimonial;
