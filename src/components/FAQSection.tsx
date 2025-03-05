
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
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are Scientific Genius GPTs?</AccordionTrigger>
          <AccordionContent>
            Scientific Genius GPTs are AI models trained to emulate the thought processes and knowledge of historical scientific figures like Nikola Tesla and Albert Einstein. They allow you to engage in conversations and explore scientific concepts through their unique perspectives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How accurate are these AI representations?</AccordionTrigger>
          <AccordionContent>
            While our GPTs are trained on extensive historical records and scientific works, they are AI interpretations meant to provide educational value and inspiration. They aim to capture the essence of these brilliant minds while acknowledging the limitations of AI representation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use these GPTs for educational purposes?</AccordionTrigger>
          <AccordionContent>
            Yes! These GPTs are excellent educational tools for students, educators, and anyone interested in science and physics. They can help explain complex concepts, spark curiosity, and provide historical context for scientific discoveries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do I need a subscription to use these GPTs?</AccordionTrigger>
          <AccordionContent>
            You need a ChatGPT Plus subscription to access custom GPTs. Once you have a subscription, you can freely interact with both Tesla GPT and Einstein GPT through the ChatGPT platform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
