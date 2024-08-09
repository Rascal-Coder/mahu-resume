import { useEffect, useState, useRef } from 'react';

const sections = [
  {
    title: 'Contact Information',
    content: `
- Email: test@gmail.com
- Phone: 123-456-7890
- Location: HYD, IND
- LinkedIn: linkedin.com/in/yourusername
    `,
  },
  {
    title: 'Work Experience',
    content: `
ABC Company
- Position: Software Engineer
- Duration: May 2023 - Present
- Responsibilities:
  - Contributed and collaborated with cross-functional teams to build a scalable product consumed by larger audiences (repeated three times).

DEF Organization
- Position: Software Engineer
- Duration: May 2022 - May 2023
- Responsibilities:
  - Contributed and collaborated with cross-functional teams to build a scalable product consumed by larger audiences (repeated three times).

XYZ Company
- Position: Software Engineer
- Duration: May 2021 - May 2022
- Responsibilities:
  - Contributed and collaborated with cross-functional teams to build a scalable product consumed by larger audiences.
    `,
  },
  {
    title: 'Education',
    content: `
XYZ University
- Degree: Bachelor of Science in Computer Science
- GPA: 8.55
- Duration: Sep 2018 - Aug 2022
- Additional Info:
  - Contributed and collaborated with cross-functional teams to build a scalable product consumed by larger audiences.
    `,
  },
  {
    title: 'Project',
    content: `
Project1
- Duration: Fall 2021
- Description:
  - Contributed and collaborated with cross-functional teams to build a scalable product consumed by larger audiences.
    `,
  },
  {
    title: 'Skills',
    content: `
- Programming Languages:
  - Python
  - TypeScript
  - React
- Technical Skills:
  - React Hooks, GraphQL, Node.js, SQL, Postgres, NoSql, Redis, REST API, Git
- Soft Skills:
  - Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile
    `,
  },
];

export default function Resume() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [content, setContent] = useState('');
  const contentRef = useRef(content); // Use ref to hold the content state for the animation

  useEffect(() => {
    contentRef.current = content;
  }, [content]);

  useEffect(() => {
    const animateText = () => {
      if (currentSectionIndex < sections.length) {
        const section = sections[currentSectionIndex];
        let index = 0;
        const updateContent = () => {
          if (index < section.content.length) {
            setContent((prev) => prev + section.content[index]);
            index += 1;
            requestAnimationFrame(updateContent);
          } else {
            setTimeout(() => {
              setContent('');
              setCurrentSectionIndex((prev) => prev + 1);
            }, 500);
          }
        };
        updateContent();
      }
    };

    animateText();
  }, [currentSectionIndex]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-500">Rascal-Coder</h1>
        <p className="text-lg">Software engineer obsessed with building exceptional products that people love</p>

        {sections.slice(0, currentSectionIndex).map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}

        {currentSectionIndex < sections.length && (
          <Section title={sections[currentSectionIndex].title} content={content} />
        )}
      </div>
    </div>
  );
}

const Section = ({ title, content }: { title: string; content: string }) => (
  <div className="mt-4">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <pre className="whitespace-pre-wrap mt-2">{content || ''}</pre>
  </div>
);
