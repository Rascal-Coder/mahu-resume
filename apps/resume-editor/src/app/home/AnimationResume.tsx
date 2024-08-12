import { useEffect, useState, useMemo } from 'react';
import Frame from 'react-frame-component';

import { Card, CardBody } from '@nextui-org/react';
import dynamic from 'next/dynamic';

import {
  A4_HEIGHT_PX,
  A4_WIDTH_PT,
  A4_WIDTH_PX,
  LETTER_HEIGHT_PX,
  LETTER_WIDTH_PT,
  LETTER_WIDTH_PX,
  MOCK_SETIONS,
} from './constants';

const getIFrameInitialContent = (isA4: boolean) => {
  const width = isA4 ? A4_WIDTH_PT : LETTER_WIDTH_PT;

  return `<!DOCTYPE html>
    <html>
        <head>
            <style>
            </style>
        </head>
        <body style='overlfow: hidden; width: ${width}pt; margin:0;padding:0; -webkit-text-size-adjust:none;'>
            <div></div>
        </body>
    <html>`;
};
const Section = ({ title, content }: { title: string; content: string }) => (
  <div className="mt-4">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <pre className="whitespace-pre-wrap mt-2">{content || ''}</pre>
  </div>
);
// TODO: 先mock一个简历模版样式都没有用，后面替换为真实模版pdf展示出来
const Resume = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [content, setContent] = useState('');

  useEffect(() => {
    const animateText = () => {
      if (currentSectionIndex < MOCK_SETIONS.length) {
        const section = MOCK_SETIONS[currentSectionIndex];
        let index = 0;
        const updateContent = () => {
          if (index < section.content.length) {
            setContent((prev) => prev + section.content[index]);
            index += 1;
            requestAnimationFrame(updateContent);
          } else {
            setContent('');
            setCurrentSectionIndex((prev) => prev + 1);
          }
        };
        updateContent();
      }
    };
    animateText();
  }, [currentSectionIndex]);
  return (
    <div className="px-6 w-full h-full">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-500">Rascal-Coder</h1>
        <p className="text-lg">Software engineer obsessed with building exceptional products that people love</p>

        {MOCK_SETIONS.slice(0, currentSectionIndex).map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}

        {currentSectionIndex < MOCK_SETIONS.length && (
          <Section title={MOCK_SETIONS[currentSectionIndex].title} content={content} />
        )}
      </div>
    </div>
  );
};
const ResumeIFrame = ({
  documentSize,
  scale,
  children,
  enablePDFViewer,
}: {
  documentSize: string;
  scale: number;
  children: React.ReactNode;
  enablePDFViewer?: boolean;
}) => {
  const isA4 = documentSize === 'A4';
  const iframeInitialContent = useMemo(() => getIFrameInitialContent(isA4), [isA4]);

  if (enablePDFViewer) {
    return <></>;
  }

  const width = isA4 ? A4_WIDTH_PX : LETTER_WIDTH_PX;
  const height = isA4 ? A4_HEIGHT_PX : LETTER_HEIGHT_PX;

  return (
    <div
      style={{
        maxWidth: `${width * scale}px`,
        maxHeight: `${height * scale}px`,
      }}
    >
      <Card
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
        }}
        className={`origin-top-left dark`}
      >
        <CardBody className="p-8">
          <Frame
            initialContent={iframeInitialContent}
            style={{ width: '100%', height: '100%' }}
            key={isA4 ? 'A4' : 'LETTER'}
          >
            {children}
          </Frame>
        </CardBody>
      </Card>
    </div>
  );
};
const ResumeIFrameCSR = dynamic(() => Promise.resolve(ResumeIFrame), {
  ssr: false,
});
const AnimationResume = () => {
  return (
    <ResumeIFrameCSR documentSize="A4" scale={0.8} enablePDFViewer={false}>
      <Resume />
    </ResumeIFrameCSR>
  );
};
export default AnimationResume;
