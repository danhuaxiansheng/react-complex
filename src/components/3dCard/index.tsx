
import React, { ReactNode, useState } from "react"
import { SectionModel } from "@/type/SectionModel";
import Container from "./container"

import "./style/index.scss";

function requireImage(src: string): string {
  return require("@/static/img/" + src);
}

const MAX_VISIBILITY = 3;

const Carousel = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className='carousel'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}>
        <svg stroke="currentColor" fill="currentColor"
          strokeWidth="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"></path></svg>
      </button>}
      {React.Children.map(children, (child, i) => (
        <Container style={{
          '--active': i === active ? 1 : 0,
          '--offset': (active - i) / 3,
          '--direction': Math.sign(active - i),
          '--abs-offset': Math.abs(active - i) / 3,
          'pointerEvents': active === i ? 'auto' : 'none',
          'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
          'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
        }}> {child}</Container>
      ))}

      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"></path></svg>
      </button>}
    </div>
  );
};

export default function Page({ imgSrc }: SectionModel) {
  return (
    <Carousel>
      {imgSrc?.map((src) => (<div className='card' key={src}><img src={requireImage(src)} /></div>))}
    </Carousel>
  );
}