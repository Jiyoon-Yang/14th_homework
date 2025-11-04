"use client";

import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MyInput from "@/app/commons/components/input";
import MyButton from "@/app/commons/components/button";

const schema = z
  .object({
    newPassword: z
      .string()
      .min(1, "새 비밀번호를 입력해 주세요."),
    confirmPassword: z
      .string()
      .min(1, "새 비밀번호를 확인해 주세요."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function PasswordChange() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("비밀번호 변경:", data);
    // 비밀번호 변경 로직 구현
  };

  return (
    <form className={styles.passwordArea} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.title}>비밀번호 변경</div>
      <div className={styles.content}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputField}>
            <div className={styles.labelArea}>
              <span className={styles.label}>새 비밀번호</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputContainer}>
              <MyInput
                type="password"
                placeholder="새 비밀번호를 입력해 주세요."
                register={register}
                name="newPassword"
                style={{
                  width: "1280px",
                  height: "48px",
                  padding: "12px 16px",
                  border: "1px solid #d4d3d3",
                  borderRadius: "8px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              />
            </div>
          </div>
          <div className={styles.inputField}>
            <div className={styles.labelArea}>
              <span className={styles.label}>새 비밀번호 확인</span>
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.inputContainer}>
              <MyInput
                type="password"
                placeholder="새 비밀번호를 확인해 주세요."
                register={register}
                name="confirmPassword"
                style={{
                  width: "1280px",
                  height: "48px",
                  padding: "12px 16px",
                  border: "1px solid #d4d3d3",
                  borderRadius: "8px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <MyButton
            formState={formState}
            style={{
              width: "130px",
              height: "48px",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "24px",
              backgroundColor: formState.isValid ? "#000000" : "#c7c7c7",
              color: formState.isValid ? "#ffffff" : "#e4e4e4",
              border: "none",
              cursor: formState.isValid ? "pointer" : "not-allowed",
            }}
          >
            비밀번호 변경
          </MyButton>
        </div>
      </div>
    </form>
  );
}
