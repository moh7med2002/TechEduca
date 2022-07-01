import Head from 'next/head'
import Land from '../../components/assest/Land'
import Courses from '../../components/courses/Courses'

export default function About() {
    return (
        <div className="mt-[70px]">
            <Head>
                <title>Courses</title>
                <meta name='desription' content='Courses Page'/>
            </Head>
            <Land imgSrc={'/images/back1.jpg'} title="Courses /"/>
            <Courses/>
        </div>
    )
}