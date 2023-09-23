import Image from 'next/image';

const WelcomePage = () => {
  return (
    <div className="grid min-h-screen w-full place-content-center place-items-center gap-y-6 bg-welcomePage bg-cover bg-center font-cinzel text-xl  font-bold text-white md:text-2xl lg:text-3xl ">
      <Image
        alt={`Zdjęcie z galerii nr 1`}
        className="rounded-lg"
        layout="fill"
        objectFit="cover"
        src="https://i.ibb.co/1Z3R7gZ/2022-06-16-191858-5-N7-A5998-2400.jpg"
      />
    </div>
  );
};

export default WelcomePage;
