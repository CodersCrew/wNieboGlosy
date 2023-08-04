'use client';
import Image from 'next/image';

import Button from '@/components/Button';
import CheckContainer from '@/components/CheckContainer';
import LeaderCard from '@/components/LeaderCard';
import choirImage from '@/public/assets/dolacz/choir-women.jpeg';
import peopleImage from '@/public/assets/dolacz/people-outlined.svg';
import sara from '@/public/assets/dolacz/sara-nestorowicz.jpeg';
import dateIcon from '@/public/assets/icons/date.svg';
import locationIcon from '@/public/assets/icons/location.svg';

const CHECK_CONTENT = [
  { id: 1, content: 'Posiadasz minimalne doświadczenie w śpiewie zespołowym.' },
  {
    id: 2,
    content:
      'Masz predyspozycje do wykonywania muzyki (warunki głosowe oraz słuch muzyczny).'
  },
  { id: 3, content: 'Mile widziane osoby w każdym wieku.' },
  { id: 4, content: 'Osoby niepełnoletnie muszą posiadać zgodę rodziców.' }
];

const LEADERS = {
  imageSrc: sara,
  name: 'Sara Nestorowicz',
  role: 'Dyrygent chóru',
  description:
    'Lorem ipsum dolor sit amet consectetur. Libero gravida id enim vitae eget nunc quam augue auctor. Lobortis dolor odio neque scelerisque. Viverra ante arcu at adipiscing feugiat interdum donec ultrices duis. Non sagittis ac suspendisse a facilisi tellus nunc tortor viverra. Enim ut eros nunc nulla facilisis luctus morbi aliquam tincidunt.',
  fbLink: 'http://www.facebook.com',
  igLink: 'https://www.instagram.com'
};

const SingInChoir = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-top  to-gradient-bottom">
      <div className="mx-auto flex max-w-lg flex-col justify-center gap-y-6 px-4 lg:max-w-[1440px]">
        <div className="flex flex-col gap-y-6">
          <h1 className="mb-4 mt-6 text-center font-cinzel text-[1.75rem] font-normal capitalize leading-[2.1rem] tracking-[-.0175] text-primary lg:my-[6rem] lg:text-[4rem]">
            Zaśpiewaj w chórze
          </h1>
          <div className="flex max-w-screen-xl flex-col justify-center gap-y-6 lg:flex-row lg:items-center xl:mx-auto xl:gap-10">
            <div className="flex flex-col gap-6 font-raleway text-base font-light leading-normal text-black lg:p-5 lg:px-5 lg:leading-normal xl:text-[1.25rem]">
              <p>
                Serdecznie zapraszamy do współtworzenia Chóru, który wystąpi na
                scenie podczas uwielbienia wNieboGłosy razem z Zespołem i
                Orkiestrą.
              </p>
              <p>
                Aby zestroić serce i ducha, jeszcze przed wydarzeniem zapraszamy
                na otwarte warsztaty muzyczne. Będzie to czas nie tylko pracy
                nad repertuarem i techniką śpiewu, ale także modlitwy oraz
                przygotowania do wspólnego uwielbienia w dniu Bożego Ciała.
              </p>
              <div className="flex flex-col gap-y-[1.12rem] text-base font-semibold lg:font-normal">
                <span className="flex items-center gap-x-6">
                  <Image alt="Ikona lokalizacji" src={locationIcon as string} />
                  Leśnica
                </span>
                <span className="flex items-center gap-x-6 ">
                  <Image alt="Ikona z datą" src={dateIcon as string} />
                  28-30.05.2022
                </span>
              </div>
            </div>
            <Image
              alt="Kobiety śpiewające w chórze"
              className="my-6  rounded-lg lg:my-0 lg:h-[28.125rem] lg:max-w-[37.5rem]   lg:object-cover"
              src={choirImage}
            />
          </div>
        </div>
        <div className="mx-auto grid  max-w-screen-xl justify-items-center gap-6 lg:mt-40 lg:grid-cols-1 lg:grid-rows-1">
          <div className="mx-5 my-10 flex max-w-[608px] flex-col  rounded-[40px] lg:mx-0 lg:border-[3px] lg:border-border  lg:px-5 lg:py-10">
            <h2 className="mb-8 self-center text-2xl font-medium text-primary">
              Dla kogo?
            </h2>
            {CHECK_CONTENT.map(({ id, content }) => (
              <CheckContainer content={content} key={id} />
            ))}
          </div>
          <Image
            alt="Narysowani ludzie"
            className="order-2 lg:order-first lg:h-[370px]  lg:self-center"
            height={300}
            src={peopleImage as string}
          />
          <Button
            className="bg-primary lg:col-span-2 lg:row-end-3"
            size="mobile"
            variant="contained"
          >
            Zapisz się na warsztaty
          </Button>
        </div>
      </div>
      <div>
        <div className="mt-20 flex flex-col items-center">
          <h2 className="mb-8 font-cinzel text-[28px] font-medium leading-8 text-primary lg:text-6xl lg:font-normal lg:tracking-[-.64px]">
            Prowadzący warsztaty
          </h2>
          <p className="max-w-sm px-5 text-center font-raleway text-base font-light lg:max-w-[943px] lg:text-xl lg:font-normal lg:leading-8">
            Podczas warsztatów Chór z towarzyszeniem Zespołu wNieboGłosy będzie
            pracował pod okiem dyrygentki Sary Nestorowicz oraz Orkiestrę
            poprowadzi Artur Koza, który nada ostateczne szlify brzmieniowe
            całości. Opiekę duszpasterską będzie sprawował ks. Piotr Wawrzynek.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-screen-xl  px-5 lg:mt-40">
          <LeaderCard
            description={LEADERS.description}
            fbLink={LEADERS.fbLink}
            igLink={LEADERS.igLink}
            imageSrc={LEADERS.imageSrc}
            name={LEADERS.name}
            role={LEADERS.role}
          />
        </div>
      </div>
    </div>
  );
};

export default SingInChoir;
