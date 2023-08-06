const Footer = () => (
  <div className="relative h-[446px] lg:h-[338px]">
    <div className="footer-gradient absolute bottom-0 w-full px-5 py-10 text-sm lg:px-30 lg:text-base">
      <div className="m-auto flex max-w-[1440px] flex-col border-arrow lg:flex-row lg:justify-between lg:border-t">
        <div className="flex flex-col items-center border-y border-arrow py-6 lg:items-start lg:border-none">
          <p className="mb-2.5 font-semibold">wNieboGłosy</p>
          <p className="mb-6">wnieboglosy.wroclaw@gmail.com</p>
          <div className="flex gap-4">
            <div className="h-10 w-10 bg-black" />
            <div className="h-10 w-10 bg-black" />
            <div className="h-10 w-10 bg-black" />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6">
          <p className="font-semibold">
            Fundacja na Rzecz Rozwoju Młodzieży „Młodzi Młodym”
          </p>
          <div>
            <p>ul. Katedralna 4</p>
            <p>50-328 Wrocław</p>
          </div>
          <div>
            <p>NIP: 8982214088</p>
            <p>REGON: 362550415</p>
            <p>KRS: 0000575737</p>
            <p>
              Numer konta:{' '}
              <span className="whitespace-nowrap">
                PL 11 1600 1156 1841 2596 5000 0001
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
