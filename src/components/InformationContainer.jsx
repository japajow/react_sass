import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

export const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(62)99966-9341</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>suportecsanapolis@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Anápolis / GO</p>
        </div>
      </div>
    </section>
  );
};
