import React from 'react'
import '../../App.css'
import './Footer.css'

function Footer() {
  return (
    <div>
        <section className="bg-black bg-opacity-50 showcase flex justify-center items-center bg-no-repeat footerSection">
            <div className='footerDiv'>
                <p className='footerFontStyleLarge'>Questions? Call <span className='FooterNumber'>000-800-040-1843</span></p>
                <div className='FooterTextContainer'>
                    <div className='FooterTextDiv FAQFooterDiv'><p className='footerStyleSmall'>FAQ</p></div>
                    <div className='FooterTextDiv HelpFooterDiv'><p className='footerStyleSmall'>Help Centre</p></div>
                    <div className='FooterTextDiv TermFooterDiv'><p className='footerStyleSmall'>Terms of Use</p></div>
                    <div className='FooterTextDiv PrivacyFooterDiv'><p className='footerStyleSmall'>Privacy</p></div>
                    <div className='FooterTextDiv FooterTextDivRow CookieFooterDiv'><p className='footerStyleSmall'>Cookie Preferences</p></div>
                    <div className='FooterTextDiv FooterTextDivRow CorporateFooterDiv'><p className='footerStyleSmall'>Corporate Information</p></div>
                    <div className='FooterTextDiv FooterTextDivRow NetfixFooterDiv'><p className='footerStyleSmall'>Netflix Inc.</p></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer