import { NextResponse, NextRequest } from "next/server";


const REDIRECT_URL = process.env.NEXT_PUBLIC_DOMAIN;

export async function GET(request: NextRequest, response: NextResponse) {
  const searchParams = new URL(request.url).searchParams;
  const code = searchParams.get("code");

  return new Promise((resolve, reject) => {
    verifyToken(code || "")
      .then((data) => {
        const { access_token } = JSON.parse(data) as { access_token: string };

        const redirectResponse = NextResponse.redirect(REDIRECT_URL || "");
        redirectResponse.cookies.set("ACCESS_TOKEN", access_token, {
          path: "/",
          sameSite: "lax",
          httpOnly: true,
        });

        return resolve(redirectResponse);
      })
      .catch((error) => {
        const res = NextResponse.next({ status: 500 });
        resolve(response);
      });
  });
}

const verifyToken = (code: string) => {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const authEndpoint = `${process.env.NEXT_PUBLIC_DOMAIN}/api/auth`;

  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("code", code);
  urlencoded.append("client_id", clientId || "");
  urlencoded.append("redirect_uri", authEndpoint);
  // urlencoded.append("client_secret", clientSecret);

  return new Promise<string>((resolve, reject) => {
    fetch(`${process.env.NEXT_PUBLIC_COGNITO_URI}/token`, {
      method: "POST",
      headers: headers,
      body: urlencoded,
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
