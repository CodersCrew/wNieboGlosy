import Image from 'next/image';

import getYouTubeID from '@/utils/getYouTubeID';

const VideoCard = ({
  asset,
  index
}: {
  asset: { url: string; title: string; preview: string };
  index: number;
}) => (
  <a
    href={`https://www.youtube.com/watch?v=${getYouTubeID(asset.url)}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    <Image
      alt={`Nagranie nr ${index}`}
      className="rounded-lg"
      layout="fill"
      objectFit="cover"
      src={asset.preview}
    />
    <div className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center rounded-lg bg-black/70 px-5">
      <Image
        alt="Oglądaj na YouTube"
        height={70}
        src="/icons/play-round-icon.svg"
        width={70}
      />
      <div className="absolute bottom-4 left-4 max-w-[60%] font-cinzel text-sm text-white shadow-2xl md:text-2xl">
        {asset.title}
      </div>
    </div>
  </a>
);

export default VideoCard;
