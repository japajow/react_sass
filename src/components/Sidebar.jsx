import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.sass";
export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno AKH" />
      <p className="title">Desenvolvedor</p>
      <p>rede sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};
