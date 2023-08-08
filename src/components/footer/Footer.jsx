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
                <p>{t("phone")} <a href="https://api.whatsapp.com/send/?phone=961615522&text&type=phone_number&app_absent=0" target='_blank' noopener="true" noreferrer="true" className='a-phone'> +55 (11) 96161-5522</a></p>
            </section>
        </footer>
    </div>
  )
}

export default Footer
