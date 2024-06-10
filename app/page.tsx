"use client";

import {
  useLaunchParams,
  useInitData,
  useThemeParams,
  useUtils,
} from "@tma.js/sdk-react";
import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import Image from "next/image";

function Page() {
  const launchParams = useLaunchParams();
  const initData = useInitData(true);
  const themeParams = useThemeParams(true);
  const utils = useUtils(true);
  const wallet = useTonWallet();
  console.log(initData);
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
            <span className="font-medium"> {launchParams.platform}</span>
          </li>
          <li>
            The version of the Bot API available in the user&apos;s Telegram
            app:
            <span className="font-medium"> {launchParams.version}</span>
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
        <div className="mb-3 flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="none"
            viewBox="0 0 56 56"
          >
            <path
              fill="#0098ea"
              d="M28 56c15.464 0 28-12.536 28-28S43.464 0 28 0 0 12.536 0 28s12.536 28 28 28Z"
            />
            <path
              fill="#fff"
              d="M37.56 15.628H18.44c-3.516 0-5.745 3.792-3.976 6.858l11.801 20.455c.77 1.335 2.7 1.335 3.47 0l11.804-20.455c1.767-3.06-.462-6.858-3.975-6.858h-.003ZM26.255 36.807l-2.57-4.974-6.202-11.092c-.409-.71.096-1.62.953-1.62h7.816V36.81l.003-.002ZM38.51 20.739l-6.2 11.096-2.57 4.972V19.119h7.817c.857 0 1.362.91.953 1.62Z"
            />
          </svg>
          <h2 className="text-xl font-semibold">Wallet connection</h2>
        </div>
        <TonConnectButton className="mb-5" />
        {wallet && (
          <>
            {"imageUrl" in wallet && (
              <div className="mb-3 flex gap-x-4">
                <Image
                  className="rounded"
                  src={wallet.imageUrl}
                  width={60}
                  height={60}
                  alt={`${wallet.name} logo`}
                  priority
                />
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
