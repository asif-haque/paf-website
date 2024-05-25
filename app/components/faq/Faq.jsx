"use client";
import { getFAQs } from "@/app/api/apiHandlers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import "./Faq.css";

const Faq = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFAQs()
      .then((res) => {
        setData(res);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setData("");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="px-5 pt-5 pb-12 bg-slate-100 md:px-16 md:flex gap-16"
      id="faq"
    >
      <div className="flex-[0.4]">
        <h1 className="text-lg font-semibold">FAQs</h1>
        <div>
          Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
          <a
            href="https://acharyaprashant.org/en/technical-support"
            target="_blank"
          >
            support
          </a>{" "}
          team.
        </div>
      </div>
      <Accordion className="flex-1" type="single" collapsible>
        {data?.map((el) => (
          <AccordionItem value={el.question} key={el.question}>
            <AccordionTrigger className="text-left [text-decoration:none]">
              {el.question}
            </AccordionTrigger>
            <AccordionContent>{parse(el.answer)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
