import { Translate } from "@google-cloud/translate/build/src/v2";
import React, { useEffect, useState } from "react";

const useTranslation = (sourceLanguage, targetLanguage, text) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translate = new Translate();

    translate
      .translate(text, targetLanguage, { from: sourceLanguage })
      .then((result) => {
        const translation = result[0];
        setTranslatedText(translation);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sourceLanguage, targetLanguage, text]);
  return translatedText;
};

export default useTranslation;
