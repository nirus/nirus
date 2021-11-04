import type { NextPage } from 'next';
import Head from 'next/head';
import MetaData from '@components/MetaData';
import BioCard from '@components/BioCard';
import home from '@styles/home.module.scss';
import BioLinks, { BioProps } from '@components/BioLinks';

type Bio = { about: string; title1: string; title2: string };
type Props = { header: BioProps["bioInfo"], footer: BioProps["bioInfo"], bio: {niranjan: Partial<Bio>; nirus: Partial<Bio>} };

const Home: NextPage<Props> = ( props ) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300" rel="stylesheet" />
        <link href="images/niranjan.jpg" rel="preload" as="image" />     
        <title>NiRUS</title>   
        <MetaData />
      </Head>
      <main className={home.container}>
        <header>
          <BioLinks classes={{ icons: home.icons }} bioInfo={props.header} />
        </header>
        <BioCard classes={{ biocard: home.biocard, header: home.header }}>
          <section className={home.about}>
            <article className={home.aboutNirus}>
              <h1 className={home.name} aria-label="nirus">{props.bio.nirus.title1}</h1>
              <h5>{props.bio.nirus.title2}</h5>
              <p>{props.bio.nirus.about}</p>
            </article>
            <article className={home.aboutNiranjan}>
              <h1 className={home.name}>{props.bio.niranjan.title1}</h1>
              <h5>{props.bio.niranjan.title2}</h5>
              <p>disciple of Revered <a className={home.ganesh} rel="noreferrer" target="_blank" title="Read about Lord Ganesha on wikipedia" href="https://en.wikipedia.org/wiki/Ganesha">Ganapati</a></p>
            </article>
          </section>
        </BioCard>
        <footer>
          <BioLinks classes={{ icons: home.icons }} bioInfo={props.footer} />
        </footer>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const cv = require('../cv.json');
  return {
    props: { ...cv }
  }
}

export default Home
