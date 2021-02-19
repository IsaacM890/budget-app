import React from 'react';
import styled from 'styled-components';
import { AvatarSize } from '../../../enums/index';
import { IAvatarProps } from '../../../models/index';

const setAvatarSize = (size?: AvatarSize) => {
  switch (size) {
    case AvatarSize.xl:
      return `
        width: 70px;
        height:70px;
        border-radius:50px;
        `;

    case AvatarSize.lg:
      return `
        width: 60px;
        height: 60px;
        border-radius:50px;
        `;

    case AvatarSize.md:
      return `
        width: 50px;
        height:50px;
        border-radius:50px;
        `;

    case AvatarSize.sm:
      return `
        width:40px;
        height:40px;
        border-radius:50px;
        `;

    case AvatarSize.xs:
      return `
        width: 30px;
        height:30px;
        border-radius:50px;
        `;

    default:
      return ` 
        width: 40px;
        height:40px;
        border-radius:50px;
        `;
  }
};

const SAvatar = styled.img<IAvatarProps>`
  ${(props) => setAvatarSize(props.size)};
`;

const Avatar: React.FC<IAvatarProps> = ({ size = AvatarSize.md, src, alt }) => {
  return <SAvatar size={size} src={src} alt={alt}></SAvatar>;
};

export default Avatar;
