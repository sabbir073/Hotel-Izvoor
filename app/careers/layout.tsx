import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Careers - Join Our Team",
  description: "Join the Hotel Izvor d.o.o. family in Aranđelovac, Serbia. Explore exciting career opportunities in wellness hospitality. We're hiring front desk staff, spa therapists, housekeeping, chefs, management positions. Build your career at Serbia's premier wellness resort.",
  url: "/careers",
  keywords: [
    "hotel jobs Serbia",
    "careers wellness hotel",
    "hospitality jobs Serbia",
    "spa therapist jobs",
    "hotel employment Serbia",
    "wellness resort careers",
    "hotel management careers",
    "work at hotel Serbia",
    "Hotel Izvor careers",
    "Aranđelovac jobs",
  ],
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
