import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.font': CommonFont;
    }
  }
}
