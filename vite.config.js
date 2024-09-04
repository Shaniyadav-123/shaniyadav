import { resolve } from "path";

import handlebars from "vite-plugin-handlebars";
import { compression } from "vite-plugin-compression2";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
    compression(),
    viteStaticCopy({
      targets: [
        {
          src: "js/*",
          dest: "js",
        },
        {
          src: "json/*",
          dest: "json",
        }
      ],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        homePage: resolve(__dirname, "index.html"),
        // termLifeInsurance: resolve(__dirname, "term-life-insurance/index.html"),
        // wholeLifeInsurance: resolve(
        //   __dirname,
        //   "whole-life-insurance/index.html",
        // ),
        // childrenLifeInsurance: resolve(
        //   __dirname,
        //   "children-life-insurance/index.html",
        // ),
        // noMedicalLifeInsurance: resolve(
        //   __dirname,
        //   "no-medical-life-insurance/index.html",
        // ),
        // mortgageInsurance: resolve(__dirname, "mortgage-insurance/index.html"),
        // criticalIllnessInsurance: resolve(
        //   __dirname,
        //   "critical-illness-insurance/index.html",
        // ),
        // disabilityInsurance: resolve(
        //   __dirname,
        //   "disability-insurance/index.html",
        // ),
        // travelInsurance: resolve(__dirname, "travel-insurance/index.html"),
        // lifeInsurance: resolve(__dirname, "life-insurance/index.html"),
        // healthInsurance: resolve(__dirname, "health-insurance/index.html"),
        // employeeBenefits: resolve(__dirname, "employee-benefits/index.html"),

      },
    },
  },
};
