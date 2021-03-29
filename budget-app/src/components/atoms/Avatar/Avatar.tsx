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
        `;

    case AvatarSize.lg:
      return `
        width: 60px;
        height: 60px;
        `;

    case AvatarSize.md:
      return `
        width: 50px;
        height:50px;
        `;

    case AvatarSize.sm:
      return `
        width:40px;
        height:40px;
        `;

    case AvatarSize.xs:
      return `
        width: 30px;
        height:30px;
        `;

    default:
      return ` 
        width: 40px;
        height:40px;
        `;
  }
};

const SAvatar = styled.img<IAvatarProps>`
  ${({ size }) => setAvatarSize(size)};
  ${({ borderRadius }) => `border-radius:${borderRadius};`};
`;

const Avatar: React.FC<IAvatarProps> = ({ size = AvatarSize.md, src, borderRadius }) => (
  <SAvatar size={size} src={src} alt="avatar" borderRadius={borderRadius} />
);

export default Avatar;
