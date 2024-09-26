import React, { useState } from 'react';

/**
 * Component to check the vertical alignment of HTML elements.
 * Allows users to paste HTML and external CSS code, processes it, and displays the text elements with vertical lines for alignment checks.
 */
const VerticalAlignChecker = () => {
  const [htmlInput, setHtmlInput] = useState('');
  const [cssInput, setCssInput] = useState(''); // New state for external CSS
  const [processedHtml, setProcessedHtml] = useState('');

  const handleHtmlInputChange = (e) => {
    setHtmlInput(e.target.value);
  };

  const handleCssInputChange = (e) => {
    setCssInput(e.target.value);
  };

  const processHTML = () => {
    // Combine HTML and CSS for rendering
    const styleTag = `<style>${cssInput}</style>`; // Wrap CSS in a <style> tag
    const combinedHtml = `${styleTag} ${htmlInput}`; // Combine HTML and CSS

    setProcessedHtml(combinedHtml); // Render the combined result
  };

  return (
    <section className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Vertical Alignment Checker</h1>
        <p className="text-gray-600">Paste your HTML and optional CSS code below to check the vertical alignment of text elements.</p>
      </header>

      <main>
        {/* Textarea for HTML input */}
        <div className="mb-4">
          <label htmlFor="htmlInput" className="block text-gray-700 font-medium mb-2">
            HTML Code
          </label>
          <textarea
            id="htmlInput"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste your HTML code here"
            value={htmlInput}
            onChange={handleHtmlInputChange}
            rows="10"
          ></textarea>
        </div>

        {/* Textarea for CSS input */}
        <div className="mb-4">
          <label htmlFor="cssInput" className="block text-gray-700 font-medium mb-2">
            CSS Code (Optional)
          </label>
          <textarea
            id="cssInput"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste your external CSS code here"
            value={cssInput}
            onChange={handleCssInputChange}
            rows="10"
          ></textarea>
        </div>

        {/* Button to process the HTML input */}
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
          onClick={processHTML}
        >
          Check Alignment
        </button>

        {/* Processed HTML display */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">Processed HTML with Vertical Lines</h2>
          <div
            className="output mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50"
            aria-live="polite"
            aria-label="Processed HTML content"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </section>
      </main>
    </section>
  );
};

export default VerticalAlignChecker;
