export default function Skills() {
  const skillGroups = [
    {
      title: "DESIGN",
      skills: ["Figma", "Photoshop", "Canva"],
    },
    {
      title: "FRONT END",
      skills: ["HTML", "CSS", "Next.js"],
    },
    {
      title: "INFRASTRUCTURE",
      skills: ["Linux", "VMware", "Ansible"],
    },
  ];

  return (
    <section 
            id="skills"
            className="bg-[#9B7957] text-white py-32">
                
      <div className="max-w-7xl mx-auto px-16">
        <p className="tracking-[0.3em] text-sm mb-4 opacity-70">
          SKILLS
        </p>

        <h2 className="text-6xl mb-20">
          スキル・ツール
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm tracking-[0.2em] opacity-70 mb-8">
                {group.title}
              </p>

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="border-b border-white/20 pb-4"
                  >
                    <p className="text-3xl">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}