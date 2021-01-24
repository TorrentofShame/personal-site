import React from "react";
import { Helmet } from "react-helmet-async";

/* Images */

import Favicon from "_assets/favicon.ico";
import FaviconPNG from "_assets/favicon.png";
import favicon32 from "_assets/favicon-32x32.png";
import favicon16 from "_assets/favicon-16x16.png";
import safpintab from "_assets/safari-pinned-tab.svg";

const def = {
  "title": "Home - Simon Weizman",
  "keywords": "Simon, Weizman, Developer, Programmer, Full Stack, AutoCAD, Web Developer",
  "subject": "Simon Weizman",
  "author": "Simon Weizman, contact@simon.weizman.us",
  "description": "Simon Weizman"
};

const MetaHead = () => {
  return (
    <Helmet>
      <title>Home - Simon Weizman</title>
      <meta name="keywords" content={def.keywords} />
      <meta name="subject" content={def.subject} />
      <meta name="author" content={def.author} />
      <meta name="description" content={def.description} />
      <meta name="og:site_name" content="Simon Weizman Portfolio" />
      <meta name="og:title" content={def.title} />
      <meta name="og:image" content={FaviconPNG} />
      <meta name="og:description" content={def.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@torrentofshame" />
      <meta name="twitter:creator" content="@torrentofshame" />
      <meta name="twitter:domain" content="https://simon.weizman.us/" />
      <link rel="icon" type="image/x-icon" href={ Favicon } />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={safpintab} color="#282D32" />
      <link rel="icon" type="image/png" href={FaviconPNG} sizes="940x940" />
    </Helmet>
  );
};

export default MetaHead;
