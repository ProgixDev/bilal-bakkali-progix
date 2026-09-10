/**
 * Faithful content for the Progix "Devis d’audit" — audit complet de
 * l’application mobile Laap (mise en relation entre particuliers, professionnels
 * du transport et opérateurs de lift). List-shaped data lives here; prose with
 * inline emphasis is authored in the section JSX.
 *
 * Typographie française (’ « » …). Pas de tiret cadratin dans le texte visible.
 * Montants en euros. Service international fourni par une société canadienne :
 * aucune taxe applicable.
 */

export const cover = {
  tag: "Devis d’audit · Bon de commande",
  title: "Audit complet de votre",
  titleLight: "application mobile Laap",
  subtitle:
    "Un regard extérieur et exhaustif sur l’application existante : parcours métier, expérience utilisateur, code, architecture, sécurité, performance et conformité. Chaque constat est hiérarchisé, documenté et assorti d’une recommandation chiffrée, le tout réuni dans un rapport complet remis sous une semaine.",
  // Aucun montant en couverture : le prix est traité en section 04 uniquement.
  badges: [
    { l: "Délai de réalisation", v: "1", u: " semaine" },
    { l: "Périmètre", v: "8", u: " axes audités" },
    { l: "Livrable", v: "1", u: " rapport complet + restitution" },
  ],
  meta: [
    { l: "Projet", v: "Laap · audit d’application mobile" },
    { l: "Client", v: "Bilal Bakkali" },
    { l: "Prestataire", v: "Progix Inc. · NEQ 1181317117" },
    { l: "Référence · Date", v: "DEVIS-PROGIX-2026-____ · ____________" },
  ],
} as const;

export const trust = [
  { n: "12+", l: "ingénieurs et spécialistes" },
  { n: "100+", l: "projets livrés" },
  { n: "100 %", l: "du rapport appartient au Client" },
  { n: "CA · FR", l: "équipe Canada & France" },
] as const;

/** Section 02 — the eight audit axes, titles only. Le détail des points
 * contrôlés est arrêté au cadrage, une fois les accès à l’Application ouverts. */
export const axes = [
  { n: "1", title: "Parcours métier et fonctionnel" },
  { n: "2", title: "Expérience utilisateur et accessibilité" },
  { n: "3", title: "Code et architecture mobile" },
  { n: "4", title: "Back-end, API et données" },
  { n: "5", title: "Sécurité", pill: "OWASP Mobile Top 10" },
  { n: "6", title: "Performance et stabilité" },
  { n: "7", title: "Conformité et publication" },
  { n: "8", title: "Mesure, notifications et back-office" },
] as const;

/** Section 03 — the three written deliverables. */
export const deliverables = [
  {
    n: "1",
    navy: false,
    title: "Rapport d’audit complet",
    text: "Document PDF structuré par axe. Pour chaque constat : description, preuve (capture, extrait de code, requête), niveau de criticité, impact pour Laap et recommandation.",
  },
  {
    n: "2",
    navy: true,
    title: "Synthèse pour la direction",
    text: "Deux pages lisibles sans bagage technique : état général de l’application, appréciation par axe, risques prioritaires et décisions à prendre.",
  },
  {
    n: "3",
    navy: false,
    title: "Plan de remédiation priorisé",
    text: "Feuille de route en trois horizons (urgent, court terme, moyen terme), avec une estimation de charge pour chaque tâche à réaliser.",
  },
] as const;

/** Section 03 — criticality scale used throughout the report. */
export const severities = [
  {
    tag: "CRITIQUE",
    title: "À corriger sans attendre",
    desc: "Faille exploitable, perte de données ou de paiement, parcours principal bloqué",
  },
  {
    tag: "MAJEUR",
    title: "À traiter à court terme",
    desc: "Dysfonctionnement fréquent, risque de rejet par les stores, non-conformité, forte friction",
  },
  {
    tag: "MINEUR",
    title: "À planifier",
    desc: "Anomalie ponctuelle, incohérence visuelle, dette technique sans impact immédiat",
  },
  {
    tag: "AMÉLIORATION",
    title: "Opportunité",
    desc: "Gain de conversion, de performance ou de maintenabilité",
  },
] as const;

/** Section 04 — répartition du forfait de 1 000 € par axe d’audit. */
export const investment = [
  { text: "Cadrage, accès et cartographie de l’application", amount: "50 €", alt: false },
  { strong: "Parcours métier", text: " et fonctionnel", amount: "120 €", alt: true },
  { text: "Expérience utilisateur et accessibilité", amount: "90 €", alt: false },
  { strong: "Code et architecture", text: " mobile (iOS & Android)", amount: "140 €", alt: true },
  { text: "Back-end, API et données", amount: "110 €", alt: false },
  { strong: "Sécurité", text: " (OWASP Mobile Top 10)", amount: "140 €", alt: true },
  { text: "Performance et stabilité", amount: "70 €", alt: false },
  { text: "Conformité RGPD et exigences des stores", amount: "60 €", alt: true },
  { text: "Mesure d’audience, notifications et back-office", amount: "40 €", alt: false },
  {
    strong: "Rapport complet",
    text: ", plan de remédiation et restitution",
    amount: "180 €",
    alt: true,
  },
] as const;

/** Section 05 — déroulé de la semaine d’audit. */
export const days = [
  {
    tag: "JOUR 1",
    title: "Lancement & cartographie",
    desc: "Réunion de lancement, vérification des accès, installation des builds, cartographie des écrans, des rôles et des flux",
  },
  {
    tag: "JOUR 2",
    title: "Fonctionnel & expérience",
    desc: "Parcours complets sur iOS et Android pour chaque profil, relevé des anomalies et des frictions",
  },
  {
    tag: "JOUR 3",
    title: "Code, architecture & serveur",
    desc: "Revue du code mobile, de l’API, du modèle de données, des dépendances et de l’infrastructure",
  },
  {
    tag: "JOUR 4",
    title: "Sécurité, performance & conformité",
    desc: "Contrôles de sécurité, mesures de performance, revue RGPD et exigences des stores",
  },
  {
    tag: "JOUR 5",
    title: "Rapport & remise",
    desc: "Rédaction du rapport, de la synthèse et du plan de remédiation, puis remise au Client",
  },
] as const;

/** Photos d’équipe affichées en section 01 du devis. */
export const team = [
  {
    src: "/equipe/equipe-progix.jpg",
    alt: "L’équipe Progix réunie dans ses bureaux de Montréal",
    cap: "L’équipe au complet, Montréal",
    pos: "center 38%",
  },
  {
    src: "/equipe/revue-dossier.jpg",
    alt: "Trois développeurs Progix passant en revue un dossier de spécifications",
    cap: "Revue de spécifications",
    pos: "center 32%",
  },
  {
    src: "/equipe/poste-travail.jpg",
    alt: "Un développeur Progix à son poste de travail",
    cap: "Au poste de travail",
    pos: "center 45%",
  },
] as const;

/** Header / footer navigation. This project ships a single document. */
export const navLinks = [{ key: "devis", label: "Devis d’audit", href: "/devis" }] as const;
