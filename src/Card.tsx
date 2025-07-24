import React from "react";
import type { ButtonInfoPair } from "./Buttons";
import Buttons from "./Buttons";

type CardInfoProps = {
  colorClass: string;
  title: string;
  image: string;
  description: string;
  buttonInfos: ButtonInfoPair[];
}

const Card: React.FC<CardInfoProps> = ({ colorClass, title, image, description, buttonInfos }) => {
  return (
    <section className={`${colorClass} row align-items-center p-4 mb-5 rounded`}>
      <div className="col-md-3 pb-3 pb-md-0">
          <img
            src={image}
            className="img-fluid rounded img-thumbnail"
          />
          </div>
        <div className="col-md-9">
        <h2 className="h4 mb-3">{title}</h2>
          <p>{description}</p>
          <Buttons infos={buttonInfos} />
        </div>
    </section>
  );
};

export default Card;