import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const slides = [
  {
    title: "Ce que vous allez découvrir",
    bullets: [
      "Pourquoi notre flux de production doit évoluer maintenant",
      "Comment Blackmagic Cloud change les règles du jeu",
      "La vision : un studio centralisé, ouvert au monde entier",
      "Le plan concret pour y arriver en 4 étapes",
      "Les résultats qu’on peut attendre d’ici 3 mois"
    ]
  },
  {
    title: "Optimiser la post-production avec Blackmagic Cloud",
    subtitle: "Vers un nouveau workflow collaboratif pour Boardriders Europe",
    fullImage: "/images/cover-studio.jpg"
  },
  {
    quote: "Et si nos projets étaient partagés aussi facilement que nos idées ?",
    image: "/images/visioconf.jpg"
  },
  {
    title: "Objectifs du projet",
    bullets: [
      "Accélérer la post-production sans sacrifier la qualité",
      "Ouvrir à la collaboration distante",
      "Fluidifier le flux préprod → montage → export",
      "Sécuriser les fichiers dans un cloud fiable"
    ]
  },
  {
    title: "Problèmes actuels",
    icons: ["disque", "sync-fail", "time-loss", "isolated"]
  },
  {
    title: "Ce que propose Blackmagic Cloud",
    bullets: [
      "Projets partagés en ligne (Project Library)",
      "Proxys auto-générés dans le cloud",
      "Montage à distance fluide",
      "Collaboration temps réel, historisation"
    ]
  },
  {
    title: "Nouveau Workflow",
    steps: ["Tournage (BRAW)", "Proxys", "Upload Cloud", "Montage à distance", "Export master"]
  },
  {
    title: "Exemples concrets",
    bullets: [
      "Roxy Snow Lab 2025",
      "Quiksilver Surf House",
      "Collaboration avec Charles & coloriste à Paris"
    ]
  },
  {
    title: "Coûts & budget",
    chart: { library: 10, storage: 90, total: 100 }
  },
  {
    title: "Connexion & infrastructure",
    bullets: [
      "Analyse de la connexion actuelle au studio (fibre pro vs grand public)",
      "Option envisagée : abonnement Starlink Business",
      "Bande passante satellite stable et dédiée, idéal pour l’upload BRAW",
      "Prix Starlink Entreprise : à partir de 207 €/mois + 2 400 € matériel",
      "Alternatives : Fibre dédiée SFR/Orange Business (entre 80 € et 180 €/mois)"
    ]
  },
  {
    title: "Matériel de stockage centralisé",
    bullets: [
      "Serveur Blackmagic Cloud Store Mini (8 To SSD) : 845 € HT",
      "Version Cloud Store 20 To SSD full : ~2 995 € HT",
      "Rôle : hébergement local sécurisé + synchronisation cloud",
      "Permet de relier les rushs BRAW directement au réseau local du studio",
      "Accès ultra rapide via 10G Ethernet ou Thunderbolt pour le monteur local"
    ]
  },
  {
    title: "Nouvelle organisation collaborative",
    bullets: [
      "Création d’une équipe post-production interne & externe",
      "Possibilité de collaborer avec des talents à distance dans le monde entier",
      "Centralisation de tous les projets sur le Cloud Store au studio",
      "Mise en place d’un nouveau rôle : Manager de Production Vidéo (Jordane Devos)",
      "Coordination des plannings, supervision de la qualité, lien avec les marques"
    ]
  },
  {
    title: "Workflow dynamique (de la captation à la livraison)",
    steps: [
      "1. Tournage local ou international (caméras BRAW)",
      "2. Dépôt des rushs sur le Blackmagic Cloud Store du studio",
      "3. Synchronisation automatique avec le monteur (ex: Charles à distance)",
      "4. Édition vidéo + étalonnage (collaboratif via Resolve Cloud)",
      "5. Livraison du master via FTP (ou WeTransfer Pro / Frame.io)"
    ]
  },
  {
    title: "Transmission des compétences",
    bullets: [
      "Prévision de former 2 à 3 personnes en interne sur DaVinci Resolve",
      "Création de profils utilisateurs sur le Cloud Store + Resolve",
      "Encadrement personnalisé pour faciliter la montée en compétence",
      "Standardisation du workflow pour toutes les marques (Roxy, Quiksilver...)"
    ]
  },
  {
    title: "Prochaines étapes & validation",
    bullets: [
      "Présenter la démo en réunion interne",
      "Valider la mise à niveau de la connexion (Starlink ou fibre dédiée)",
      "Commander le Blackmagic Cloud Store Mini (ou version 20 To)",
      "Lancer la formation DaVinci (2 à 3 personnes identifiées)",
      "Démarrer le projet pilote sur Roxy Lab courant octobre"
    ]
  },
  {
    title: "Conclusion visuelle",
    subtitle: "Un nouveau studio connecté au monde entier",
    fullImage: "/images/studio-global-map.jpg"
  },
  {
    title: "Appel à l’action",
    bullets: [
      "Soutenir la mise en place du nouveau workflow d’ici novembre",
      "Permettre à Jordane Devos d’endosser le rôle de Manager de production vidéo",
      "Positionner Boardriders Europe comme référence technique dans le groupe Beaumanoir"
    ]
  },
  {
    outro: "Une nouvelle manière de collaborer. Une nouvelle manière de créer.",
    fullImage: "/images/outro-timeline.jpg"
  }
]

export default function BlackmagicDeck() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center p-8 space-y-8">
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="w-full max-w-4xl"
        >
          <Card className="rounded-2xl shadow-xl overflow-hidden">
            <CardContent className="p-6 space-y-4">
              {slide.title && <h2 className="text-2xl font-bold">{slide.title}</h2>}
              {slide.subtitle && <p className="text-lg text-muted-foreground">{slide.subtitle}</p>}
              {slide.quote && <blockquote className="italic text-xl">{slide.quote}</blockquote>}
              {slide.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {slide.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {slide.steps && (
                <div className="flex flex-wrap gap-4">
                  {slide.steps.map((step, j) => (
                    <div key={j} className="bg-gray-100 rounded-xl px-4 py-2 text-sm">
                      {step}
                    </div>
                  ))}
                </div>
              )}
              {slide.checklist && (
                <ul className="space-y-1">
                  {slide.checklist.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-green-600">✔</span> {item}
                    </li>
                  ))}
                </ul>
              )}
              {slide.carousel && (
                <div className="grid grid-cols-2 gap-4">
                  {slide.carousel.map((item, j) => (
                    <div key={j} className="bg-gray-50 p-3 rounded-xl shadow">
                      {item}
                    </div>
                  ))}
                </div>
              )}
              {slide.outro && <h2 className="text-2xl italic text-center">{slide.outro}</h2>}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}