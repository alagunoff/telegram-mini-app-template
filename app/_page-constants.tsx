const links: {
  title: string;
  path: string;
  icon?: JSX.Element;
}[] = [
  { title: "Init Data", path: "/init-data" },
  { title: "Theme Params", path: "/theme-params" },
  { title: "Launch Params", path: "/launch-params" },
  {
    title: "TON Connect",
    path: "/ton-connect",
    icon: (
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
    ),
  },
];

export { links };
