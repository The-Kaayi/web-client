"use client";
import { useRouter } from "next/navigation";
import { AuthTypes } from "@/types/auth";

const AuthAction: React.FC<{ params: { authAction: AuthTypes } }> = ({
  params,
}) => {
  const router = useRouter();

  const validAuthActions = [
    "signup",
    "login",
    "forgot-password",
    "reset-password",
  ];

  const action = params.authAction;

  if (!validAuthActions.includes(action)) {
    router.push("/404");
    return null;
  }

  return (
    <div>
      <p>{action}</p>
    </div>
  );
};

export default AuthAction;
