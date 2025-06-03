
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Frequently Asked Questions - Free AI Tools by AIWEBTOOLS.AI
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are AIWEBTOOLS.AI's Scientific Genius GPTs?</AccordionTrigger>
          <AccordionContent>
            AIWEBTOOLS.AI's Scientific Genius GPTs are free AI tools trained to emulate the thought processes and knowledge of historical scientific figures like Nikola Tesla and Albert Einstein. These AI tools allow you to engage in educational conversations and explore scientific concepts through their unique perspectives, making complex physics and engineering topics accessible to everyone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Are these AI tools from AI WEB TOOLS completely free?</AccordionTrigger>
          <AccordionContent>
            Yes! AIWEBTOOLS.AI provides these AI tools as free educational resources. While you need a ChatGPT Plus subscription to access custom GPTs on the ChatGPT platform, our Tesla GPT and Einstein GPT models are available at no additional cost through our platform. We believe in making AI tools accessible for education and learning.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How accurate are these AI representations from AIWEBTOOLS.AI?</AccordionTrigger>
          <AccordionContent>
            Our AI tools at AIWEBTOOLS.AI are trained on extensive historical records and scientific works to provide educational value and inspiration. While they are AI interpretations meant for learning purposes, they capture the essence of these brilliant minds. These free AI tools are designed to spark curiosity and provide historical context for scientific discoveries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Can I use AIWEBTOOLS.AI's free AI tools for educational purposes?</AccordionTrigger>
          <AccordionContent>
            Absolutely! These AI tools from AI WEB TOOLS are excellent educational resources for students, educators, researchers, and anyone interested in science and physics. Our free AI tools can help explain complex concepts, spark curiosity, provide historical context for scientific discoveries, and enhance learning experiences in STEM education.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>What other AI tools does AIWEBTOOLS.AI offer?</AccordionTrigger>
          <AccordionContent>
            AIWEBTOOLS.AI offers a comprehensive suite of free AI tools beyond Tesla GPT and Einstein GPT. Visit our main website at AIWEBTOOLS.AI to explore our full collection of AI tools for various purposes including content creation, analysis, education, and productivity. We're constantly developing new AI tools to serve our community.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How do I get started with these free AI tools?</AccordionTrigger>
          <AccordionContent>
            Getting started with AIWEBTOOLS.AI's free AI tools is simple! Click on the "Chat with Tesla GPT" or "Chat with Einstein GPT" buttons above to begin your AI-powered conversations. No complex setup required - just start exploring the fascinating world of AI-enhanced learning with our educational AI tools.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
