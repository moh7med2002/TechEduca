import Head from 'next/head'
import TrustBy from '../components/about/trustBy'
import Welcome from '../components/about/welcome'
import Land from '../components/assest/Land'
import AwsomeFeatures from '../components/Home/AwsomeFeatures'
export default function About() {
    return (
        <div className="mt-[70px]">
            <Head>
                <title>About</title>
                <meta name='desription' content='About Page'/>
            </Head>
            <Land imgSrc={'/images/back1.jpg'} title="About TechEduca /"/>
            <Welcome/>
            <AwsomeFeatures/>
            <TrustBy/>
        </div>
    )
}