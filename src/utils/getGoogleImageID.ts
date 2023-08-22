const getGoogleImageID = (url: string): string => {
  const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;

  return (url.match(regex) as string[])[1];
};

export default getGoogleImageID;
