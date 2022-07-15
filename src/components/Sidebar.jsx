import { SocialNetworks } from "./SocialNetworks";
import {InformationContainer} from './InformationContainer'
import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno AKH" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer/>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};
