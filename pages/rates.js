import React, { Suspense, lazy } from "react";
import Footer from '../components/Footer';
import { Parallax } from 'react-parallax';
import { NextSeo } from "next-seo";
import { pagesSEO } from "../seo.config";
import { Analytics } from "@vercel/analytics/react";
import Loader from '../components/Loader';

const ResponsiveNavbar = lazy(() => import("../components/ResponsiveNav"));
const RatesHero = lazy(() => import("../components/RatesHero"));
const RateContent = lazy(() => import("../components/rates/RateContent"));
const NxtContact = lazy(() => import("../components/nextChapter/NxtContact"));

function Rates() {
  return (
  <div>
      <NextSeo {...pagesSEO.rates} />
      <Suspense fallback={<Loader />}>
        <ResponsiveNavbar />
        <Parallax blur={{ min: -30, max: 30 }} bgImage="/images/bg.jpg" strength={200}>
          <RatesHero />
        </Parallax>
        <RateContent />
        <NxtContact />
        <Footer />
      </Suspense>
      <Analytics />
      </div>
  );
}

export default Rates;
