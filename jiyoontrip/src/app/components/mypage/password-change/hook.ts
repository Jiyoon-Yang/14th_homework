import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    newPassword: z.string().min(1, "새 비밀번호를 입력해 주세요."),
    confirmPassword: z.string().min(1, "새 비밀번호를 확인해 주세요."),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function usePasswordChange() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("비밀번호 변경:", data);
    // 비밀번호 변경 로직 구현
  };

  return {
    register,
    handleSubmit,
    formState,
    onSubmit,
  };
}

