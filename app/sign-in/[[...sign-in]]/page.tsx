import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <p className="text-white font-black text-3xl mb-3">★ StarDev</p>
        <p className="text-white font-black text-xl leading-snug">
          로그인하고 나만의 로드맵을<br />시작해 보세요
        </p>
      </div>

      <SignIn
        fallbackRedirectUrl="/quiz"
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#0f0f0f",
            colorText: "#ffffff",
            colorTextSecondary: "#888888",
            colorInputBackground: "#1c1c1c",
            colorInputText: "#ffffff",
            colorPrimary: "#ffffff",
            colorTextOnPrimaryBackground: "#000000",
            colorNeutral: "#ffffff",
            borderRadius: "0.75rem",
            fontFamily: "inherit",
          },
          elements: {
            card: {
              backgroundColor: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "none",
              width: "400px",
            },
            headerTitle: { display: "none" },
            headerSubtitle: { display: "none" },
            socialButtonsBlockButton: {
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#ffffff",
              borderRadius: "0.75rem",
              padding: "14px",
            },
            socialButtonsBlockButtonText: { color: "#ffffff", fontWeight: "500", fontSize: "15px" },
            socialButtonsProviderIcon: { width: "24px", height: "24px" },
            socialButtonsProviderIcon__apple: { filter: "invert(1)", width: "24px", height: "24px" },
            socialButtonsProviderIcon__google: { width: "24px", height: "24px" },
            socialButtonsProviderIcon__facebook: { width: "24px", height: "24px" },
            socialButtonsProviderIcon__kakao: { filter: "brightness(0) invert(1)", width: "24px", height: "24px" },
            dividerLine: { backgroundColor: "rgba(255,255,255,0.08)" },
            dividerText: { color: "rgba(255,255,255,0.3)", fontSize: "12px" },
            formFieldLabel: { color: "rgba(255,255,255,0.6)", fontSize: "14px" },
            formFieldInput: {
              backgroundColor: "#1c1c1c",
              borderColor: "rgba(255,255,255,0.15)",
              color: "#ffffff",
              borderRadius: "0.75rem",
            },
            formFieldInputShowPasswordButton: { color: "rgba(255,255,255,0.4)" },
            formButtonPrimary: {
              backgroundColor: "#ffffff",
              color: "#000000",
              fontWeight: "900",
              borderRadius: "0.75rem",
              fontSize: "15px",
            },
            footerActionText: { color: "rgba(255,255,255,0.4)" },
            footerActionLink: { color: "#ffffff", fontWeight: "700" },
            identityPreviewText: { color: "#ffffff" },
            identityPreviewEditButton: { color: "rgba(255,255,255,0.5)" },
            formFieldErrorText: { color: "#f87171" },
            formResendCodeLink: { color: "#ffffff" },
            otpCodeFieldInput: {
              backgroundColor: "#1c1c1c",
              borderColor: "rgba(255,255,255,0.2)",
              color: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}
