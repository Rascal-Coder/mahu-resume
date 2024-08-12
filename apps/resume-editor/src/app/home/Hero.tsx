import { Button } from '@nextui-org/react';

import { FlexboxSpacer } from '@/components/FlexboxSpacer';

import AnimationResume from './AnimationResume';

export const Hero = () => {
  return (
    <section className="lg:flex lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl">
          Create a professional
          <br />
          resume easily
        </h1>
        <p className="mt-3 text-lg lg:mt-5 lg:text-xl text-blue-200">With this powerful resume builder</p>
        <Button disableRipple className="mt-3 resume-btn-hover bg-primary" size="lg">
          Create Resume
        </Button>
      </div>
      <FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />{' '}
      <div className="mt-6 flex justify-center lg:mt-4 lg:block">
        {' '}
        <AnimationResume />
      </div>
    </section>
  );
};
