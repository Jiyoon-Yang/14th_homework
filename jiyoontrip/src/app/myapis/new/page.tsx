"use client";

import MyApisWrite from "@/app/components/myapis-write";

export const dynamic = "force-dynamic";

export default function newPage() {
  return (
    <>
      <MyApisWrite isEdit={false} />
    </>
  );
}
