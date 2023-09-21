import Kanan from '@/components/Kanan'
import Navbar from '@/components/Navbar'
import Kiri from '@/components/Kiri'
import Head from 'next/head'
import { motion } from "framer-motion"
import Tengah from '@/components/Tengah'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ricky D.W</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
            <Kiri />
          </motion.div>
          <div className='h-[88vh] mx-auto p-4'>
            <Tengah />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
            <Kanan />
          </motion.div>
        </div>
      </main>
    </>
  )
}
