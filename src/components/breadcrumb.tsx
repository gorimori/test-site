import React from 'react';

type Item = {
  href: string;
  text: string;
};

type Prop = {
  items: Item[];
};

const Text: React.FC<{ content: string }> = ({ content }) => (
  <span className="breadcrumb__text">{content}</span>
);

export const Breadcrumb: React.FC<Prop> = ({ items }) => (
  <nav className="breadcrumb">
    <ul className="breadcrumb__inner">
      {items.map(({ href, text }, i) => (
        <li className="breadcrumb__item" key={i}>
          {items.length === i + 1 ? (
            <Text content={text} />
          ) : (
            <a href={href} className="breadcrumb__link">
              <Text content={text} />
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
);
