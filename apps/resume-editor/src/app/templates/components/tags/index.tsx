import { FC } from 'react';

import styles from './tags.module.scss';
interface TagItem {
  id: number;
  name: string;
}
interface TagsInterface {
  tags: TagItem[];
  handleClick: (tagItem: TagItem) => void;
  showClose?: boolean;
}
const Tags: FC<TagsInterface> = ({ showClose = true, tags, handleClick }) => {
  return (
    <div className="w-full flex items-center rounded-md bg-[#e5e7eb] py-1 justify-start  gap-6  overflow-x-scroll scrollbar-hide">
      {tags.map((item) => {
        return (
          <div onClick={() => handleClick(item)} className={styles['rascal-tag']} key={item.id}>
            {showClose && <div className={styles.close}>&times;</div>}
            {/* Software Engineer */}
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
