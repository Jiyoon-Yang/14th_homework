import MypageLayoutComponent from "../commons/layout/mypage";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MypageLayoutComponent>{children}</MypageLayoutComponent>;
}

