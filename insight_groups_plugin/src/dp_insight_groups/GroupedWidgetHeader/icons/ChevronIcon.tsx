// (C) 2022 GoodData Corporation
import React from "react";

const ChevronIcon: React.VFC<{ className: string, color?: string }> = ({ className, color }) => (
    <svg width="26" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path fill={color} d="M7.21875 0.527344C7.17188 0.472656 7.11328 0.433594 7.04297 0.410156C6.97266 0.378906 6.90234 0.363281 6.83203 0.363281C6.76172 0.363281 6.69141 0.378906 6.62109 0.410156C6.55859 0.433594 6.5 0.472656 6.44531 0.527344L3.96094 3L1.48828 0.527344C1.43359 0.472656 1.37109 0.433594 1.30078 0.410156C1.23828 0.378906 1.17188 0.363281 1.10156 0.363281C1.03125 0.363281 0.960938 0.378906 0.890625 0.410156C0.820312 0.433594 0.761719 0.472656 0.714844 0.527344C0.667969 0.574219 0.628906 0.632812 0.597656 0.703125C0.566406 0.765625 0.550781 0.835938 0.550781 0.914062C0.550781 0.984375 0.5625 1.05469 0.585938 1.125C0.617188 1.1875 0.65625 1.24609 0.703125 1.30078L3.57422 4.16016C3.62109 4.21484 3.67578 4.25391 3.73828 4.27734C3.80859 4.30078 3.88281 4.3125 3.96094 4.3125C4.03125 4.3125 4.09766 4.30078 4.16016 4.27734C4.23047 4.25391 4.28906 4.21484 4.33594 4.16016L7.20703 1.30078C7.32422 1.18359 7.38281 1.05078 7.38281 0.902344C7.38281 0.753906 7.32812 0.628906 7.21875 0.527344Z" />
    </svg>
);

export default ChevronIcon;
