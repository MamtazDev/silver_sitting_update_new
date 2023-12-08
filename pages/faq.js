import React from "react";
import styles from "@/styles/Faq.module.css";
import { Accordion } from "react-bootstrap";
import Meta from "@/components/Shared/Meta";

const parentsFAQ = [
  {
    question: "How does the care take place and what are the costs?",
    content: `<div>We do NOT charge a usage fee for the provision of silversitting.com as a digital platform. This platform is completely free for seniors and parents to use for anyone who is currently signing up. You can use our <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/child-care"> search function</a> to find available seniors who offer childcare in your area without registering. This gives you a good overview of all the childcare workers who are registered in the vicinity of your whereabouts and you can use the photos and personal information to make a first impression.</div></br>  
    <div>Many seniors offer their care services free of charge and on a voluntary basis. This can be recognized by a symbol with two hearts hugging each other. If one or more child carers have aroused your interest, you will be invited to register free of charge before contacting the child career.</div>`,
  },
  {
    question:
      "Suppose a SilverSitter does not work on a voluntary basis but asks for money. What to look out for?",
    content: `<div>Childcare workers who register with SilverSitting are free to work on a voluntary basis or to charge money for their work. As soon as you have searched for childcare providers, you can see in the seniors' brief information whether they would like to look after your children on a voluntary basis. If any information is missing, you are welcome to ask the childcare provider what kind of payment they would like in return. If a salary is agreed upon, you can base yourself on the average hourly wage of around 12 to 15 euros for childcare workers. There is no way to make a payment via SilverSitting. SilverSitting only carries out the mediation. Instead, please pay the childcare providers directly after consultation.</br></br>
    We at SilverSitting recommend that you register your paid childcare provider as a household-related service provider with the <a href="https://www.minijob-zentrale.de/DE/minijob-anmelden/haushaltshilfe-anmelden/haushaltshilfe-anmelden_node.html" target="_blank">mini-job center</a>.</br></br>
    <span style="font-weight: 600; color:#8b3888;">Did you know:</span> If you decide to pay the childcare provider an hourly wage, you have the option of deducting these costs on your tax return. You can read everything else about it <a href="https://www.bmfsfj.de/resource/blob/99556/a3ce406c84e2f9cc174e18a0a5498fac/fallbeispiele2-data.pdf" target="_blank">here</a>.</div>`,
  },
  {
    question:
      "Why is an age of 55 or older set as a participation requirement for childcare workers?",
    content:
      "With SilverSitting, we pursue our heartfelt desire to provide seniors with meaningful employment. Looking after children can create a feeling of being needed and of still being an active part of society even after retirement. Studies show that exchanges with children in particular can have a posit ive physical and psychological impact on the vitality of seniors. We have therefore set the age range at 55 years and above. For example, if an early retiree under the age of 55 is interested in being confirmed as a SilverSitter, an exception may be possible.",
  },
  {
    question: "Is my personal data freely accessible?",
    content: `<div>No, only your first name, your description, your photo and how far away you are from your parents will be displayed. Please understand that we have to make this information available to parents seeking care - after all, parents make a decision based on your information for the well-being and safety of their children.</br></br>
    You can read further questions about the protection of your data in the <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/terms-and-conditions" target="_blank">terms and conditions</a>  and the <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/privacy-statement" target="_blank">data protection regulations</a>.</div>`,
  },
  {
    question: "Does SilverSitting pre-select the child childcarers?",
    content:
      "No, we give you the opportunity to easily organize childcare yourself with just one click. You are free to choose which childcare provider seems competent and likeable to you. Before taking care of someone, it is absolutely necessary to get to know each other personally. This is the only way you have the opportunity to have the evidence (babysitter certificate, certificate of good conduct) shown and you can clarify the wealth of experience in dealing with children and all other necessary information directly.",
  },
  {
    question:
      "How can I best prepare my children and the caregiver for their first childcare?",
    content: `<div>We recommend that you speak openly about your child's needs and characteristics with the childcare provider so that there are no unpleasant surprises. Provide very precise information about eating and sleeping habits (when you sleep/eat; are there any food intolerances or a ban on certain foods). What does your child like to do most? What are the tasks that the childcare provider can take on and what leisure activities can be carried out as part of childcare - are there any restrictions? There are other questions that need to be clarified before the first care. The best thing to do is take a look at our <a href="${process.env.NEXT_PUBLIC_MAIN_URL}/blogs">blog</a> and read our article on the topic of “Care Guide”. It is also important that you ask the childcare provider directly about their expectations and clarify whether there are any physical limitations and what the process was like during previous childcare.</div>`,
  },
  {
    question:
      "Why am I currently finding so few supervisors in my search radius?",
    content:
      "Building a platform with a suitable number of maintainers requires a certain amount of time and we are currently at a relatively early stage. During the pandemic we have suspended operations for safety reasons. In contrast to perhaps one or two competitors on the market, you won't find any fake profiles with us and we don't suggest an artificially high density of supervisors. If you find a suitable carer during your search, then you can be sure that there is a potential carer available for your children.",
  },
];

const FAQ = () => {
  return (
    <>
      <Meta>Frequently Asked Question</Meta>
      <section className={`container mx-auto ${styles.faqMainContainer}`}>
        {/* banner */}
        <div className={styles.faqBanner}>
          <div>FAQ for parents</div>
        </div>

        <div>
          {parentsFAQ.map((item, idx) => (
            <Accordion
              defaultActiveKey={["0"]}
              alwaysOpen
              className={styles.accordionContainer}
            >
              <Accordion.Item eventKey={`${idx}`}>
                <Accordion.Header>{item?.question}</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
