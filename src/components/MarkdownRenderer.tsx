import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Split content into blocks by double newlines or lines
  const rawBlocks = content.split(/\n\n+/);

  return (
    <div className="space-y-6 text-slate-700 leading-relaxed text-base">
      {rawBlocks.map((block, index) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Horizontal rule
        if (trimmed === '---') {
          return <hr key={index} className="my-8 border-slate-200" />;
        }

        // H2 heading
        if (trimmed.startsWith('## ')) {
          const title = trimmed.replace(/^##\s+/, '');
          return (
            <h2
              key={index}
              className="text-2xl font-bold tracking-tight text-slate-900 mt-10 mb-4 pt-4 border-t border-slate-100 first:border-0 first:pt-0"
            >
              {title}
            </h2>
          );
        }

        // H3 heading
        if (trimmed.startsWith('### ')) {
          const title = trimmed.replace(/^###\s+/, '');
          return (
            <h3 key={index} className="text-lg font-semibold text-slate-900 mt-6 mb-2">
              {title}
            </h3>
          );
        }

        // Blockquote
        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed.replace(/^>\s*/gm, '');
          return (
            <blockquote
              key={index}
              className="p-4 my-4 bg-indigo-50/60 border-l-4 border-indigo-600 rounded-r-xl text-slate-800 text-sm font-medium"
            >
              {renderFormattedInline(quoteText)}
            </blockquote>
          );
        }

        // Table
        if (trimmed.includes('|') && trimmed.includes('\n|')) {
          return renderTable(trimmed, index);
        }

        // Unordered list
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').filter((line) => line.trim().startsWith('- ') || line.trim().startsWith('* '));
          return (
            <ul key={index} className="space-y-2 my-4 list-none pl-1 text-slate-700">
              {items.map((item, i) => {
                const text = item.trim().replace(/^[-*]\s+/, '');
                return (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-2.5" />
                    <span>{renderFormattedInline(text)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        // Ordered list
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split('\n').filter((line) => /^\d+\.\s/.test(line.trim()));
          return (
            <ol key={index} className="space-y-2.5 my-4 list-none pl-1 text-slate-700">
              {items.map((item, i) => {
                const text = item.trim().replace(/^\d+\.\s+/, '');
                return (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="flex-1">{renderFormattedInline(text)}</span>
                  </li>
                );
              })}
            </ol>
          );
        }

        // Normal paragraph
        return (
          <p key={index} className="text-slate-700 leading-relaxed text-sm sm:text-base">
            {renderFormattedInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

// Helper to render markdown tables
const renderTable = (tableMarkdown: string, key: number) => {
  const lines = tableMarkdown.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2) return null;

  const headerLine = lines[0];
  const separatorLine = lines[1];
  const bodyLines = lines.slice(2);

  const parseRow = (line: string) => {
    return line
      .split('|')
      .slice(1, -1)
      .map((cell) => cell.trim());
  };

  const headers = parseRow(headerLine);
  if (headers.length === 0) return null;

  return (
    <div key={key} className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
      <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
        <thead className="bg-slate-50/80">
          <tr>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 font-semibold text-slate-900 border-r border-slate-200 last:border-r-0"
              >
                {renderFormattedInline(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {bodyLines.map((rowLine, rowIndex) => {
            const cells = parseRow(rowLine);
            return (
              <tr key={rowIndex} className="hover:bg-slate-50/50 transition-colors">
                {cells.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-slate-700 border-r border-slate-100 last:border-r-0 align-top"
                  >
                    {renderFormattedInline(cell)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Inline formatter for bold, italic, and citations
export const renderFormattedInline = (text: string): React.ReactNode => {
  // Regex splitting by bold (**...**) and italics (*...*)
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIndex = 0;

  // Process bold first: **text**
  const boldRegex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderItalicsAndLinks(text.substring(lastIndex, match.index), keyIndex++));
    }
    parts.push(
      <strong key={keyIndex++} className="font-semibold text-slate-900">
        {match[1]}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(renderItalicsAndLinks(text.substring(lastIndex), keyIndex++));
  }

  return parts;
};

const renderItalicsAndLinks = (str: string, baseKey: number): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  const italicRegex = /\*([^*]+)\*/g;
  let lastIndex = 0;
  let match;
  let subKey = 0;

  while ((match = italicRegex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }
    parts.push(
      <em key={`${baseKey}-${subKey++}`} className="italic text-slate-800">
        {match[1]}
      </em>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return parts;
};

