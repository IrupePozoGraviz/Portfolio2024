import ContactForm from '@/components/contactButton'
import style from '@/styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={style.footer} role="contentinfo">
            <div className={style.bootcamp} aria-hidden="true"></div>
            <div>
                <div className={style.ContactForm}>
                    <ContactForm />
                </div>
            </div>
          
        </footer>
    );
}


