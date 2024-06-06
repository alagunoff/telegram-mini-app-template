import { retrieveLaunchParams } from "@tma.js/sdk-react";
import { useMemo } from "react";

import { DisplayData } from "@/app/_components/DisplayData/DisplayData";
import { Link } from "@/app/_components/Link/Link";
import { Page } from "@/app/_components/Page/Page";
import { useDidMount } from "@/app/_hooks/useDidMount";

export default function LaunchParamsPage() {
  const didMount = useDidMount();
  const lp = useMemo(() => {
    return didMount ? retrieveLaunchParams() : ({} as Record<string, string>);
  }, [didMount]);

  return (
    <Page
      title="Launch Params"
      disclaimer={
        <>
          This page displays application{" "}
          <Link href="https://docs.telegram-mini-apps.com/platform/launch-parameters">
            launch parameters
          </Link>
          .
        </>
      }
    >
      <DisplayData
        rows={[
          { title: "tgWebAppPlatform", value: lp.platform },
          { title: "tgWebAppShowSettings", value: lp.showSettings },
          { title: "tgWebAppVersion", value: lp.version },
          { title: "tgWebAppBotInline", value: lp.botInline },
          { title: "tgWebAppStartParam", value: lp.showSettings },
          { title: "tgWebAppData", value: <Link href="/init-data">View</Link> },
          {
            title: "tgWebAppThemeParams",
            value: <Link href="/theme-params">View</Link>,
          },
        ]}
      />
    </Page>
  );
}
