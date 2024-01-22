import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Language } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className: string;
}


export default ({ children, className }: CodeBlockProps) => {
  const language = (className ?? '').toLowerCase();
  var theme = themes.oceanicNext;

  const codeContent = children.trim(); // Remove leading/trailing whitespace

  // Decide whether to show backticks based on code length
  const showBackticks = codeContent.split('\n').length > 1;

  return (
    <Highlight
      theme={theme}
      code={children}
      language={language as Language}
    >
      {({
        className, style, tokens, getLineProps, getTokenProps,
      }) => (
        <pre className={className} style={{ ...style, width: "fit-content", display: "inline-block", margin: "0 auto", whiteSpace: "pre-wrap" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span style={{ fontFamily: "Melno" }} key={key} {...getTokenProps({ token, key })}>
                    {showBackticks ? `${token.content}` : `\`${token.content}\``}
                </span>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};