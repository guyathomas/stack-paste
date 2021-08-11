import React from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [content, setContent] = React.useState("");
  return (
    <div>
      <h2>Paste Your Stack</h2>
      <input
        style={{ marginBottom: '1rem' }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setContent(event.target.value);
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: content.replace(/\\n/g, '<br />') }} />
    </div>
  );
};

export default Home;
