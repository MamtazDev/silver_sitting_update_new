import React from "react";
import styles from "@/styles/Faq.module.css";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const faqs = [
    {
      question:
        "Why is a required age of 55 years or older set as a condition for participation?",
      answer:
        "<p>With SilverSitting, we are pursuing our heart's desire to enable seniors to find meaningful employment. Looking after children can create the feeling of being needed and of being an active part of society even after retirement. Studies show that the exchange with children in particular can have a positive physical and psychological effect on the vitality of seniors. We have therefore set the age range at 55 and over. For example, if you are an early retiree and just under 55 years old, you are welcome to email us at <a href='mailto:info@silversitting.com'>info@silversitting.com</a>  . In such special cases, an exception can be made if necessary.</p>",
    },
    {
      question: "How can I best prepare for my first childcare?",
      answer:
        "We recommend that you talk openly about your expectations, experiences and also needs, such as physical limitations, with your parents. Conversely, the parents will give you some information about their child (eating and sleeping habits, favourite activities, etc.). It is best if you clarify as detailed as possible all questions around the care service, so that in the end all participants are satisfied.",
    },
    {
      question:
        "How does the childcare come about, what costs can be expected?",
      answer:
        "​The use of SilverSitting is completely free! In just a few steps you can register as a childcare worker, fill out your profile with appropriate information about yourself and wait for interested parents to contact you. Important: There are no costs for you as a childcare worker. Any expenses incurred as part of the care (e.g. travel expenses, cinema visits, trips to the zoo, etc.) should be reimbursed by the parents. Discuss this topic prior to mentoring. For more information on how to do this, click on '<a href='/guidance'>How it works</a>  '.",
    },
    {
      question: "Is my personal data freely accessible?",
      answer: `<div>No, only your first name, your description, your photo and how far away you are from your parents will be displayed. Please understand that we have to make this information available to the parents looking for childcare - after all, the parents make a decision for the well-being and safety of their children based on your information.</br>
        You can read more about the protection of your data in the <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/terms-and-conditions" target="_blank">terms and conditions</a>  and the <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/privacy-statement" target="_blank">data protection regulations</a>.</div>`,
    },
    {
      question: "Does SilverSitting pre-select the child carers?",
      answer:
        "We give parents the opportunity to organize childcare themselves with just a mouseclick. Parents are free to choose which SilverSitter appears competent and friendly. Before a childcare is arranged, it is absolutely necessary to get to know each other personally. This is the only way for parents to determine whether the chemistry is right.",
    },
    {
      question: "Can I also earn money with childcare?",
      answer:
        "Yes. You have the option of offering your services free of charge (you can specify this later in your profile) and you can also charge money for your service. About 12-15 euros per hour are usual, depending on the region and effort. These and all other above-mentioned agreements are to be agreed directly with the parents either by e-mail or in a first personal meeting. Payments between you and parents are not supported by this platform.Normally you will have a dependent job (mini-job) with childcare. There is nothing for you to do here, because your parents will register it at the mini-job center. As a mini-jobber, you have statutory accident insurance and are therefore covered in the event of an accident at work, an accident on the way to work or an occupational disease. However, only if the parents register your activity as a mini-job. Please also note the additional income limit for a mini-job. You can get more information <a target='_blank' href='https://www.minijob-zentrale.de/DE/die-minijobs/rentner/rentner_node.html'>here</a>  .",
    },
    {
      question: "Can I unsubscribe from the platform at any time?",
      answer:
        "That would be a shame, but yes, you can send us an email to <a href='mailto:info@silversitting.com'>info@silversitting.com</a>  with this request and we will then delete your account and all your data within 3 working days. You will then receive a confirmation by e-mail about the successful deletion of your profile and all your data.",
    },
  ];
  return (
    <div className="container">
      {faqs.map((item, idx) => (
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          className={styles.accordionContainer}
        >
          <Accordion.Item eventKey={`${idx}`}>
            <Accordion.Header>{item?.question}</Accordion.Header>
            <Accordion.Body>
              <div dangerouslySetInnerHTML={{ __html: item?.answer }} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
