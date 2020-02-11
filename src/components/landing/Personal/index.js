import React from 'react';
import { Container } from 'components/common';
import { FaCode, FaCoffee, FaMusic, FaTv, FaDumbbell, FaPencilRuler, FaBook, FaGamepad } from 'react-icons/fa';
import { Wrapper, SkillsWrapper, Details, TastesQuirksRow, TasteOrQuirk } from './styles';
import { TitleWrapper, H2, SubTitle } from '../../common/Text';

export const Personal = () => (
  <Wrapper id="myself">
    <SkillsWrapper as={Container}>
      <TitleWrapper>
        <H2>About Me</H2>
        <SubTitle>Personal</SubTitle>
      </TitleWrapper>
      <Details>
        <h3>Tastes and Quirks</h3>

        <TastesQuirksRow>
          <TasteOrQuirk>
            <FaCode color="#333" size={64} />
            <span>Code</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaCoffee color="#333" size={64} />
            <span>Coffee</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaMusic color="#333" size={64} />
            <span>Music</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaTv color="#333" size={64} />
            <span>Series</span>
          </TasteOrQuirk>
        </TastesQuirksRow>

        <TastesQuirksRow>
          <TasteOrQuirk>
            <FaDumbbell color="#333" size={64} />
            <span>Workout</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaPencilRuler color="#333" size={64} />
            <span>Studying</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaBook color="#333" size={64} />
            <span>Books</span>
          </TasteOrQuirk>
          <TasteOrQuirk>
            <FaGamepad color="#333" size={64} />
            <span>Games</span>
          </TasteOrQuirk>
        </TastesQuirksRow>
      </Details>
    </SkillsWrapper>

    <SkillsWrapper as={Container}>
      <TitleWrapper>
        <H2>About Me</H2>
        <SubTitle>Professional</SubTitle>
      </TitleWrapper>
      <Details>
        <h3>Interests</h3>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
