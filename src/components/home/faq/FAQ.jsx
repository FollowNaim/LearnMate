import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function FAQ() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 my-10 lg:items-center flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div>
            <h2 className="text-3xl font-bold">
              Frequently asked <span className="text-red-600">question</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Still do you have any questions to know?
              <p> Feel free to ask our experts here.</p>
            </p>
            <Button className="mt-6">Ask Your Questions</Button>
          </div>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Learn Mate?</AccordionTrigger>
              <AccordionContent>
                Learn Mate is an online platform that connects learners with
                expert tutors and resources, making learning more personalized,
                interactive, and efficient.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who can join Learn Mate?</AccordionTrigger>
              <AccordionContent>
                Anyone passionate about learning or teaching can join Learn
                Mate. Whether youre a student looking for guidance or an expert
                offering knowledge, this platform is for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is Learn Mate free to use?</AccordionTrigger>
              <AccordionContent>
                Creating an account is free! However, there are fees for premium
                courses and tutoring sessions. Some free content is also
                available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent>
                We accept major credit/debit cards, PayPal, and other secure
                payment methods.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I get a refund if Im not satisfied?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a refund policy for certain services. Please
                review our refund terms or contact support for assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
