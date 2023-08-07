import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #8e59d7;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .a-mob-nav{
        text-decoration: none;
        color: #fff;
    }
  }
`;  
const Nav_Mob = ({ onNav, open }) => {
  const { t } = useTranslation();

  const handleNav = (sectionId) => {
    onNav(sectionId)
  }
  return (
    <div>
      <Ul open={open}>
        <li><a href="#who" onClick={() => handleNav('ref_Who')} className="a-mob-nav">{t("quem")}</a></li>
        <li><a href="#obj" onClick={() => handleNav('ref_Obj')} className="a-mob-nav">{t("obj")}</a></li>
        <li><a href="#swot" onClick={() => handleNav('ref_Swot')} className="a-mob-nav">{t("swot")}</a></li>
        <li><a href="#skills" onClick={() => handleNav('ref_Skills')} className="a-mob-nav">{t("hab")}</a></li>
        <li><a href="#proje" onClick={() => handleNav('ref_Proje')} className="a-mob-nav">{t("proj")}</a></li>
      </Ul>
    </div>
  );
};

export default Nav_Mob;
