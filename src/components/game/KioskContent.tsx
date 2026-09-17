"use client";

import { about, awards, education, experience, hero, projects, publications, skills, teaching } from "@/lib/data";

interface KioskContentProps {
  kioskId: string;
  onCVDownload?: () => void;
}

export function KioskContent({ kioskId, onCVDownload }: KioskContentProps) {
  switch (kioskId) {
    case "reception":
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h3 className="text-xl font-bold text-white mb-2">{hero.name}</h3>
            <p className="text-indigo-400 font-medium mb-4">{hero.tagline}</p>
            <p className="leading-relaxed">{about}</p>
          </section>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Education</h4>
              <ul className="space-y-4">
                {education.map((item, idx) => (
                  <li key={idx}>
                    <p className="font-medium text-gray-200">{item.degree}</p>
                    <p className="text-sm text-gray-400">{item.institution} • {item.period}</p>
                    {item.thesis && <p className="text-sm mt-1 italic">Thesis: {item.thesis}</p>}
                  </li>
                ))}
              </ul>
            </section>
            
            <section>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">Awards & Scholarships</h4>
              <ul className="space-y-4">
                {awards.map((item, idx) => (
                  <li key={idx}>
                    <p className="font-medium text-gray-200">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.institution} • {item.period}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      );

    case "generative-forge":
      const forgeProjects = projects.filter(p => 
        p.title.includes("RL Fine-Tuned") || p.title.includes("Resume-to-Job")
      );
      return (
        <div className="space-y-8 text-gray-300">
          <p className="text-sm text-gray-400 italic">Advanced ML systems, fine-tuning, and end-to-end AI applications.</p>
          <div className="grid grid-cols-1 gap-6">
            {forgeProjects.map((p, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h4 className="text-lg font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.techTags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case "agentic-workshop":
      const agenticProjects = projects.filter(p => 
        p.title.includes("LLM Engineering") || p.title.includes("RAG Assistant")
      );
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              {skills.generativeAI.title}
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.generativeAI.items.map(item => (
                <span key={item} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 font-medium mt-4 mb-2">Frameworks & Tools</p>
            <div className="flex flex-wrap gap-2">
              {skills.generativeAI.frameworks.map(fw => (
                <span key={fw} className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/10">
                  {fw}
                </span>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            {agenticProjects.map((proj, idx) => (
              <section key={idx} className="bg-white/5 border border-purple-500/30 rounded-xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                <h4 className="text-lg font-semibold text-white mb-2">{proj.title}</h4>
                <p className="text-sm mb-4 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.techTags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      );

    case "vision-lab":
      const trenserExp = experience.find(e => e.company === "Trenser Technology Solutions");
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              {skills.computerVision.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.computerVision.items.map(item => (
                <span key={item} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {trenserExp && (
            <section className="bg-white/5 border border-cyan-500/30 rounded-xl p-5 mt-6">
              <ul className="space-y-2 list-disc list-inside text-sm leading-relaxed">
                {trenserExp.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-gray-300">{bullet}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      );

    case "rl-arena":
      const rlProjects = projects.filter(p => 
        p.title.includes("PRISM") || p.title.includes("MAGIK") || p.title.includes("Dynamic Policy Fusion")
      );
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              Reinforcement Learning Research
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.reinforcementLearning.items.map(item => (
                <span key={item} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
            
            <div className="space-y-4">
              {rlProjects.map((p, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h5 className="font-semibold text-white text-sm mb-1">{p.title}</h5>
                  <p className="text-xs text-gray-400 mb-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.techTags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-orange-500/10 text-orange-300/80 rounded text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      );

    case "deployment-deck":
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              {skills.mlopsCloud.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {skills.mlopsCloud.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-400 mr-2">▹</span> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      );

    case "tools-foundations":
      return (
        <div className="space-y-8 text-gray-300">
          <section>
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2">
              Core Languages
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.coreLanguages.map(item => (
                <span key={item} className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/20">
                  {item}
                </span>
              ))}
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 mt-8">
              {skills.toolsFoundations.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.toolsFoundations.items.map(item => (
                <span key={item} className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>
      );

    case "contact-cv":
      return (
        <div className="space-y-8 text-gray-300">
          <section className="text-center">
            <h4 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect!</h4>
            <p className="text-sm text-gray-400 mb-8">
              I&apos;m always open to discussing new projects, research collaborations, or opportunities in AI and Machine Learning.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="mb-4 text-gray-300 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href={`mailto:${hero.email}`} className="hover:text-pink-400 transition-colors">{hero.email}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href={`tel:${hero.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-pink-400 transition-colors">{hero.phone}</a>
                </div>
              </div>

              <a 
                href="/Ajsal_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={onCVDownload}
                className="w-full sm:w-auto px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(236,72,153,0.4)] flex justify-center items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download My CV
              </a>
              
              <div className="flex gap-4 mt-4">
                <a 
                  href={hero.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href={hero.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      );

    default:
      return <div>Select a kiosk to view details.</div>;
  }
}
