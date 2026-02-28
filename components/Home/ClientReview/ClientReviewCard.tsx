import Image from "next/image";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
};

const ClientReviewCard = ({ name, role, image, review }: Props) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg m-2">
      <Image
        src={image}
        alt="client"
        width={60}
        height={60}
        className="rounded-full mx-auto"
      />
      <p className="mt-6 text-base text-gray-200 font-medium text-center">&quot;{review}&quot;</p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200 text-center">{name}</h1>
      <p className="mt-1 text-white text-center">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
