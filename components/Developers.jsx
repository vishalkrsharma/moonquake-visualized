import Image from 'next/image';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';

import styles from '@/scss/components/Developers.module.scss';

const Developers = () => {
  return (
    <div className={styles.developersContainer}>
      <h1 className={styles.header}>Our Team</h1>
      <ul className={styles.list}>
        <div>
          <li className={styles.list__item}>
            <Image
              className={styles.list__item__img}
              src='/assets/arkadeep.jpeg'
              alt='img_arkadeep'
              width={70}
              height={70}
            />
            <div
              className={styles.list__item__name}
              data-testid='dev-name'
            >
              Arkadeep Mitra
            </div>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/arkadeep-mitra-774695224/'
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/ArkMitra'
            >
              <VscGithub />
            </a>
          </li>
          <li className={styles.list__item}>
            <Image
              className={styles.list__item__img}
              src='/assets/maaz.jpeg'
              alt='img_maaz'
              width={70}
              height={70}
            />
            <div
              className={styles.list__item__name}
              data-testid='dev-name'
            >
              Maaz Shahid
            </div>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/maaz-shahid-96998720a/'
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/maaz-shahid99'
            >
              <VscGithub />
            </a>
          </li>
        </div>
        <div>
          <li className={styles.list__item}>
            <Image
              className={styles.list__item__img}
              src='/assets/soham.jpg'
              alt='img_soham'
              width={70}
              height={70}
            />
            <div
              className={styles.list__item__name}
              data-testid='dev-name'
            >
              Soham Deb Majumdar
            </div>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/soham-deb-majumder-35b959210/'
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/samwilson0745'
            >
              <VscGithub />
            </a>
          </li>
          <li className={styles.list__item}>
            <Image
              className={styles.list__item__img}
              src='/assets/vishal.jpg'
              alt='img_vishal'
              width={70}
              height={70}
            />
            <div
              className={styles.list__item__name}
              data-testid='dev-name'
            >
              Vishal Kumar Sharma
            </div>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/vishalkrsharma/'
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className={styles.list__item__link}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/vishalkrsharma'
            >
              <VscGithub />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Developers;
