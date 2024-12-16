import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug?: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
}

export interface IContentfulAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
