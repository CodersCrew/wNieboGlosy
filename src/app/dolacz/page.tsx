import Button from '@/components/Button';

const Join = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center">
      <p className="mb-5 text-5xl">Podstrona w budowie...</p>
      <Button href="/dolacz/organizacja">Idź do: Organizacja</Button>
      <Button href="/dolacz/zaspiewaj">Idź do: Zaśpiewaj</Button>
    </div>
  );
};

export default Join;
