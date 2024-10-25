import Image from "next/image";
import Q1 from "./Q1.jpeg";
import Q2 from "./Q2.jpeg";
import Q3 from "./Q3.jpeg";
import Q4 from "./Q4.jpeg";
export default function Gallery() {
  return (
    <div className="flex justify-between mx-2 m-2">
      <Image src={Q1} alt="picture" width={300} height={200} />
      <Image src={Q2} alt="picture" width={300} height={200} />
      <Image src={Q3} alt="picture" width={300} height={200} />
      <Image src={Q4} alt="picture" width={300} height={200} />
    </div>
  );
}
