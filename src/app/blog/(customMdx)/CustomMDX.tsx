import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import rehypeSlug from "rehype-slug";

import AnchorLink from "@/app/blog/(customMdx)/AnchorLink";
import Component from "@/app/blog/(customMdx)/Component";
import InlineCode from "@/app/blog/(customMdx)/InlineCode";
import Note from "@/app/blog/(customMdx)/Note";
import PreBlock from "@/app/blog/(customMdx)/PreBlock";

export default function CustomMDX({ content }: { content: string }) {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote
        source={content}
        components={{
          h1: ({ id, ...props }) => (
            <h2 id={id} {...props} className="group relative mt-4 flex">
              <AnchorLink id={id}>{props.children}</AnchorLink>
            </h2>
          ),
          h2: ({ id, ...props }) => (
            <h3 id={id} {...props} className="group relative mt-4 flex">
              <AnchorLink id={id}>{props.children}</AnchorLink>
            </h3>
          ),
          h3: ({ id, ...props }) => (
            <h4 id={id} {...props} className="group relative mt-4 flex">
              <AnchorLink id={id}>{props.children}</AnchorLink>
            </h4>
          ),
          h4: ({ id, ...props }) => (
            <h5 id={id} {...props} className="group relative mt-4 flex">
              <AnchorLink id={id}>{props.children}</AnchorLink>
            </h5>
          ),
          h5: ({ id, ...props }) => (
            <h6 id={id} {...props} className="group relative mt-4 flex">
              <AnchorLink id={id}>{props.children}</AnchorLink>
            </h6>
          ),
          p: ({ ...props }) => (
            <p {...props} className="[&:not(:first-child)]:mt-4" />
          ),
          a: ({ ...props }) => <a {...props} className="underline" />,
          pre: ({ ...props }) => <PreBlock {...props} />,
          Image: ({ ...props }) => (
            <img
              {...props}
              className="my-3 w-full"
              loading="lazy"
              alt={props.alt}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="my-4 rounded border border-gray-300 border-s-4 bg-gray-50 p-4 font-sans">
              <div className="font-medium text-gray-900 italic leading-relaxed">
                {props.children}
              </div>
            </blockquote>
          ),
          code: InlineCode,
          ul: ({ ...props }) => (
            <ul className="my-3 ml-6 list-disc" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mt-4 ml-6 list-decimal" {...props} />
          ),
          li: ({ ...props }) => <li className="mt-2" {...props} />,
          Note: ({ children, ...props }) => (
            <Note type="Note" {...props}>
              {children}
            </Note>
          ),
          Info: ({ children, ...props }) => (
            <Note type="Info" {...props}>
              {children}
            </Note>
          ),
          Success: ({ children, ...props }) => (
            <Note type="Success" {...props}>
              {children}
            </Note>
          ),
          Warning: ({ children, ...props }) => (
            <Note type="Warning" {...props}>
              {children}
            </Note>
          ),
          Error: ({ children, ...props }) => (
            <Note type="Error" {...props}>
              {children}
            </Note>
          ),
          Component: ({ name, ...props }) => (
            <Component name={name} {...props} />
          ),
        }}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeSlug, rehypeMdxCodeProps],
            format: "mdx",
          },
        }}
      />
    </>
  );
}
