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
    Border: Attribute.Component<'styles.border'>;
    Color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    BgColor: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    Shadow: Attribute.String;
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
    Media: Attribute.Media & Attribute.Required;
    Alt: Attribute.String;
    Border: Attribute.Component<'styles.border'>;
    Filter: Attribute.Component<'styles.filter'>;
  };
}

export interface StylesBorder extends Schema.Component {
  collectionName: 'components_styles_borders';
  info: {
    displayName: 'Border';
    icon: 'brush';
  };
  attributes: {
    Width: Attribute.String;
    Color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'dark', 'light']
    >;
    Radius: Attribute.String;
  };
}

export interface StylesFilter extends Schema.Component {
  collectionName: 'components_styles_filters';
  info: {
    displayName: 'Filter';
    icon: 'brush';
  };
  attributes: {
    Color: Attribute.Enumeration<
      ['primary', 'secondary', 'accent', 'light', 'dark']
    >;
    Opacity: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    Grayscale: Attribute.Integer &
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.article': CommonArticle;
      'common.brand-color': CommonBrandColor;
      'common.button': CommonButton;
      'common.feature': CommonFeature;
      'common.font': CommonFont;
      'common.image': CommonImage;
      'styles.border': StylesBorder;
      'styles.filter': StylesFilter;
    }
  }
}
