/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { BadgeHeading, InfoBox, Pill, SectionHeader, Strong, SubHeading } from "./primitives";
import {
  audit1,
  audit2,
  audit3,
  audit4,
  audit5,
  audit6,
  audit7,
  audit8,
  days,
  deliverables,
  investment,
  payments,
  severities,
  team,
  trust,
} from "./content";
import styles from "./devis.module.css";

function CheckList({ items }: { items: ReadonlyArray<{ b: string; t: string }> }) {
  return (
    <div className={styles.checkGrid}>
      {items.map((i) => (
        <div key={i.b + i.t} className={styles.check}>
          <span className={styles.checkMark} aria-hidden="true">
            ✓
          </span>
          <span>
            <Strong>{i.b}</Strong>
            {i.t}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Photos d’équipe. Images déjà redimensionnées et compressées dans public/equipe. */
function TeamStrip() {
  return (
    <div className={styles.teamGrid}>
      {team.map((p) => (
        <figure key={p.src} className={styles.teamFig}>
          <img
            className={styles.teamImg}
            src={p.src}
            alt={p.alt}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: p.pos }}
          />
          <figcaption className={styles.teamCap}>{p.cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Sections 01–08 of the devis (section 09, the signature block, is separate). */
export function BodySections() {
  return (
    <>
      {/* 01 — OBJET */}
      <section id="s1" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="01 — OBJET" title="Objet du devis" />
          <p className={styles.pLead}>
            Le présent devis contractuel (le « Devis ») engage <Strong>Progix Inc.</Strong> (le «
            Prestataire ») à réaliser l’<Strong>audit complet de l’application mobile Laap</Strong>{" "}
            (l’« Application ») pour le compte de <Strong>Bilal Bakkali</Strong> (le « Client »).
            Laap met en relation des <Strong>particuliers</Strong> avec des{" "}
            <Strong>professionnels du transport</Strong> et des{" "}
            <Strong>opérateurs de lift (monte-meubles)</Strong> pour des livraisons et des
            déménagements rapides.
          </p>
          <p className={styles.p}>
            L’audit examine l’Application existante sous huit angles, du fonctionnel à la sécurité,
            sur iOS, sur Android et côté serveur. Il aboutit à un{" "}
            <Strong>rapport complet remis sous une semaine</Strong> qui établit ce qui fonctionne,
            ce qui doit être corrigé, dans quel ordre et pour quel effort. Le Devis couvre l’audit
            et ses livrables ; la <Strong>réalisation des tâches</Strong> qui en découlent sera
            facturée ultérieurement (section 07). La signature vaut acceptation ferme.
          </p>
          <div className={styles.trust}>
            {trust.map((t) => (
              <div key={t.l} className={styles.trustCell}>
                <div className={styles.trustNum}>{t.n}</div>
                <div className={styles.trustLabel}>{t.l}</div>
              </div>
            ))}
          </div>
          <SubHeading>Qui réalise l’audit</SubHeading>
          <p className={styles.p}>
            Une équipe salariée, réunie dans nos bureaux de <Strong>Montréal</Strong> : ingénieurs
            mobile et back-end et designers produit, ceux-là mêmes qui conçoivent et livrent nos
            applications mobiles. Pas de sous-traitance, pas d’intermédiaire entre vous et ceux qui
            lisent votre code.
          </p>
          <TeamStrip />
        </div>
      </section>

      {/* 02 — PÉRIMÈTRE */}
      <section id="s2" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="02 — PÉRIMÈTRE"
            title="Ce que couvre l’audit"
            lead="Huit axes, de ce que voit l’utilisateur jusqu’à ce qui tourne sur le serveur. Chaque point ci-dessous est vérifié sur l’Application réelle, pour les trois profils d’utilisateurs et sur les deux plateformes."
          />
          <SubHeading first>1 · Parcours métier et fonctionnel</SubHeading>
          <CheckList items={audit1} />
          <SubHeading>2 · Expérience utilisateur et accessibilité</SubHeading>
          <CheckList items={audit2} />
          <SubHeading>3 · Code et architecture mobile</SubHeading>
          <CheckList items={audit3} />
          <SubHeading>4 · Back-end, API et données</SubHeading>
          <CheckList items={audit4} />
          <SubHeading>
            5 · Sécurité <Pill>OWASP Mobile Top 10</Pill>
          </SubHeading>
          <CheckList items={audit5} />
          <SubHeading>6 · Performance et stabilité</SubHeading>
          <CheckList items={audit6} />
          <SubHeading>7 · Conformité et publication</SubHeading>
          <CheckList items={audit7} />
          <SubHeading>8 · Mesure, notifications et back-office</SubHeading>
          <CheckList items={audit8} />
          <p className={styles.note}>
            Les contrôles de sécurité suivent le référentiel <Strong>OWASP Mobile Top 10</Strong> et
            les exigences <Strong>MASVS</Strong>. Ils sont non destructifs : aucune donnée réelle
            n’est modifiée (section 06).
          </p>
        </div>
      </section>

      {/* 03 — LIVRABLES */}
      <section id="s3" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="03 — LIVRABLES"
            title="Ce que vous recevez"
            lead="Un rapport qui se lit à deux niveaux : une synthèse pour décider, un détail pour agir. Chaque constat est prouvé, classé et chiffré, afin que la suite du projet parte de faits et non d’impressions."
          />
          <div className={styles.grid2}>
            {deliverables.map((d) => (
              <div key={d.n} className={cn(styles.card, styles.lift)}>
                <h3 className={styles.cardTitle}>
                  <span
                    className={cn(styles.cardNum, d.navy && styles.cardNumNavy)}
                    aria-hidden="true"
                  >
                    {d.n}
                  </span>
                  {d.title}
                </h3>
                <p className={styles.cardText}>{d.text}</p>
              </div>
            ))}
          </div>
          <InfoBox variant="ok" icon="★" title="Restitution en visioconférence incluse">
            Une <Strong>séance d’une heure</Strong> pour présenter les résultats, répondre à vos
            questions et arbitrer les priorités, planifiée à votre convenance dans les{" "}
            <Strong>5 jours ouvrés</Strong> qui suivent la remise du rapport.
          </InfoBox>
          <SubHeading>Une échelle de criticité simple</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {severities.map((s) => (
              <div key={s.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{s.tag}</div>
                <div className={styles.payWhen}>{s.title}</div>
                <div className={styles.phaseDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — INVESTISSEMENT */}
      <section id="s4" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader
            num="04 — INVESTISSEMENT"
            title="Votre investissement"
            lead="1 000 € au total, réglés en 2 versements : 50 % à la signature, 50 % à la remise du rapport. L’audit et l’ensemble de ses livrables sont compris, sans supplément."
          />
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th className={styles.thRight}>Montant (€)</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((row, idx) => (
                  <tr key={idx} className={row.alt ? styles.tableAlt : undefined}>
                    <td>
                      {"strong" in row && row.strong ? (
                        <>
                          <Strong>{row.strong}</Strong>
                          {row.text}
                        </>
                      ) : (
                        row.text
                      )}
                    </td>
                    <td className={styles.tableNum}>{row.amount}</td>
                  </tr>
                ))}
                <tr className={styles.tableTotal}>
                  <td>
                    <strong>TOTAL · 50 % / 50 %</strong>
                  </td>
                  <td className={styles.tableTotalAmount}>1 000 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cn(styles.totalPanel, styles.lift)}>
            <div className={styles.totalPanelInner}>
              <span className={styles.totalArrow} aria-hidden="true">
                —
              </span>
              <div className={styles.totalEyebrow}>Investissement · montant total</div>
              <div className={styles.totalValue}>1 000 €</div>
              <div className={styles.totalNote}>
                Réglé en <Strong>2 versements de 50 %</Strong>, audit des huit axes, rapport
                complet, plan de remédiation et restitution compris. Prix ferme, aucun coût caché.
              </div>
            </div>
          </div>
          <InfoBox icon="€" title="Aucune taxe applicable">
            Prestation internationale fournie par une société <Strong>canadienne</Strong> : ni TVA
            ni taxe de vente (service transfrontalier, autoliquidation par le preneur le cas
            échéant). <Strong>1 000 € est le net à payer.</Strong>
          </InfoBox>
          <SubHeading>Échéancier de paiement</SubHeading>
          <div className={styles.grid3} style={{ margin: "6px 0 16px" }}>
            {payments.map((p) => (
              <div key={p.when} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{p.pct}</div>
                <div className={styles.payWhen}>{p.when}</div>
                <div className={styles.payDesc}>{p.desc}</div>
                <div className={styles.payAmount}>{p.amount}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "var(--slate)", margin: 0, lineHeight: 1.6 }}>
            <Strong>500 €</Strong> à la signature, <Strong>500 €</Strong> à la remise du rapport.
            Paiement par <Strong>Stripe</Strong> ou <Strong>virement bancaire</Strong>.{" "}
            <Strong>L’audit ne débute pas avant le premier versement.</Strong>
          </p>
          <InfoBox icon="i" title="La réalisation des tâches sera facturée ultérieurement">
            Le présent Devis couvre l’<Strong>audit et ses livrables uniquement</Strong>. Les
            corrections, mises à jour et améliorations recommandées par le rapport ne sont pas
            incluses : elles feront l’objet d’un <Strong>devis séparé</Strong>, établi à partir du
            plan de remédiation et <Strong>facturé ultérieurement</Strong> (section 07).
          </InfoBox>
        </div>
      </section>

      {/* 05 — DÉLAIS */}
      <section id="s5" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader
            num="05 — DÉLAIS"
            title="Une semaine, jour par jour"
            lead="5 jours ouvrés entre l’ouverture des accès et la remise du rapport complet. Chaque journée a son objet ; vous êtes prévenu dès qu’un constat critique apparaît, sans attendre le rapport."
          />
          {/* 5 journées : piste resserrée pour tenir sur une seule ligne en desktop. */}
          <div
            className={styles.grid3}
            style={{
              margin: "16px 0",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,168px),1fr))",
            }}
          >
            {days.map((d) => (
              <div key={d.tag} className={cn(styles.payCard, styles.lift)}>
                <div className={styles.payPct}>{d.tag}</div>
                <div className={styles.payWhen}>{d.title}</div>
                <div className={styles.phaseDesc}>{d.desc}</div>
              </div>
            ))}
          </div>
          <InfoBox icon="i" title="Le délai court à réception des accès">
            Les <Strong>5 jours ouvrés</Strong> démarrent le jour ouvré qui suit la réception du{" "}
            <Strong>premier versement</Strong> et de l’<Strong>ensemble des accès</Strong> listés en
            section 06. Un accès manquant ou incomplet décale d’autant la remise du rapport.
          </InfoBox>
        </div>
      </section>

      {/* 06 — ENGAGEMENTS */}
      <section id="s6" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="06 — ENGAGEMENTS" title="Engagements du Client" />
          <BadgeHeading badge="A" first>
            Ce que le Client fournit
          </BadgeHeading>
          <p className={styles.p}>Pour tenir le délai d’une semaine, le Client s’engage à :</p>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Donner un <Strong>accès en lecture au code source</Strong> de l’application mobile et
              du back-end (dépôt Git ou archive complète).
            </li>
            <li className={styles.arrowItem}>
              Fournir des <Strong>versions installables</Strong> de l’Application : TestFlight pour
              iOS, test interne Google Play ou fichier APK pour Android.
            </li>
            <li className={styles.arrowItem}>
              Créer un <Strong>compte de test par profil</Strong> : particulier, professionnel du
              transport, opérateur de lift et administrateur.
            </li>
            <li className={styles.arrowItem}>
              Ouvrir un <Strong>accès en lecture aux consoles</Strong> : App Store Connect, Google
              Play Console, hébergement, base de données, suivi des erreurs et mesure d’audience.
            </li>
            <li className={styles.arrowItem}>
              Transmettre la <Strong>documentation existante</Strong> : spécifications, maquettes,
              schémas et incidents déjà connus.
            </li>
            <li className={styles.arrowItem}>
              Désigner un <Strong>interlocuteur technique</Strong> joignable pendant la semaine
              d’audit, idéalement le développeur ou l’agence à l’origine de l’Application.
            </li>
          </ul>
          <BadgeHeading badge="B">Droits d’accès</BadgeHeading>
          <p className={styles.p}>
            Le Client garantit disposer des <Strong>droits nécessaires</Strong> pour autoriser
            Progix à accéder au code, aux données et aux services audités, y compris lorsqu’ils sont
            hébergés ou maintenus par un tiers. Il obtient au besoin l’accord de ce tiers avant
            l’ouverture des accès.
          </p>
          <BadgeHeading badge="C">Environnement de test</BadgeHeading>
          <p className={styles.p}>
            Les contrôles de sécurité sont menés en priorité sur un{" "}
            <Strong>environnement de test</Strong>. À défaut, les vérifications sur la production se
            limitent aux comptes de test et à des contrôles passifs, sans modification des données
            réelles des utilisateurs de Laap.
          </p>
        </div>
      </section>

      {/* 07 — SUITE DE L’AUDIT */}
      <section id="s7" data-dc-section className={cn(styles.section, styles.sectionA)}>
        <div className={styles.container}>
          <SectionHeader num="07 — APRÈS L’AUDIT" title="Propriété, confidentialité & suite" />
          <InfoBox variant="ok" icon="★" title="Le rapport vous appartient">
            Le rapport, la synthèse, le plan de remédiation et le registre des constats deviennent{" "}
            <Strong>la propriété du Client à paiement complet</Strong>. Il est libre de les
            transmettre à son équipe, à un autre prestataire ou à un investisseur.
          </InfoBox>
          <SubHeading>Confidentialité</SubHeading>
          <ul className={styles.arrowList}>
            <li className={styles.arrowItem}>
              Code source, données et accès sont traités comme{" "}
              <Strong>strictement confidentiels</Strong>, jamais réutilisés ni divulgués.
            </li>
            <li className={styles.arrowItem}>
              <Strong>Aucune copie des données personnelles</Strong> des utilisateurs de Laap n’est
              conservée ; les constats sont illustrés par des extraits anonymisés.
            </li>
            <li className={styles.arrowItem}>
              À la remise du rapport, les <Strong>accès sont restitués</Strong> et les copies de
              travail supprimées.
            </li>
            <li className={styles.arrowItem}>
              Un <Strong>accord de confidentialité</Strong> peut être signé sur simple demande avant
              l’ouverture des accès.
            </li>
          </ul>
          <SubHeading>
            Réalisation des tâches de l’audit <Pill>Facturée ultérieurement</Pill>
          </SubHeading>
          <p className={styles.p}>
            La réalisation des tâches identifiées par l’audit (correction des anomalies et des
            failles, mises à jour, refonte d’écrans, optimisations){" "}
            <Strong>n’est pas incluse</Strong> dans le présent Devis et{" "}
            <Strong>sera facturée ultérieurement</Strong>, sur devis séparé établi à partir du plan
            de remédiation.
          </p>
          <div className={styles.grid2}>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardNum} aria-hidden="true">
                  €
                </span>
                Un effort connu d’avance
              </h3>
              <p className={styles.cardText}>
                Chaque tâche figure au plan avec sa <Strong>charge estimée</Strong> : le Client sait
                ce qu’il engage avant de décider quoi corriger et quand.
              </p>
            </div>
            <div className={cn(styles.card, styles.lift)}>
              <h3 className={styles.cardTitle}>
                <span className={cn(styles.cardNum, styles.cardNumNavy)} aria-hidden="true">
                  ▸
                </span>
                Libre de choisir
              </h3>
              <p className={styles.cardText}>
                Le Client reste <Strong>libre de confier ces travaux</Strong> à Progix ou au
                prestataire de son choix. Le rapport est rédigé pour être exploitable par toute
                équipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — DISPOSITIONS */}
      <section id="s8" data-dc-section className={cn(styles.section, styles.sectionB)}>
        <div className={styles.container}>
          <SectionHeader num="08 — DISPOSITIONS" title="Dispositions générales" />
          <BadgeHeading badge="1" first>
            Droit applicable & juridiction
          </BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est régi par les lois de la province de Québec et les lois fédérales du
            Canada applicables. Tout litige sera soumis aux tribunaux compétents du district
            judiciaire de Montréal.
          </p>
          <BadgeHeading badge="2">Nature de l’engagement</BadgeHeading>
          <p className={styles.p}>
            L’audit relève d’une <Strong>obligation de moyens</Strong>. Mené en temps limité et par
            échantillonnage, sur la version de l’Application disponible à l’ouverture des accès, il
            réduit fortement les risques mais ne peut garantir l’absence de toute anomalie ou
            vulnérabilité. Les versions publiées après l’audit ne sont pas couvertes.
          </p>
          <BadgeHeading badge="3">Hors périmètre</BadgeHeading>
          <p className={styles.p}>
            Ne sont pas compris : la <Strong>réalisation des tâches</Strong> issues de l’audit
            (facturée ultérieurement), le test d’intrusion approfondi avec exploitation, le test de
            charge, l’audit juridique ou fiscal et toute certification. Les points de conformité
            relevés sont des <Strong>alertes techniques</Strong>, à faire valider par le conseil
            juridique du Client.
          </p>
          <BadgeHeading badge="4">Validité de l’offre</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis est valable <Strong>30 jours</Strong> à compter de sa date d’émission.
          </p>
          <BadgeHeading badge="5">Intégralité de l’entente</BadgeHeading>
          <p className={styles.p}>
            Le présent Devis constitue l’intégralité de l’entente entre les Parties pour l’audit et
            remplace toute communication antérieure.
          </p>
          <BadgeHeading badge="6">Modifications & divisibilité</BadgeHeading>
          <p className={styles.p}>
            Toute modification du Devis ou du périmètre doit faire l’objet d’un écrit signé par les
            deux Parties. Si une disposition est jugée invalide, les autres demeurent en vigueur.
          </p>
        </div>
      </section>
    </>
  );
}
