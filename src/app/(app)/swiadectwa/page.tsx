import Footer from '@/components/Footer';
import LeaderCard from '@/components/LeaderCard';
import malyga from '@/public/assets/swiadectwa/maciej-malyga.jpg';
import druszcz from '@/public/assets/swiadectwa/pawel-druszcz.jpg';
import wawrzynek from '@/public/assets/swiadectwa/piotr-wawrzynek.jpg';

const OPINIONS = [
  {
    imageSrc: wawrzynek,
    name: 'Ks. bp Piotr Wawrzynek',
    description: `Czy są dla mnie "wNieboGłosy"? Wiele lat temu Bóg wzbudził we mnie pragnienie ewangelizacji i wtedy pierwszą myślą była potrzeba zrobienia czegoś dużego, dla wielu ludzi. Jakieś koncert, w hali, na stadionie... Udało się przygotować takie wydarzenie w Hali Orbita w 2002 roku (https://wroclaw.wyborcza.pl/wroclaw/7,35750,800715.html). Tylko nie o to chodziło. W moim sercu szybko pojawiło się nowe doświadczenie Kursu Paweł i zrozumienie, że ewangelizuje się w inny sposób. Jezus przekonał mnie, że bardziej skuteczne jest spotkanie z jedną osobą, mała grupa niż wielki koncert. Po latach w 2015 r. pojawiło się wyzwanie przygotowań do Światowych Dni Młodzieży w Krakowie w 2016 r. i Dni w Diecezjach we Wrocławiu (https://www.wroclaw.pl/go/wydarzenia/inne/28465-swiatowe-dni-mlodziezy-2016-dni-w-diecezjach). Owocem tego doświadczenia (https://www.facebook.com/sdm2016wroclaw/) i jakby duchową kontynuacją wyjścia na ulice Wrocławia była organizacja pierwszej edycji "wNnieboGłosów" w 2017 r. Idea była prosta: podziękować za ŚDM, za kongres Eucharystyczny, którego rocznicę obchodziliśmy, a ponad wszystko uwielbić Jezusa. Po tym pierwszym doświadczeniu zrodziło się pytanie: co dalej? Ja znalazłem się wśród pięknych ludzi, którzy chcieli budować to dzieło i stając na największym placu Wrocławia publicznie uwielbiać Jezusa. To właśnie po pierwszych "wNieboGłosach" narodziło się/ potwierdziło się wezwanie: Niech będzie pochwalony Jezus Chrystus. I to jest cała idea, która jest wpisane w moje serce: publicznie uwielbiać Jezusa z tymi którzy w Niego wierzą, Mu ufają i Go kochają, aby inni mogli poznać miłość Pana, doświadczyć jej i włączyć się w śpiew uwielbienia. Tym są dla mnie "wNieboGłosy”. Nie są koncertem, choć mają być profesjonalne, nie są występem, choć grają i śpiewają przygotowani ludzie, są wyśpiewaniem chwały Bogu. 
      
      Błogosławieństwo na Nowy Rok: 
      Poruszyły mnie dziś słowa Benedykta XVI zapisane w jego duchowym testamencie: "...mówię teraz do wszystkich, którym została powierzona moja posługa w Kościele: Trwajcie mocno w wierze! Nie dajcie się zmylić! (..)  Widziałem i widzę, jak z plątaniny hipotez wyłoniła się i na nowo wyłania racjonalność wiary. Jezus Chrystus jest naprawdę Drogą, Prawdą i Życiem – a Kościół, przy wszystkich swoich niedoskonałościach, jest naprawdę Jego Ciałem". 
      W tym "Nowym Roku" chcę życzyć każdemy mocnego trwania w wierze, jasności i przejrzystości wejrzenia umysłu i serca w tajemnicę Boga, którą objawia Jezus-Słowo i głębokiej ufności, że to On Jezus jest jedyną drogą. Niech On da nam też doświadczenie kochającej się, choć często słabej i poranionej, wspólnoty.`
  },
  {
    imageSrc: malyga,
    name: 'Ks. bp Maciej Małyga',
    description:
      'W sercu miasta i przy sercu Jezusa. Z piękną muzyką i razem. \n Na następne Wniebogłosy przyjdę bez roweru.'
  },
  {
    imageSrc: druszcz,
    name: 'Ks. Paweł Druszcz',
    description:
      'Uwielbienie wNieboGłosy to rzadka okazja do publicznej modlitwy, wyznania wiary dla każdego chrześcijanina. Cyklicznie, w uroczystość Bożego Ciała, na Placu Wolności we Wrocławiu wznosimy nasze głosy ku Bogu, który jedynie jest godzien wszelkiej chwały i czci. Poprzez muzykę, świadectwa i adorację zapraszamy Jezusa, aby zamanifestował swoją obecność pośród nas i w nas przez nowe wylania darów Ducha Świętego. Pragniemy, aby cały Wrocław tego dnia uwielbił Boga. \n Dlatego corocznie zapraszamy w Boże Ciało do Wrocławia, na Plac Wolności na wyjątkowe duchowe przeżycie wiary we wspólnocie Kościoła wraz z zespołem, chórem i solistami wNieboGłosów.'
  }
];

const Opinions = () => (
  <div>
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-[1440px] flex-col items-center justify-center px-5 py-20 lg:px-30 lg:py-[6.25rem]">
        <h1 className="my-16 font-cinzel text-2.5xl uppercase lg:my-[6.25rem] lg:text-6.5xl">
          Świadectwa
        </h1>
        {OPINIONS.map((opinion, index) => (
          <LeaderCard
            className={index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}
            description={opinion.description}
            imageSrc={opinion.imageSrc}
            key={opinion.name}
            name={opinion.name}
            role=""
            textLeft
          />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Opinions;
