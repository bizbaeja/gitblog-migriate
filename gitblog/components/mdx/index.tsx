import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import CodeBlock from './codeblock';
import 'github-markdown-css';

interface MDXProps{
  children: React.ReactNode;
}

const components = {
  code: CodeBlock,
  img: (props: any) => <img {...props} style={{ maxWidth: '100%' }} />,
};

export default function MDXLayout({ children }:MDXProps) {
  return (
    <>
      <style jsx>
        {`
          .markdown-body{
            padding: 20px;
            background-color: rgb(255, 255, 255, 0.3);
          }
            .markdown-body :global(h1){
                font-size: 2.25rem;
            }
        `}
      </style>
      <MDXProvider components={components as MDXComponents}>
        <div className="markdown-body">
          {children}
        </div>
      </MDXProvider>
    </>
  );
}