import React from "react";
import { Helmet } from "react-helmet-async";

/* Images */

import Favicon from "_assets/favicon.ico";

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
      <meta name="og:description" content={def.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@torrentofshame" />
      <meta name="twitter:creator" content="@torrentofshame" />
      <meta name="twitter:domain" content="https://simon.weizman.us/" />
      <link rel="icon" type="image/x-icon" href={ Favicon } />
    </Helmet>
  );
};

export default MetaHead;
