import Head from 'next/head'
import Land from '../components/assest/Land'
import MainContact from '../components/contact/mainContact'
export default function About() {
    return (
        <div className="mt-[70px]">
            <Head>
                <title>Contact</title>
                <meta name='desription' content='Contact Page'/>
            </Head>
            <Land imgSrc={'/images/back1.jpg'} title="Contact Us /"/>
            <MainContact/>
        </div>
    )
}