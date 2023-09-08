const Banner = () => (
  <div className="flex flex-col items-center gap-6 rounded-[30px] border border-border bg-white px-5 py-10 lg:flex-row lg:p-20">
    <div>
      <p className="mb-6 font-cinzel text-2.5xl lg:text-[64px]">
        PRZELEW NA KONTO
      </p>
      <p className="lg:text-xl">
        Możesz nas wspierać regularnie lub jednorazowo, za pomocą
        darowizny&nbsp;w formie przelewu na konto fundacji.
      </p>
    </div>
    <div className="w-full divide-y divide-[#9CA3AF]">
      <div className="flex flex-col gap-4 pb-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">Odbiorca</p>
        <p className="lg:text-xl">
          Fundacja na Rzecz Rozwoju Młodzieży „Młodzi Młodym”
        </p>
      </div>
      <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">Adres</p>
        <p className="lg:text-xl">ul. Katedralna 4, 50-328 Wrocław</p>
      </div>
      <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">Tytuł przelewu</p>
        <p className="lg:text-xl">
          Darowizny na cele statutowe - wNieboGłosy 2024
        </p>
      </div>
      <div className="flex flex-col gap-4 pt-4 lg:flex-row lg:items-center">
        <p className="w-30 shrink-0 font-medium">Numer konta</p>
        <p className="lg:text-xl">PL 11 1600 1156 1841 2596 5000 0001</p>
      </div>
    </div>
  </div>
);

export default Banner;
