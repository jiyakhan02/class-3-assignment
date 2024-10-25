// import Header from "./component/Header";
// import Footer from "./component/Footer";
import Image from "next/image";
import Picture from "./public/download.jpeg";

export default function Home() {
  return (
    <div className="flex justify-between item-center h-screen gap-6 ">
      <div className="w-1/2 mx-12">
        <h1 className="font-bold text-[30px] gap-2 my-5">
          QUAID E AZAM MUHAMMAD ALI JINNAH
        </h1>

        <p className="my-5 text-[20px]">
          Quaid-e-Azam Muhammad Ali Jinnah was the founder of Pakistan and a
          great leader. He was born on 25 December 1876 and played a pivotal
          role in the creation of Pakistan.
          <br />
          His leadership, determination, and vision for a separate Muslim state
          led to the birth of Pakistan on 14 August 1947. Jinnah was a lawyer by
          profession and worked tirelessly for the rights of Muslims in India.
          He led the All India Muslim League and became the face of the movement
          for independence.
          <br />
          His speeches and efforts are a testament to his leadership and his
          ability to inspire a nation. Quaid-e-Azam is remembered as the "Father
          of the Nation" in Pakistan.
        </p>
      </div>

      <div>
        <Image src={Picture} alt="Quaid-e-Azam" className="m-8" />
      </div>
    </div>
  );
}
