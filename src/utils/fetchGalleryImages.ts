import * as fs from 'fs/promises';
import * as path from 'path';

export type GalleryImage = {
  id: string;
  imageUrl: string;
  year: number;
};

const galleryPath: string = path.join(
  process.cwd(),
  'public',
  'assets',
  'gallery'
);

const readImagesFromFolder = async (
  folderPath: string,
  year: number
): Promise<GalleryImage[]> => {
  try {
    const files = await fs.readdir(folderPath);
    const images: GalleryImage[] = [];

    for (const file of files) {
      const imageUrl = path
        .join('/assets', 'gallery', year.toString(), file)
        .replace(/\\/g, '/');

      const image: GalleryImage = {
        id: file,
        imageUrl,
        year
      };

      images.push(image);
    }

    return images;
  } catch (error) {
    console.error('Error reading images from folder:', error);
    return [];
  }
};

export const fetchGalleryImages = async () => {
  try {
    const regex = /\b(?:[1-9]\d{3}|[1-9]\d{2}|[1-9]\d{1}|[1-9])\b/;
    const yearFolders = await fs.readdir(galleryPath);
    const years: number[] = [];

    for (const folderName of yearFolders) {
      const year = parseInt(folderName, 10);
      if (!isNaN(year) && regex.test(year.toString())) {
        years.push(year);
      }
    }

    const imagesByYear: Record<number, GalleryImage[]> = {};

    for (const year of years) {
      const yearFolder = path.join(galleryPath, year.toString());
      const imagesForYear = await readImagesFromFolder(yearFolder, year);

      const sortedImagesForYear = imagesForYear.sort((a, b) => {
        const getNumericValue = (url: string) => {
          const parts = url.split('/');
          const fileName = parts[parts.length - 1];
          const numericPart = fileName.split('-')[0];
          return parseFloat(numericPart);
        };

        const aValue = getNumericValue(a.imageUrl);
        const bValue = getNumericValue(b.imageUrl);

        if (aValue !== bValue) {
          return aValue - bValue;
        }

        return a.imageUrl.localeCompare(b.imageUrl);
      });

      imagesByYear[year] = sortedImagesForYear;
    }

    const uniqueYearsArray = years;

    return { images: imagesByYear, uniqueYearsArray };
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return { images: {}, uniqueYearsArray: [] };
  }
};
