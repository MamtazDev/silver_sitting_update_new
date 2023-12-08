import React from "react";
import styles from "@/styles/Instructions.module.css";
import chat from "../public/assets/icons/chat.png";
import halmettik from "../public/assets/icons/halmettik.png";
import handgraph from "../public/assets/icons/handgraph.png";
import handLight from "../public/assets/icons/handLight.png";
import handStar from "../public/assets/icons/handStar.png";
import mail from "../public/assets/icons/mail.png";
import search from "../public/assets/icons/search.png";
import stamptik from "../public/assets/icons/staptik.png";
import InstructionCard from "@/components/Instructions/InstructionCard";
import Meta from "@/components/Shared/Meta";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Link from "next/link";

const instructions = [
  {
    title: "Search and find",
    image: search,
    content:
      "You can use the search to select criteria that the childcare workers should meet.",
  },
  {
    title: "Results",
    image: handgraph,
    content:
      "All suitable supervisors in the vicinity of your whereabouts are displayed in a list of results . The integrated messaging function makes it easy for you to contact them. Your personal inbox (only for logged in people) helps you to keep track of things.",
  },
  {
    title: "Certificate",
    image: stamptik,
    content:
      "Childcare workers receive an extended certificate of good conduct upon application to the Federal Office of Justice. Every childcare worker can upload their copy here and have it checked by us. Certified and approved childcare providers appear in the list of results with a special symbol (see left).",
  },
  {
    title: "Safety first",
    image: halmettik,
    content:
      "The protection of personal data is very important to us (see also data protection ). Because of this, you will only see some basic information about the childcare providers in the list that allows you to choose.",
  },
  {
    title: "Contact",
    image: mail,
    content:
      "You then have the option of using the integrated message function to get in direct contact with the potential childcare worker and send a personal message. Your personal inbox helps you to keep track of everything. Set up a meeting and get to know each other. A possible payment and other arrangements are no longer made via this platform, but are agreed directly with the childcare worker.",
  },
  {
    title: "Recommend",
    image: handStar,
    content:
      "We recommend exchanging telephone numbers with the childcare worker as soon as possible and arranging a personal meeting to get to know each other. Then you, the SilverSitter and your children can check whether the chemistry is right and future childcare can be agreed.",
  },
  {
    title: "Solutions",
    image: handLight,
    content:
      "We are for simple solutions in complicated times! Under the influence of the past pandemic, we have decided to offer the use of the platform to seniors and parents completely free of charge. There is no catch !",
  },
  {
    title: "Did you know",
    image: chat,
    content:
      'YMany childcare workers work on a voluntary basis (recognizable by a "voluntary" lettering in the search result list), some are happy to receive a small expense allowance. The childcare workers are not paid via our platform, but at the childcare facility. If you decide to pay the childcare worker an hourly wage, you can claim these costs on your tax return. You can read all about tax deductibility here .',
  },
];

const Instructions = () => {
  return (
    <ProtectedRoute>
      <>
        <Meta>Instructions</Meta>
        <section className="container mx-auto">
          {/* banner */}
          <div className={styles.findNannyBanner}>
            <h3>How to find a nanny for your child</h3>
            <p>
              "Aging people are like museums: It’s not the facade that counts,
              but the treasures inside"
            </p>
            <h6>Jeanne Moreau</h6>
          </div>

          {/* instructions */}

          <div className={styles.instructionsContainer}>
            {instructions.map((item, idx) => (
              <InstructionCard instruction={item} key={idx} number={idx + 1} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/child-care" className={`btn ${styles.button}`}>
              Find A Nanny Now
            </Link>
          </div>
        </section>
      </>
    </ProtectedRoute>
  );
};

export default Instructions;
