import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Language } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className: string;
}


export default ({ children, className }: CodeBlockProps ) => {
  const language = (className ?? '').toLowerCase();
  var theme = themes.oceanicNext;
  return (
    <Highlight
      theme={theme}
      
      code={children}
      language={language as Language}
      
    >
    
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className} style={{ ...style,width:"fit-content",display:"inline-block" , margin:"0 auto"}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};