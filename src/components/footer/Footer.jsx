import './footer.css'
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation()  
  return (
    <div>
        <footer className='footer'>
            <section className='section-left-footer'>
                <h5 className='hFooter'>César Morsoleto Batista</h5>
                <p>{t("email")}</p>
                <p>{t("phone")}</p>
            </section>
        </footer>
    </div>
  )
}

export default Footer
