import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonArticle extends Schema.Component {
  collectionName: 'components_common_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    Images: Attribute.Media;
    Link: Attribute.String;
  };
}

export interface CommonBorder extends Schema.Component {
  collectionName: 'components_common_borders';
  info: {
    displayName: 'Border';
    description: '';
  };
  attributes: {
    width: Attribute.String;
    color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'dark', 'light']
    >;
    radius: Attribute.String;
  };
}

export interface CommonBrandColor extends Schema.Component {
  collectionName: 'components_common_brand_colors';
  info: {
    displayName: 'BrandColor';
    icon: 'brush';
  };
  attributes: {
    Color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
  };
}

export interface CommonButton extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    Type: Attribute.Enumeration<['link', 'modal', 'pdf', 'submit']> &
      Attribute.Required &
      Attribute.DefaultTo<'link'>;
    Text: Attribute.String;
    Href: Attribute.String;
    Icon: Attribute.String;
    Color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    BgColor: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    Shadow: Attribute.String;
    Border: Attribute.Component<'common.border'>;
  };
}

export interface CommonFeature extends Schema.Component {
  collectionName: 'components_common_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Header: Attribute.String & Attribute.Required;
    Blurb: Attribute.String & Attribute.Required;
    Icon: Attribute.String & Attribute.Required;
  };
}

export interface CommonFilter extends Schema.Component {
  collectionName: 'components_common_filters';
  info: {
    displayName: 'Filter';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    opacity: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1;
        },
        number
      > &
      Attribute.DefaultTo<0.5>;
    grayscale: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface CommonFont extends Schema.Component {
  collectionName: 'components_common_fonts';
  info: {
    displayName: 'Font';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Url: Attribute.String & Attribute.Required;
    Family: Attribute.String;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
    border: Attribute.Component<'common.border'>;
    filter: Attribute.Component<'common.filter'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.article': CommonArticle;
      'common.border': CommonBorder;
      'common.brand-color': CommonBrandColor;
      'common.button': CommonButton;
      'common.feature': CommonFeature;
      'common.filter': CommonFilter;
      'common.font': CommonFont;
      'common.image': CommonImage;
    }
  }
}
