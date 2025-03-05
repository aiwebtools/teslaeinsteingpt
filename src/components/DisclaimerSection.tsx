
const DisclaimerSection = () => {
  return (
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Disclaimer
      </h2>
      <div className="space-y-6 text-gray-300">
        <p>
          The Nikola Tesla GPT and Albert Einstein GPT are AI-powered conversational models designed to simulate interactions with these historical figures. While we strive for accuracy and authenticity, please note:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            These are AI interpretations and should not be considered perfect representations of the historical figures.
          </li>
          <li>
            The responses generated are based on available historical records, scientific works, and AI training data.
          </li>
          <li>
            These GPTs are meant for educational and entertainment purposes and should not replace professional scientific or academic advice.
          </li>
          <li>
            The AI models may have limitations in their understanding of complex scientific concepts and historical contexts.
          </li>
          <li>
            Both Tesla GPT and Einstein GPT are designed to provide insights into their respective fields of expertise - electricity and physics - but should be used as supplementary learning tools only.
          </li>
          <li>
            All content generated through these GPTs should be fact-checked and verified through reliable sources.
          </li>
        </ul>
        <p>
          By using these GPTs, you acknowledge that the responses are AI-generated and may not always be 100% historically or scientifically accurate.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerSection;
