// This file is auto-generated by the `update-kc-gen` command. Do not edit it manually.
// Hash: e27d7f0cd1271cc75e625818a50bbe03991c9eb66fc71eb611f2a02585cdf0ab


/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { lazy, Suspense, type ReactNode } from "react";

export type ThemeName = "fdn-themes";

export const themeNames: ThemeName[] = ["fdn-themes"];

export type KcEnvName = "FDN_THEME_PRIMARY_COLOR" | "FDN_THEME_SECONDARY_COLOR";

export const kcEnvNames: KcEnvName[] = ["FDN_THEME_PRIMARY_COLOR", "FDN_THEME_SECONDARY_COLOR"];

export const kcEnvDefaults: Record<KcEnvName, string> = {
  "FDN_THEME_PRIMARY_COLOR": "#1976d2",
  "FDN_THEME_SECONDARY_COLOR": "#9c27b0"
};

/**
 * NOTE: Do not import this type except maybe in your entrypoint. 
 * If you need to import the KcContext import it either from src/login/KcContext.ts or src/account/KcContext.ts.
 * Depending on the theme type you are working on.
 */
export type KcContext =
    | import("./login/KcContext").KcContext
    ;

declare global {
    interface Window {
        kcContext?: KcContext;
    }
}

export const KcLoginPage = lazy(() => import("./login/KcPage"));

export function KcPage(
    props: {
        kcContext: KcContext;
        fallback?: ReactNode;
    }
) {
    const { kcContext, fallback } = props;
    return (
        <Suspense fallback={fallback}>
            {(() => {
                switch (kcContext.themeType) {
                    case "login": return <KcLoginPage kcContext={kcContext} />;
                }
            })()}
        </Suspense>
    );
}
