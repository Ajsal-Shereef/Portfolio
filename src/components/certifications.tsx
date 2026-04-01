"use client";

import { SectionShell } from "./section-shell";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    name: "CutShort Certified Data Science - Basic",
    issuer: "CutShort",
    issued: "Mar 2020",
    link: "https://cutshort.io/certificate/5467?trk=public_profile_certification-title",
  },
  {
    name: "2019 AWS SageMaker, AI and Machine Learning - With Python",
    issuer: "Udemy",
    issued: "Nov 2019",
  },
  {
    name: "ADVANCED COURSE IN ML USING PYTHON",
    issuer: "GITAA",
    issued: "Sep 2019",
  },
  {
    name: "Sequences, Time Series and Prediction",
    issuer: "Coursera",
    issued: "Aug 2019",
    link: "https://coursera.org/account/accomplishments/certificate/WHH46BXZNN6S?trk=public_profile_certification-title",
  },
  {
    name: "TensorFlow in Practice Specialization",
    issuer: "Coursera",
    issued: "Aug 2019",
    link: "https://coursera.org/account/accomplishments/specialization/certificate/2496PA7EHTC9?trk=public_profile_certification-title",
  },
  {
    name: "Convolutional Neural Networks in TensorFlow",
    issuer: "Coursera",
    issued: "Jul 2019",
    link: "https://coursera.org/account/accomplishments/verify/VK75EGBRZTBR?trk=public_profile_certification-title",
  },
  {
    name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "Coursera",
    issued: "Jul 2019",
    link: "https://coursera.org/account/accomplishments/verify/UQEHU7788RJA?trk=public_profile_certification-title",
  },
  {
    name: "Natural Language Processing in TensorFlow",
    issuer: "Coursera",
    issued: "Jul 2019",
    link: "https://coursera.org/account/accomplishments/verify/YUPMWEZQB37W?trk=public_profile_certification-title",
  },
  {
    name: "Data Science for Beginners using R",
    issuer: "GITAA",
    issued: "Feb 2019",
  },
];

export function Certifications() {
  return (
    <SectionShell id="certifications">
      <div className="container space-y-6">
        <div>
          <p className="section-title">Certifications</p>
          <h2 className="section-heading">
            Continuous learning across ML and data science.
          </h2>
          <p className="section-subtitle">
            Formal certifications spanning data science fundamentals, TensorFlow
            for deep learning, and applied machine learning with Python and R.
          </p>
        </div>

        <div className="glass-panel divide-y divide-stone-800/80 p-5">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 rounded-full bg-stone-900/80 p-1.5 text-amber-400">
                  <Award size={14} />
                </span>
                <div>
                  <p className="text-sm font-medium text-stone-100">
                    {cert.name}
                  </p>
                  <p className="text-xs text-stone-400">
                    {cert.issuer} · Issued {cert.issued}
                  </p>
                </div>
              </div>
              {cert.link ? (
                <Link
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-200 md:mt-0"
                >
                  <span>View certificate</span>
                  <ExternalLink size={12} />
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

