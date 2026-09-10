/**
 * Central site config — the single source for metadata, robots, sitemap, and
 * manifest. Replace name/description and set NEXT_PUBLIC_SITE_URL per app (it
 * drives canonical + Open Graph URLs).
 */
export const site = {
  name: "Progix · Audit Laap",
  shortName: "Audit Laap",
  description:
    "Devis d’audit Progix : audit complet de l’application mobile Laap, plateforme de mise en relation entre particuliers, professionnels du transport et opérateurs de lift pour les livraisons et déménagements rapides. Parcours métier, expérience utilisateur, code et architecture, back-end, sécurité, performance, conformité RGPD et stores, avec rapport complet remis sous une semaine.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr_FR",
} as const;
