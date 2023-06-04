/**
 * @file Category's icons.
 * @see https://react-icons.github.io/react-icons
 * @copyright @author Kenichi Inoue <ao.akua.leo@gmail.com> 2023.
 */
import { IoMdClock } from '@react-icons/all-files/io/IoMdClock';
import { IoBookOutline } from '@react-icons/all-files/io5/IoBookOutline';
import { IoEaselOutline } from '@react-icons/all-files/io5/IoEaselOutline';
import { IoFlask } from '@react-icons/all-files/io5/IoFlask';
import { IoLogoFacebook } from '@react-icons/all-files/io5/IoLogoFacebook';
import { IoLogoGithub } from '@react-icons/all-files/io5/IoLogoGithub';
import { IoLogoTwitter } from '@react-icons/all-files/io5/IoLogoTwitter';
import { IoPencilOutline } from '@react-icons/all-files/io5/IoPencilOutline';
import { IoServerOutline } from '@react-icons/all-files/io5/IoServerOutline';
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
  icons.set(`read`, <IoBookOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`note`, <IoPencilOutline fontSize={!size ? defaultSize : size} />);
  icons.set(`test`, <IoFlask fontSize={!size ? defaultSize : size} />);
  icons.set(`design`, <IoEaselOutline fontSize={!size ? defaultSize : size} />);
  icons.set(
    `database`,
    <IoServerOutline fontSize={!size ? defaultSize : size} />,
  );
  icons.set(`clock`, <IoMdClock fontSize={!size ? defaultSize : size} />);
  icons.set(`github`, <IoLogoGithub fontSize={!size ? defaultSize : size} />);
  icons.set(`twitter`, <IoLogoTwitter fontSize={!size ? defaultSize : size} />);
  icons.set(
    `facebook`,
    <IoLogoFacebook fontSize={!size ? defaultSize : size} />,
  );
  return <>{icons.get(name)}</>;
};
