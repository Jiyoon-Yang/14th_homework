"use client";

import MyApisWrite from "@/app/components/myapis-write";

export const dynamic = "force-dynamic";

export default function EditPage() {
  return (
    <>
      <MyApisWrite isEdit={true} />
    </>
  );
}
