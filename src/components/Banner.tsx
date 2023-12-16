import data from '@/public/wsparcie/tresc.json';

const Banner = () => (
  <div className="flex flex-col items-center gap-6 rounded-[30px] border border-border bg-white px-5 py-10 lg:flex-row lg:p-20">
    <div>
      <p className="mb-6 font-cinzel text-2.5xl lg:text-[64px]">
        {data.baner.tytul}
      </p>
      <p className="lg:text-xl">{data.baner.opis}</p>
    </div>
    <div className="w-full divide-y divide-[#9CA3AF]">
      <div className="flex flex-col gap-4 pb-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">{data.baner.pole1.tytul}</p>
        <p className="lg:text-xl">{data.baner.pole1.tekst}</p>
      </div>
      <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">{data.baner.pole2.tytul}</p>
        <p className="lg:text-xl">{data.baner.pole2.tekst}</p>
      </div>
      <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">{data.baner.pole3.tytul}</p>
        <p className="lg:text-xl">{data.baner.pole3.tekst}</p>
      </div>
      <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">{data.baner.pole4.tytul}</p>
        <p className="lg:text-xl">{data.baner.pole4.tekst}</p>
      </div>
    </div>
  </div>
);

export default Banner;
