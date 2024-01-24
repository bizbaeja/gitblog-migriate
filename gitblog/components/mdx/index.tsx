import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import {CodeBlock} from './codeblock';
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
            background-color: rgb(255, 255, 255, 0.4);
            border-radius: 10px;
            line-height: 2.5;
            aside{
                color: #00d4ff;
            font-family:  Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            font-size: 0.8rem;   
            }
           pre[class *="prism-code"]{
            padding:5px !important;
            margin-bottom: -7px !important;
       
       
           }
        
        }
     
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