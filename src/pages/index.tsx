import { SessionProvider, useSession } from "next-auth/react";
import LoginForm from "~/components/LoginForm";

export default function Home() {
  const { data: session } = useSession();
  return (
    <SessionProvider session={session}>
      <LoginForm />
    </SessionProvider>
  );
};
