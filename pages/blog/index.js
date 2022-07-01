import Head from 'next/head'
import Land from '../../components/assest/Land'
import Blogs from '../../components/blog/Blogs'

export default function About() {
    return (
        <div className="mt-[70px]">
            <Head>
                <title>Blogs</title>
                <meta name='desription' content='Blog Page'/>
            </Head>
            <Land imgSrc={'/images/back1.jpg'} title="Blog /"/>
            <Blogs/>
        </div>
    )
}