"use client";

import { useThemeParams, useUtils } from "@tma.js/sdk-react";
import { useTonWallet, TonConnectButton } from "@tonconnect/ui-react";
import Image from "next/image";

function Page() {
  const themeParams = useThemeParams(true);
  const utils = useUtils(true);
  const wallet = useTonWallet();

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl">TON Connect</h1>
        <TonConnectButton />
      </div>
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
            <span className="">Chain: </span>
            {wallet.account.chain}
          </p>
        </>
      )}
    </>
  );
}

export default Page;
