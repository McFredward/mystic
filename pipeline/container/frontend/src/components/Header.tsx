import React from "react";

export function Header() {
  return (
    <header className="border-b border-gray-300 p-4">
      <svg
        width="87"
        height="24"
        viewBox="0 0 87 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3607_45180)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.83701 12.539C0.567095 13.077 0.351708 13.658 0.215387 14.2659C0.0790661 14.8604 0 15.4684 0 16.0897C0 18.2713 0.864275 20.2458 2.27111 21.6822C3.67521 23.1187 5.60824 24.001 7.74303 24.001C9.87781 24.001 11.8108 23.116 13.2149 21.6822C14.6191 20.2458 15.4861 18.2713 15.4861 16.0897C15.4861 15.4684 15.4179 14.8604 15.2843 14.2821C15.148 13.6741 14.8917 13.0259 14.6354 12.5013L8.18743 0.318393C8.06474 0.0843644 7.82209 -0.0393747 7.56581 0.0144249C7.32316 0.0843644 7.18684 0.304943 7.14594 0.565871L6.02538 7.74543C5.99812 7.95256 5.91633 8.14623 5.7282 8.24307C5.54008 8.33991 5.3356 8.32646 5.16111 8.20272L4.06782 7.40111C3.91786 7.30427 3.77064 7.27737 3.60978 7.31772C3.44892 7.35807 3.32623 7.45491 3.24444 7.60824L2.63645 8.85101L0.853369 12.5094L0.839737 12.5363L0.83701 12.539ZM3.55252 15.0649C3.63432 14.7205 3.75428 14.387 3.90423 14.0992L4.51222 12.8564C4.59401 12.7058 4.71398 12.6089 4.87756 12.5659C5.03842 12.5255 5.20201 12.5524 5.3356 12.6493L6.75334 13.6849L8.59094 15.038C8.7518 15.1617 8.96992 15.1752 9.15804 15.0783C9.34616 14.9815 9.45522 14.8012 9.45522 14.5807V12.1355C9.45522 11.8719 9.61608 11.6378 9.87509 11.584C10.1314 11.5275 10.374 11.654 10.4967 11.888L11.59 14.1261C11.74 14.43 11.8463 14.7474 11.9281 15.0783C11.9962 15.3957 12.0371 15.7266 12.0371 16.0871C12.0371 17.3029 11.5655 18.3924 10.7803 19.194C9.99778 19.9821 8.92902 20.4771 7.7403 20.4771C6.55158 20.4771 5.48283 19.9929 4.70034 19.194C3.93149 18.3924 3.44347 17.3029 3.44347 16.0871C3.44347 15.7293 3.47073 15.3823 3.55252 15.0649Z"
            fill="url(#paint0_linear_3607_45180)"
          />
          <path
            d="M27.286 19.3514V13.2209C27.286 11.5746 28.2593 10.4798 29.7206 10.4798C31.182 10.4798 32.0599 11.5773 32.0599 13.2209V19.3514H34.2656V13.2209C34.2656 11.6311 35.3071 10.4798 36.7412 10.4798C38.148 10.4933 39.135 11.6311 39.135 13.2209V19.3514H41.327V13.0434C41.327 10.383 39.623 8.51883 37.2019 8.51883C35.7269 8.51883 34.4155 9.27202 33.7121 10.4664C33.1041 9.27471 31.7627 8.49193 30.1541 8.49193C28.9218 8.49193 27.8421 9.09449 27.1905 10.0952V8.9035H25.0667V19.3514H27.286ZM43.4509 23.658C43.9798 23.8921 44.6696 23.9997 45.2503 23.9997C47.4424 23.9997 48.3612 21.9983 49.2554 19.5989L53.2878 8.9035H50.9758L48.1758 16.6103L44.9422 8.9035H42.5348L47.1752 19.3944C46.6462 20.6829 46.2291 22.1221 44.8086 22.1221C44.4024 22.1221 43.8898 21.9983 43.4427 21.8342V23.6446L43.4563 23.658H43.4509ZM62.9311 16.2122C62.9311 13.8531 60.401 13.4146 58.4271 13.0864C56.764 12.7986 55.9924 12.5511 55.9924 11.771C55.9924 10.9344 56.9248 10.3184 58.0345 10.3184C59.5231 10.3184 60.5919 11.0313 60.6191 12.0588H62.6749C62.6749 9.98756 60.7282 8.48117 58.0754 8.48117C55.7361 8.48117 53.9367 9.87996 53.9367 11.8006C53.9367 14.2835 55.7634 14.5982 58.1708 14.9667C59.2123 15.1039 60.81 15.3783 60.81 16.4758C60.8236 17.3393 59.8367 17.9714 58.4571 17.9714C56.9139 17.9714 55.8043 17.0676 55.8043 15.8329H53.7758C53.7758 18.1355 55.7498 19.7952 58.4571 19.7952C61.1644 19.7952 62.9339 18.2996 62.9339 16.2176L62.9311 16.2122ZM65.1232 16.4166C65.1232 18.418 66.3283 19.7629 68.1659 19.7629C68.733 19.7629 69.4636 19.6527 69.9926 19.4751V17.6917C69.6 17.8154 69.1256 17.8692 68.842 17.8692C67.9096 17.8692 67.3398 17.2102 67.3398 16.266V10.6574H69.8562V8.91695H67.3398V6.3803H65.5403L65.2568 8.91695H63.5528V10.6574H65.1368V16.4166H65.1232ZM72.1164 8.91695V19.3648H74.3085V8.91695H72.1164ZM73.2125 7.23033C74.0113 7.23033 74.5784 6.65467 74.5784 5.84499C74.5784 5.03531 74.0086 4.5 73.2125 4.5C72.4164 4.5 71.8329 5.06221 71.8329 5.84499C71.8329 6.62777 72.4 7.23033 73.2125 7.23033ZM81.8579 8.50538C78.7062 8.50538 76.4187 10.8779 76.4187 14.1409C76.4187 17.4038 78.7062 19.7764 81.8716 19.7764C84.4153 19.7764 86.5801 18.1032 87 15.8275L84.8897 15.5531C84.5244 16.8981 83.3329 17.8557 81.8716 17.8557C80.0312 17.8557 78.6244 16.2929 78.6108 14.1274C78.6108 11.9755 80.0449 10.4126 81.8716 10.4126C83.292 10.4126 84.5489 11.3729 84.8734 12.7286L86.9836 12.4543C86.6183 10.1516 84.4671 8.49193 81.8552 8.49193V8.50538H81.8579Z"
            fill="black"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_3607_45180"
            x1="7.7403"
            y1="24.001"
            x2="7.7403"
            y2="-0.0286145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B02EF4" />
            <stop offset="0.13" stopColor="#A433F4" />
            <stop offset="0.49" stopColor="#5753EF" />
            <stop offset="0.78" stopColor="#42CEFD" />
            <stop offset="1" stopColor="#40D9FF" />
          </linearGradient>
          <clipPath id="clip0_3607_45180">
            <rect width="87" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </header>
  );
}