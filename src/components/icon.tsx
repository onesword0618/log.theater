/**
 * @file definition icon.
 * @see https://react-icons.github.io/react-icons
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2023.
 */
import { IoBookOutline } from '@react-icons/all-files/io5/IoBookOutline';
import { IoCodeOutline } from '@react-icons/all-files/io5/IoCodeOutline';
import { IoEaselOutline } from '@react-icons/all-files/io5/IoEaselOutline';
import { IoFileTrayFull } from '@react-icons/all-files/io5/IoFileTrayFull';
import { IoFlask } from '@react-icons/all-files/io5/IoFlask';
import { IoHelpOutline } from '@react-icons/all-files/io5/IoHelpOutline';
import { IoLibraryOutline } from '@react-icons/all-files/io5/IoLibraryOutline';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub';
import { IoLogoInstagram } from '@react-icons/all-files/io5/IoLogoInstagram';
import { IoLogoXing } from '@react-icons/all-files/io5/IoLogoXing';
import { IoNewspaperOutline } from '@react-icons/all-files/io5/IoNewspaperOutline';
import { IoPencilOutline } from '@react-icons/all-files/io5/IoPencilOutline';
import { IoPricetagOutline } from '@react-icons/all-files/io5/IoPricetagOutline';
import { IoServerOutline } from '@react-icons/all-files/io5/IoServerOutline';
import { IoTimerOutline } from '@react-icons/all-files/io5/IoTimerOutline';
import { ComponentType } from 'react';

type Props = {
  name: string;
  size?: string;
};

/**
 * Icon Component Part.
 * @param {{ name: string, size?: string }} name specified category name
 * @returns {ComponentType} component
 */
export const Icon: ComponentType<Props> = ({ name, size }) => {
  const defaultSize = `2em`;
  const icons = new Map();
  icons.set(`tag`, <IoPricetagOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`read`, <IoBookOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`note`, <IoPencilOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`test`, <IoFlask fontSize={!size ? defaultSize : size} />);
  icons.set(`design`, <IoEaselOutline fontSize={!size ? defaultSize : size} />);
  icons.set(
    `database`,
    <IoServerOutline fontSize={!size ? defaultSize : size} />,
  );
  icons.set(`code`, <IoCodeOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`clock`, <IoTimerOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`github`, <IoLogoGithub fontSize={!size ? defaultSize : size} />);
  icons.set(`x`, <IoLogoXing fontSize={!size ? defaultSize : size} />);
  icons.set(
    `facebook`,
    <IoLogoFacebook fontSize={!size ? defaultSize : size} />,
  );
  icons.set(
    `instagram`,
    <IoLogoInstagram fontSize={!size ? defaultSize : size} />,
  );
  icons.set(
    `question`,
    <IoHelpOutline fontSize={!size ? defaultSize : size} />,
  );
  icons.set(
    `bookLog`,
    <IoFileTrayFull fontSize={!size ? defaultSize : size} />,
  );
  icons.set(
    `qiita`,
    <IoNewspaperOutline fontSize={!size ? defaultSize : size} />,
  );
  icons.set(
    `purpose`,
    <IoLibraryOutline fontSize={!size ? defaultSize : size} />,
  );
  return <>{icons.get(name)}</>;
};
