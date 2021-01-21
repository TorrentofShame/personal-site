import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const def = {
  "title": "Home - Simon Weizman",
  "keywords": "Simon, Weizman, Developer, Programmer, Full Stack, AutoCAD, Web Developer",
  "subject": "Simon Weizman",
  "author": "Simon Weizman, contact@simon.weizman.us",
  "description": "Simon Weizman"
};

function withMeta(d) {
  return (
    <Helmet>
      <title>{d.title ? d.title : def.title}</title>
      <meta name="keywords" content={d.keywords ? d.keywords : def.keywords} />
      <meta name="subject" content={d.subject ? d.subject : def.subject} />
      <meta name="author" content={d.author ? d.author : def.author} />
      <meta name="description" content={d.description ? d.description : def.description} />
      <meta name="og:title" content={d.title ? d.title : def.title} />
    </Helmet>
  );
}
withMeta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default withMeta;
