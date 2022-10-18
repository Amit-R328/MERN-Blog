import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import './about.css'

export default function About() {
    return (
        <>
            <Header />
            <div className='about'>
                <div className="aboutWrapper">
                    <p>From an early age, I was interested in technology and soon discovered my passion for coding. In April 2012, I began my service as a DevOps Developer for the Naval Military Service MMTM. This role allowed me to learn from web programmers, who provided guidance and foundational support to expand my knowledge. I was responsible for gathering requirements to select tools, infrastructure, and processes based on operational needs. Additionally, I analyzed workflow inefficiencies to develop and implement strategies to mitigate risks. This year, I completed an intensive 640-hour Full-Stack Bootcamp at Misterbit Coding Academy. The program qualifies Full-Stack Developers, providing industry insight and the fundamentals necessary to succeed. These days i'm looking for my next challenge</p>
                </div>
                <Sidebar />
            </div>
        </>
    )
}