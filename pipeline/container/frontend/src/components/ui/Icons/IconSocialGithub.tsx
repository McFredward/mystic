import { IconTypes } from "./types";

// Used for Oauth buttons, not meant to customize
export function IconSocialGithub({
  className,
  size = 24,
}: IconTypes): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        className={className}
        fill="#000"
        d="M16 2C8.265 2 2 8.265 2 16c0 6.195 4.008 11.427 9.572 13.282.7.123.963-.297.963-.665 0-.332-.018-1.434-.018-2.607-3.517.647-4.427-.858-4.707-1.645-.157-.402-.84-1.645-1.435-1.977-.49-.263-1.19-.91-.018-.928 1.103-.018 1.89 1.015 2.153 1.435 1.26 2.117 3.273 1.523 4.078 1.155.122-.91.49-1.523.892-1.873-3.115-.35-6.37-1.557-6.37-6.912 0-1.523.542-2.783 1.435-3.763-.14-.35-.63-1.785.14-3.71 0 0 1.172-.367 3.85 1.435a12.99 12.99 0 013.5-.472c1.19 0 2.38.157 3.5.472 2.677-1.82 3.85-1.434 3.85-1.434.77 1.924.28 3.36.14 3.71.893.98 1.435 2.222 1.435 3.762 0 5.372-3.273 6.563-6.387 6.912.507.438.944 1.278.944 2.59 0 1.873-.017 3.378-.017 3.85 0 .368.262.805.962.665A14.022 14.022 0 0030 16c0-7.735-6.265-14-14-14z"
      ></path>
    </svg>
  );
}
