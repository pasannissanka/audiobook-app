import Button from "@/components/Button";

export default function Login() {
  const loginUrl = `${process.env.NEXT_PUBLIC_COGNITO_URI}/login?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&response_type=code&scope=email+openid+phone&redirect_uri=${process.env.NEXT_PUBLIC_DOMAIN}/api/auth`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-3/5 h-full border rounded-md p-10">
        <div className="flex justify-center w-full">Audio-books</div>
        <div className="flex flex-col items-center w-full my-4 gap-2">
          <div className="w-1/2 flex flex-col gap-2">
            <Button text="Sign in" type="link" target={loginUrl} />
          </div>
        </div>
      </div>
    </main>
  );
}
