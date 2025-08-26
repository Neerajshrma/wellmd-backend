import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedChildCompanies extends Struct.ComponentSchema {
  collectionName: 'components_shared_child_companies';
  info: {
    displayName: 'ChildCompanies';
  };
  attributes: {
    CompanyName: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tagline: Schema.Attribute.String;
    WebsiteURL: Schema.Attribute.Text;
  };
}

export interface SharedComparisonFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_comparison_feature_rows';
  info: {
    displayName: 'ComparisonFeatureRow';
  };
  attributes: {
    Feature: Schema.Attribute.String;
    traditionalCareAvailable: Schema.Attribute.Enumeration<
      ['available', 'not_available', 'unlikely']
    >;
    WellmdAvailableNycmdAvailable: Schema.Attribute.Enumeration<
      ['available', 'not_available', 'unlikely']
    >;
  };
}

export interface SharedComparisonTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_comparison_tables';
  info: {
    displayName: 'ComparisonTable';
  };
  attributes: {
    ComparisonFeatureRow: Schema.Attribute.Component<
      'shared.comparison-feature-row',
      true
    >;
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonUrl: Schema.Attribute.Text;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedFeatureHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_highlights';
  info: {
    displayName: 'FeatureHighlight';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    ButtonURL: Schema.Attribute.Text;
    Description: Schema.Attribute.Text;
    FeatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FeaturesList: Schema.Attribute.Component<'shared.list', true>;
    Subtitle: Schema.Attribute.Text;
    Tagline: Schema.Attribute.String;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedFoundersVoiceSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_founders_voice_sections';
  info: {
    displayName: 'FoundersVoiceSection';
  };
  attributes: {
    AuthorImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    AuthorName: Schema.Attribute.String;
    AuthorTitle: Schema.Attribute.String;
    Quote: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedHealthcareEcosystemCompany
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_healthcare_ecosystem_companies';
  info: {
    displayName: 'HealthcareEcosystemCompany';
  };
  attributes: {
    ChildCompanies: Schema.Attribute.Component<'shared.child-companies', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.Text;
    Tagline: Schema.Attribute.Text;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    List: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_sections';
  info: {
    displayName: 'NewsletterSection';
  };
  attributes: {
    ButtonLabel: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'shared.list', true>;
    Headline: Schema.Attribute.Text;
    PrivacyDetail: Schema.Attribute.String;
    Subheadline: Schema.Attribute.Text;
    Tag: Schema.Attribute.String;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedOurMission extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_missions';
  info: {
    displayName: 'OurMission';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedOurProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_products';
  info: {
    displayName: 'OurProducts';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
    ProductUrl: Schema.Attribute.Text;
  };
}

export interface SharedOurStory extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_stories';
  info: {
    displayName: 'OurStory';
  };
  attributes: {
    Description1: Schema.Attribute.Text;
    Description2: Schema.Attribute.Text;
    Description3: Schema.Attribute.String;
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedOurValues extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_values';
  info: {
    displayName: 'OurValues';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
    ValueCards: Schema.Attribute.Component<'shared.cards', true>;
  };
}

export interface SharedPatentedFitnessProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_patented_fitness_products';
  info: {
    displayName: 'PatentedFitnessProducts';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Logo: Schema.Attribute.Component<'shared.our-products', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPeakHealth extends Struct.ComponentSchema {
  collectionName: 'components_shared_peak_healths';
  info: {
    displayName: 'PeakHealth';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    PeakHealthCards: Schema.Attribute.Component<
      'shared.peak-health-cards',
      true
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPeakHealthCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_peak_health_cards';
  info: {
    displayName: 'PeakHealthCards';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Description2: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'shared.list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPolicySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_policy_sections';
  info: {
    displayName: 'PolicySection';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
  };
}

export interface SharedPressReleasesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_press_releases_sections';
  info: {
    displayName: 'PressReleasesSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    press_releases: Schema.Attribute.Relation<
      'oneToMany',
      'api::press-release.press-release'
    >;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedPrimaryCareSystems extends Struct.ComponentSchema {
  collectionName: 'components_shared_primary_care_systems';
  info: {
    displayName: 'PrimaryCareSystems';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'shared.list', true>;
    Heading: Schema.Attribute.Text;
    Logo: Schema.Attribute.Component<'shared.our-products', true>;
    SubHeading: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedProvenResultsSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_proven_results_sections';
  info: {
    displayName: 'ProvenResultsSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    StatsCards: Schema.Attribute.Component<'shared.stats-cards', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedQuitProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_quit_program_cards';
  info: {
    displayName: 'QuitProgramCard';
  };
  attributes: {
    Badge: Schema.Attribute.Text;
    Description: Schema.Attribute.Text;
    Name: Schema.Attribute.Text;
  };
}

export interface SharedQuitSmokingSolutions extends Struct.ComponentSchema {
  collectionName: 'components_shared_quit_smoking_solutions';
  info: {
    displayName: 'QuitSmokingSolutions';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    FeatureList: Schema.Attribute.Component<'shared.list', true>;
    Heading: Schema.Attribute.Text;
    Logo: Schema.Attribute.Component<'shared.our-products', false>;
    QuitProgramCardbuttonlabel: Schema.Attribute.Text;
    QuitProgramCardHeading: Schema.Attribute.Text;
    QuitSmokingSolutions: Schema.Attribute.Component<
      'shared.quit-program-card',
      true
    >;
    SubHeading: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedStatsCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats_cards';
  info: {
    displayName: 'StatsCards';
  };
  attributes: {
    StatDescription: Schema.Attribute.Text;
    StatNumber: Schema.Attribute.String;
    StatTitle: Schema.Attribute.String;
  };
}

export interface SharedWellMdDifference extends Struct.ComponentSchema {
  collectionName: 'components_shared_well_md_differences';
  info: {
    displayName: 'WellMDDifference';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    DifferenceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FeatureList: Schema.Attribute.Component<'shared.list', true>;
    Title: Schema.Attribute.Text;
  };
}

export interface SharedWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_shared_what_we_dos';
  info: {
    displayName: 'WhatWeDo';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'shared.cards', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cards': SharedCards;
      'shared.child-companies': SharedChildCompanies;
      'shared.comparison-feature-row': SharedComparisonFeatureRow;
      'shared.comparison-table': SharedComparisonTable;
      'shared.cta': SharedCta;
      'shared.feature-highlight': SharedFeatureHighlight;
      'shared.founders-voice-section': SharedFoundersVoiceSection;
      'shared.healthcare-ecosystem-company': SharedHealthcareEcosystemCompany;
      'shared.hero-section': SharedHeroSection;
      'shared.list': SharedList;
      'shared.media': SharedMedia;
      'shared.newsletter-section': SharedNewsletterSection;
      'shared.our-mission': SharedOurMission;
      'shared.our-products': SharedOurProducts;
      'shared.our-story': SharedOurStory;
      'shared.our-values': SharedOurValues;
      'shared.patented-fitness-products': SharedPatentedFitnessProducts;
      'shared.peak-health': SharedPeakHealth;
      'shared.peak-health-cards': SharedPeakHealthCards;
      'shared.policy-section': SharedPolicySection;
      'shared.press-releases-section': SharedPressReleasesSection;
      'shared.primary-care-systems': SharedPrimaryCareSystems;
      'shared.proven-results-section': SharedProvenResultsSection;
      'shared.quit-program-card': SharedQuitProgramCard;
      'shared.quit-smoking-solutions': SharedQuitSmokingSolutions;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.stats-cards': SharedStatsCards;
      'shared.well-md-difference': SharedWellMdDifference;
      'shared.what-we-do': SharedWhatWeDo;
    }
  }
}
