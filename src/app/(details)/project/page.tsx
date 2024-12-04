import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

export default function Prototype() {
  return (
    <>
      <div className="flex mb-4">
        <Link href="/" className="flex gap-2 items-center">
          <IconArrowLeft />
          <h1 className="text-2xl">Il progetto</h1>
        </Link>
      </div>

      <div>
        {/*<p className="mb-2">Progetto a tema “Urban Well-Being” [...] </p>*/}

        <h1 className="mt-6 text-2xl font-bold">Il contesto</h1>

        <h2 className="mt-3 text-xl">La problematica </h2>
        <p className="mb-2">
          Lo <strong>scarso senso di sicurezza</strong> percepito dalle persone
          nelle grandi città, soprattutto di notte, che spesso influenza
          negativamente le proprie abitudini di vita e{" "}
          <strong>limita la propria libertà</strong>.
        </p>

        <h2 className="mt-3 text-xl">L’obiettivo</h2>
        <p className="mb-2">
          Fornire agli utenti{" "}
          <strong>
            uno strumento concreto, affidabile e facile da utilizzare
          </strong>{" "}
          per orientarsi fra i pericoli della città e potersi spostare in
          tranquillità.
        </p>

        <h2 className="mt-3 text-xl">Gli utenti target </h2>
        <p className="mb-2">
          Chiunque voglia sentirsi più al sicuro nella città in cui vive, in
          particolare donne e fasce vulnerabili della popolazione.
        </p>

        <h2 className="mt-3 text-xl">Il contesto di utilizzo </h2>
        <p className="mb-2">
          <strong>Due scenari distinti</strong>: quando l’utente percepisce
          pericolo e/o è testimone di un evento pericoloso quando l’utente vuole
          spostarsi da un punto all’altro della città nel modo più sicuro
          possibile.
        </p>

        <h1 className="mt-6 text-2xl font-bold">L'Applicativo</h1>

        <h2 className="mt-3 text-xl">La modalità di funzionamento</h2>
        <p className="mb-2">
          SafeWay si basa su due funzionalità principali: permettere all’utente
          di <strong>segnalare una situazione di pericolo</strong> e fornire
          all’utente un <strong>ventaglio di possibili percorsi</strong> per
          raggiungere la sua destinazione anche sulla base delle segnalazioni
          effettuate da altri utenti.
        </p>

        <h2 className="mt-3 text-xl">Le segnalazioni</h2>
        <p className="mb-2">
          Gli utenti hanno a disposizione la possibilità di effettuare una{" "}
          <strong>rapida ma accurata segnalazione</strong> tramite l’apposita
          funzionalità.
        </p>
        <p className="mb-2">
          Viene richiesto all’utente di fornire una{" "}
          <strong>rapida descrizione del pericolo</strong> congiuntamente a
          tutti i dati necessari per delineare e per ubicare geograficamente e
          temporalmente l’accaduto.
        </p>
        <p className="mb-2">
          L’applicativo prevede inoltre la possibilità di{" "}
          <strong>acquisire e salvare rapidamente le proprie coordinate</strong>{" "}
          così da poter effettuare la segnalazione anche a distanza di qualche
          minuto, dando eventualmente la possibilità all’utente di mettersi in
          sicurezza prima di riempire i campi della segnalazione.
        </p>
        <p className="mb-2">
          Le segnalazioni che arrivano da zone limitrofe vengono poi accorpate
          dal sistema che è dotato di una logica basata sulla quantità, il tipo
          e la distribuzione temporale degli alert in grado di smistare la
          segnalazione, ove necessario, anche alle forze dell’ordine.
        </p>
        <h2 className="mt-3 text-xl">La scelta dei percorsi</h2>
        <p className="mb-2">
          L’altra modalità di funzionamento dell’applicativo fornisce uno
          strumento simile ai principali applicativi di navigazione già presenti
          sul mercato, come Google Maps.
        </p>
        <p className="mb-2">
          La differenza fondamentale però, è che SafeWay{" "}
          <strong>
            si basa sulla rete di segnalazioni di altri utenti o di enti
            istituzionali
          </strong>{" "}
          per consigliare il percorso da fare all’utente. I percorsi suggeriti
          differiscono per tempo di percorrenza e grado di sicurezza calcolato
          dal sistema, così da rendere l’utente libero di scegliere quello che
          gli è più congeniale.
        </p>
        <p className="mb-2">
          SafeWay guida l’utente fino a destinazione, ricalcolando, se
          pervengono nuove segnalazioni, il percorso originale.
        </p>

        <h2 className="mt-3 text-xl">Tracking amici</h2>
        <p>
          Il percorso suggerito da SafeWay e scelto dall’utente può essere{" "}
          <strong>condiviso con amici e persone fidate</strong> che possono
          visualizzare, laddove l’utente li autorizzi in tal senso, la sua
          posizione ed i tempi previsti di percorrenza dello spostamento
          direttamente dall’app.
        </p>
        <p className="mb-2">
          L’applicativo inoltre può inviare <strong>notifiche push</strong>{" "}
          quando lungo il proprio percorso o quello di un amico viene effettuata
          una segnalazione oppure quando un amico arriva a destinazione.
        </p>

        <h2 className="mt-3 text-xl">Supporto per smartwatch</h2>
        <p className="mb-2">
          <strong>
            Le funzionalità presenti sono le stesse ma ridimensionate e ridotte
            all’essenziale.
          </strong>{" "}
          Da smartwatch infatti non è possibile selezionare un percorso ma solo
          visualizzarne uno già generato da telefono e ricevere indicazioni
          stradali sfruttando vibrazioni o feedback vocali tipici di questo tipo
          di dispositivo.
        </p>
        <p className="mb-2">
          La funzionalità per segnalare si riduce a{" "}
          <strong>
            registrare le proprie coordinate e a mandare un reminder
          </strong>{" "}
          su telefono per effettuare la segnalazione in un secondo momento
          utilizzando tali coordinate.
        </p>
        <p className="mb-2">
          Infine su smartwatch è possibile ricevere{" "}
          <strong>notifiche push</strong> che descrivono la situazione lungo il
          percorso che si sta seguendo e rispetto alla posizione degli amici.
        </p>

        <h1 className="mt-6 text-2xl font-bold">Il prototipo</h1>
        <p className="mb-2">
          Il prototipo è naturalmente{" "}
          <strong>molto più limitato e schematico</strong> rispetto
          all’applicativo finale. L’obiettivo è infatti quello di rendere quanto
          più fedelmente possibile le scelte grafiche e di disposizione dei vari
          elementi dando così un’idea del flow di interazione dell’utente.
        </p>

        <p className="mb-2">
          La mappa, punto centrale su cui si basa il funzionamento di SafeWay,
          nel prototipo è un elemento statico con il quale non si può
          interagire. Alcune funzionalità come quella della gestione amici sono
          semplificate.
        </p>

        <p className="mb-2">
          Tutti i dettagli implementativi quali l’utilizzo dei dati e di
          algoritmi per suggerire i percorsi sono volutamente omessi in quanto
          non sono rilevanti in questa fase.
        </p>
      </div>
    </>
  );
}
