import type { Schema, Struct } from '@strapi/strapi';

export interface ApartmentAmenity extends Struct.ComponentSchema {
  collectionName: 'components_apartment_amenities';
  info: {
    displayName: 'amenity';
  };
  attributes: {
    description: Schema.Attribute.Text;
    included: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ApartmentBonus extends Struct.ComponentSchema {
  collectionName: 'components_apartment_bonuses';
  info: {
    displayName: 'bonus';
  };
  attributes: {
    description: Schema.Attribute.Text;
    included: Schema.Attribute.Boolean;
    Title: Schema.Attribute.String;
  };
}

export interface ApartmentRules extends Struct.ComponentSchema {
  collectionName: 'components_apartment_rules';
  info: {
    displayName: 'rules';
  };
  attributes: {
    checkIn: Schema.Attribute.String;
    checkOut: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    pets: Schema.Attribute.Boolean;
    smoking: Schema.Attribute.Boolean;
  };
}

export interface ApartmentSeo extends Struct.ComponentSchema {
  collectionName: 'components_apartment_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metadesctiption: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'apartment.amenity': ApartmentAmenity;
      'apartment.bonus': ApartmentBonus;
      'apartment.rules': ApartmentRules;
      'apartment.seo': ApartmentSeo;
    }
  }
}
