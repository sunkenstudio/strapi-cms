import type { Schema, Attribute } from '@strapi/strapi';

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
    TextColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    BgColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    BorderColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    BorderWidth: Attribute.String;
    BorderRadius: Attribute.String;
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
  };
  attributes: {
    Media: Attribute.Media & Attribute.Required;
    Alt: Attribute.String;
    BorderWidth: Attribute.String;
    BorderColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    GrayscalePercent: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    FilterColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    FilterOpacity: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 1;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    BorderRadius: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button': CommonButton;
      'common.font': CommonFont;
      'common.image': CommonImage;
    }
  }
}
