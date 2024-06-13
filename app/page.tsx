"use client";

import {
  useLaunchParams,
  useInitData,
  useThemeParams,
  useUtils,
} from "@tma.js/sdk-react";
import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import classNames from "classnames";
import Image from "next/image";

function Page() {
  const launchParams = useLaunchParams(true);
  const initData = useInitData(true);
  const themeParams = useThemeParams(true);
  const utils = useUtils(true);
  const wallet = useTonWallet();

  return (
    <>
      <h1 className="mb-2 text-2xl font-bold">Template for mini apps</h1>
      <p className="mb-7">
        This mini app serves as the starting point for creating mini apps
      </p>
      <section className="mb-7">
        <h2 className="mb-2 text-xl font-semibold">Used libraries:</h2>
        <ul className="list-outside list-disc space-y-1 pl-5">
          <li>
            <button
              style={{ color: themeParams?.linkColor }}
              type="button"
              onClick={() => {
                utils?.openLink("https://nextjs.org");
              }}
            >
              Next.js
            </button>{" "}
            as a front-end framework
          </li>
          <li>
            <button
              style={{ color: themeParams?.linkColor }}
              type="button"
              onClick={() => {
                utils?.openLink("https://tailwindcss.com");
              }}
            >
              Tailwind CSS
            </button>{" "}
            for styling
          </li>
          <li>
            <button
              style={{ color: themeParams?.linkColor }}
              type="button"
              onClick={() => {
                utils?.openLink(
                  "https://github.com/Telegram-Mini-Apps/tma.js/tree/master/packages/sdk-react",
                );
              }}
            >
              @tma.js/sdk-react
            </button>{" "}
            for communication with Telegram client
          </li>
          <li>
            <button
              style={{ color: themeParams?.linkColor }}
              type="button"
              onClick={() => {
                utils?.openLink(
                  "https://github.com/ton-connect/sdk/tree/main/packages/ui-react",
                );
              }}
            >
              TON Connect UI React
            </button>{" "}
            for connection the app to TON wallets via TonConnect protocol
          </li>
        </ul>
      </section>
      <section className="mb-7">
        <h2 className="mb-2 text-xl font-semibold">
          Telegram app&apos;s info:
        </h2>
        <ul className="list-outside list-disc space-y-1 pl-5">
          <li>
            The name of the platform of the user&apos;s Telegram app:
            <span className="font-medium"> {launchParams?.platform}</span>
          </li>
          <li>
            The version of the Bot API available in the user&apos;s Telegram
            app:
            <span className="font-medium"> {launchParams?.version}</span>
          </li>
        </ul>
      </section>
      <section className="mb-7">
        <h2 className="mb-2 text-xl font-semibold">User&apos;s info:</h2>
        <ul className="list-outside list-disc space-y-1 pl-5">
          <li>
            A unique identifier for the user:
            <span className="font-medium"> {initData?.user?.id}</span>
          </li>
          <li>
            Username of the user:
            <span className="font-medium"> {initData?.user?.username}</span>
          </li>
          <li>
            First name of the user:
            <span className="font-medium"> {initData?.user?.firstName}</span>
          </li>
        </ul>
      </section>
      <section>
        <div
          className={classNames("flex items-center justify-between gap-x-2", {
            "mb-5": !!wallet,
          })}
        >
          <h2 className="text-xl font-semibold">Wallet connection</h2>
          <TonConnectButton />
        </div>
        {wallet && (
          <>
            {"imageUrl" in wallet && (
              <div className="mb-3 flex gap-x-4">
                <div className="relative size-14">
                  <Image
                    className="rounded"
                    src={wallet.imageUrl}
                    priority
                    fill
                    objectFit="contain"
                    alt={`${wallet.name} logo`}
                  />
                </div>
                <div>
                  <p className="text-xl font-bold">
                    {wallet.name}{" "}
                    <span className="inline-block align-top text-sm font-normal text-gray-400">
                      ({wallet.device.appName})
                    </span>
                  </p>
                  <button
                    style={{ color: themeParams?.linkColor }}
                    type="button"
                    onClick={() => {
                      utils?.openLink(wallet.aboutUrl);
                    }}
                  >
                    About connected wallet
                  </button>
                </div>
              </div>
            )}
            <p>
              Chain: <span className="font-medium">{wallet.account.chain}</span>
            </p>
          </>
        )}
      </section>
    </>
  );
}

export default Page;
