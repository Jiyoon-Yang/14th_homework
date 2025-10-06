"use client";

import { supabase } from "@/app/commons/libraries/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function MyApisWrite({ isEdit }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const onClickSubmit = async () => {
    try {
      if (title !== "" && contents !== "") {
        const { data, error } = await supabase
          .from("jiyoon")
          .insert([
            {
              title,
              contents,
              created_at: new Date().toISOString(),
            },
          ])
          .select();
        if (error) {
          alert(error);
        } else {
          alert("성공");
          const newId = data[0].id;
          router.push(`/myapis/${newId}`);
        }
      }
    } catch (err) {
      alert(err);
    }
  };

  const onClickEdit = () => {};

  return (
    <>
      <div>
        제목:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        내용:
        <input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
        <button onClick={isEdit ? onClickEdit : onClickSubmit}>
          {isEdit ? "수정" : "제출"}
        </button>
      </div>
    </>
  );
}
