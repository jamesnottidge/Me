import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandIcon } from "@sanity/icons";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FAQItem[];
};
const faqs = [
  {
    question: "What is Lorem Ipsum?",
    answer: "Lorem Ipsum is simply dummy text...",
  },
  {
    question: "Why do we use it?",
    answer: "It is a long established fact that...",
  },
  // Add more FAQ items here
];
export default function FAQ() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl pb-3">FAQ</h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="bg-blue-400">
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            className="bg-slate-500"
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
