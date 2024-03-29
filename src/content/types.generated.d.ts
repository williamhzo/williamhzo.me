declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"notes": {
"01-writing-on-the-web.md": {
  id: "01-writing-on-the-web.md",
  slug: "01-writing-on-the-web",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"02-unlocking-the-blog-paralysis.md": {
  id: "02-unlocking-the-blog-paralysis.md",
  slug: "02-unlocking-the-blog-paralysis",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
"03-letting-go-of-pixel-perfect.md": {
  id: "03-letting-go-of-pixel-perfect.md",
  slug: "03-letting-go-of-pixel-perfect",
  body: string,
  collection: "notes",
  data: InferEntrySchema<"notes">
},
},

	};

	type ContentConfig = typeof import("./config");
}
