import type { Metadata } from "next";
import { DevisDocument } from "@/features/devis";

export const metadata: Metadata = { title: "Devis d’audit" };

/** The password-gated “Devis d’audit” document. */
export default function Page() {
  return <DevisDocument />;
}
