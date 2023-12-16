import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import data from '@/public/swiadectwa.json';

const Opinions = () => (
  <div>
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center px-5 py-20 lg:px-30 lg:py-[6.25rem]">
        <h1 className="my-16 font-cinzel text-2.5xl uppercase lg:my-[6.25rem] lg:text-6.5xl">
          {data.tytul}
        </h1>
        {data.swiadectwa.map((opinion, index) => (
          <LeaderCard
            className={index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
            description={opinion.description}
            imageSrc={opinion.url}
            key={opinion.name}
            name={opinion.name}
            textLeft
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Opinions;
