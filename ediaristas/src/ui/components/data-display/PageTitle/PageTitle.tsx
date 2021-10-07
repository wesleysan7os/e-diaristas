import React from "react";
import { PageSubTitleStyled, PageTitleStyled, PageTitleContainer } from './PageTitle.style';
import { } from './PageTitle.style';

interface PageTitleProps {
  title: string;
  subtitle: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubTitleStyled>{props.subtitle}</PageSubTitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;