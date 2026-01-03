import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Comfortable Rooms & Suites",
  description: "Discover our exquisite selection of rooms and suites at Hotel Izvor d.o.o. From cozy Standard Rooms to premium Suites, experience mountain views and wellness amenities in Aranđelovac, Serbia.",
  url: "/rooms",
  keywords: [
    "hotel rooms Serbia",
    "wellness hotel rooms",
    "Aranđelovac accommodation",
    "mountain view rooms",
    "spa hotel rooms Serbia",
    "premium suites Serbia",
    "Hotel Izvor rooms",
    "comfortable accommodation Serbia",
    "nature retreat rooms",
    "4-star hotel rooms",
  ],
});

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
