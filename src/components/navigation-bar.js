import React from 'react';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) {
  let links = props.links.map((link, index) => {
    return(<span key={index}><a href={link.href}>{link.text}</a> </span>);
  });
  return (
    <div>
      <h1>{props.title}</h1>{links}
    </div>
  );
};
