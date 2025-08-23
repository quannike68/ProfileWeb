import React from "react";
import Image from "next/image";
type typeCardProps = {
  title: string;
  description: string;
  icon: string;
};

const ServiceCard = ({ title, description, icon }: typeCardProps) => {
  return (
    <div>
      <Image src={`/${icon}`} alt={`${title} icon`} width={60} height={60} />

      <h1 className="mt-6 text-xl lg:text-2x1 xl:text-4xl font-bold text-gray-200">
        {title}
      </h1>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
