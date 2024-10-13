import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  src = "/images/logo.png",
  alt = "Logo TireoideCare",
  width = 348,
  height = 189,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <a onClick={handleClick} className="cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="logo"
      />
    </a>
  );
};

export default Logo;
