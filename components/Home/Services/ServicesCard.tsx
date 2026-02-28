import Image from "next/image";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServicesCard = ({ icon, name, description }: Props) => {
  return (
    <div className="bg-[#121121] hover:bg-[#23213d] transition-all duration-300 p-8 rounded-lg hover:scale-105 cursor-pointer">
      <Image src={icon} alt={name} width={60} height={60} />
      <h1 className="text-xl font-bold mt-6 text-gray-200">{name}</h1>
      <p className="text-gray-300 mt-6">{description}</p>
    </div>
  );
};

export default ServicesCard;
