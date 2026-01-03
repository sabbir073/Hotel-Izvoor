import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Book Your Stay - Online Reservation",
  description: "Book your wellness stay at Hotel Izvor d.o.o. Aranđelovac, Serbia. Secure online booking, best rate guarantee, instant confirmation. Reserve your Standard Room, Deluxe Suite, or Premium Suite. Easy cancellation, 24/7 customer support.",
  url: "/booking",
  keywords: [
    "book hotel Serbia",
    "Aranđelovac hotel reservation",
    "online hotel booking Serbia",
    "wellness hotel booking",
    "reserve room Serbia",
    "Hotel Izvor booking",
    "Serbia accommodation booking",
    "best rate guarantee Serbia",
    "instant confirmation hotel",
    "secure hotel booking",
  ],
});

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
