import { Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { SectionStyled } from '../styled/SectionStyled';

import { featuredPropertiesSectionStyles } from '#/theme/styles/featuredPropertiesSection.styles';
import { SectionHeaderComponent } from '#components/SectionHeaderComponent';

export const FeaturedPropertiesSection = () => {
  const { t } = useTranslation('');

  return (
    <SectionStyled sx={featuredPropertiesSectionStyles.root}>
      <Container>
        <SectionHeaderComponent
          description={t('featured_properties_section.description')}
          title={t('featured_properties_section.title')}
        />
      </Container>
    </SectionStyled>
  );
};
