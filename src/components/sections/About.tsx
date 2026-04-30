import Image from 'next/image';

export const About = () => {
  const skills = [
    { name: 'Hardware Components', level: 90 },
    { name: 'C++', level: 78 },
    { name: 'Python', level: 69 },
    { name: 'Next.js', level: 75 },
    { name: 'PC Building', level: 88 },
    { name: 'Networking', level: 72 },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#102336]">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sometimes I struggle with either reaching a high skill level in either hardware troubleshooting or
            software development. It was around that time that I discovered the role of DevOps. The one who bridges the 
            gap between the software and hardware teams.
            I pride myself on my hardware skills, and with my knowledge of software, 
            I can keep both halves of development working as smooth as possible
          </p>
        </div>

        <div className="mb-10 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                    src="/Images/Headshot.jpg"
                    alt="My Headshot"
                    fill
                    className="object-cover object-center"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="bg-white/40 p-5 rounded-xl border border-white/20 shadow-sm"
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-[#102336]">{skill.name}</span>
                <span className="text-sm font-mono text-gray-600">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-300/50 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-[#5D88BB] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-400/30 text-center">
          <p className="text-[#102336] font-medium italic">
            BS in Computer Science • Central Philippine University
             | CompTIA A+ Certified
          </p>
        </div>

      </div>
    </section>
  );
};