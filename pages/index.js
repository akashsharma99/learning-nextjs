import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I am <b>Akash.</b> I am a software engineer at Dell making sure your new shiny devices get built and shipped on time.</p>
      </section>
    </Layout>
  )
}
