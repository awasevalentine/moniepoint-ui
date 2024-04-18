import { FaStripeS } from "react-icons/fa";
import { IoLogoDropbox } from "react-icons/io5";
import { SiZendesk } from "react-icons/si";
import { PiSpotifyLogo } from "react-icons/pi";


export const transactions = [
  {
    id: 1,
    name: "Strip",
    type: "Business",
    transaction_date: "2024-02-14T18:21:00",
    amount: +1233.00,
    image: <FaStripeS />
  },
  {
    id: 2,
    name: "Dropbox",
    type: "Equipment",
    transaction_date: "2024-01-10T11:21:00",
    amount: -200.00,
    image: <IoLogoDropbox />
  },
  {
    id: 3,
    name: "Zendesk",
    type: "Marketing",
    transaction_date: "2024-08-16T18:21:00",
    amount: -1233.00,
    image: <SiZendesk />
  },
  {
    id: 3,
    name: "Sportify",
    type: "Entertaintment",
    transaction_date: "2024-02-13T20:21:00",
    amount: -19.00,
    image: <PiSpotifyLogo />
  },
];

