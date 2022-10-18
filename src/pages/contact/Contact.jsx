import './contact.css'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'

export default function Contact() {
    return (
        <>
            <Header />
            <div className='contact'>
                <div className="contactWrapper">
                    <p>like what you see?</p>
                    <h3>I'd love to hear from you!</h3>
                    <button className='contactBtn'>Get in touch!</button>
                </div>
                <Sidebar />
            </div>
        </>
    )
}