import type { HTMLAttributes } from "react";

import { withHeadingId } from "@/ui/blog/utils";

export default function H2({
  children,
  id,
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="mb-4 font-bold text-xl md:text-2xl">
      {withHeadingId(children, id)}
    </h2>
  );
}
