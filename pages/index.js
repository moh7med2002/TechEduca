import Head from 'next/head'
import Image from 'next/image'
import AwsomeFeatures from '../components/Home/AwsomeFeatures'
import Experts from '../components/Home/Experts'
import HomeLand from '../components/Home/HomeLand'
import PopularCourses from '../components/Home/PopularCourse'
import Register from '../components/Home/Register'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TechEduca</title>
        <meta name='desription' content='Home Page'/>
      </Head>
      <HomeLand/>
      <AwsomeFeatures/>
      <PopularCourses/>
      <Register/>
      <Experts/>
    </div>
  )
}
