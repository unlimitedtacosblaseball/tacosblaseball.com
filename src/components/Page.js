import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";
import { useMarkdown } from "../hooks/useMarkdown";

const TITLE = "Tacos Blaseball";

const Page = ({ slug, title }) => {
  const [loading, markdown] = useMarkdown(slug);

  useEffect(() => {
    document.title = `${TITLE} :: ${title || slug}`;
  }, [slug, title]);

  if (!markdown && !loading) return <Page slug={"lost"} title="404" />;
  return <ReactMarkdown source={markdown} escapeHtml={false} />;
};

export default Page;
