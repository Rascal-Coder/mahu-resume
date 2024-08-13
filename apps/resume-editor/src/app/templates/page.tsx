'use client';
import Clear from '@/components/svg/Clear';

import Header from './components/Header';
import Tags from './components/tags';
const Templates = () => {
  const tags = [
    {
      id: 0,
      name: 'Software Engineer',
    },
    {
      id: 1,
      name: 'Front-end Developer',
    },
    {
      id: 2,
      name: 'Back-end Developer',
    },
    {
      id: 3,
      name: 'Full-stack Developer',
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <main className="w-full">
        <div className="w-full px-4 lg:px-12 py-6 flex flex-col items-center justify-start">
          {/* tags */}
          <div className="w-full flex items-center justify-start py-4">
            {/* TODO:clear search */}
            <div className="border border-gray-300 mr-2 rounded-md px-3 py-2 cursor-pointer bg-gray-200 shadow-md relative hover:bg-gray-300 hover:shadow-lg transition-all duration-200">
              <Clear width={4} height={4}></Clear>
            </div>
            <Tags tags={tags} showClose={false} handleClick={() => {}} />
          </div>
          {/* templates  list*/}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
            <div className="w-full h-[500px] 2xl:h-[740px] rounded-md bg-gray-200 overflow-hidden relative"></div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Templates;
