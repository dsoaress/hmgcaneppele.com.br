import React from 'react'

import icons from './icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => (
  <S.SocialLinksList>
    {links.map((link, i) => {
      const Icon = icons[link.label]

      return (
        <S.SocialLinksItem key={i}>
          <S.SocialLinksLink
            href={link.url}
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.IconWrapper>
              <Icon />
            </S.IconWrapper>
            {link.label}
          </S.SocialLinksLink>
        </S.SocialLinksItem>
      )
    })}
  </S.SocialLinksList>
)

export default SocialLinks
