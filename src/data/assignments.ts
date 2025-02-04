export const assignments = [
  {
    name: "Individuazione dei bisogni",
    status: "green",
    folder: "C1",
    deadline: new Date(2024, 9, 14),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C1/01 Needfinding, analisi, sintesi.pdf",
        type: "pdf",
      },
      {
        name: "Elaborato finale",
        src: "/assignments/C1/needfinding.pdf",
        type: "pdf",
      },
    ],
  },
  {
    name: "Raffinamento e focus",
    status: "green",
    folder: "C2",
    deadline: new Date(2024, 9, 28),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C2/02 Raffinamento e Project focus.pdf",
        type: "pdf",
      },
      {
        name: "Elaborato finale",
        src: "/assignments/C2/refinement_and_focus.pdf",
        type: "pdf",
      },
      {
        name: "Focus group con utenti potenziali",
        src: "/assignments/C2/focus_group_con_utenti_potenziali.pdf",
        type: "pdf",
      },
      {
        name: "Proposte value proposition e nome",
        src: "/assignments/C2/proposte_value_proposition_e_nome.pdf",
        type: "pdf",
      },
      {
        name: "Trascrizione focus group",
        src: "/assignments/C2/trascrizione_focus_group.pdf",
        type: "pdf",
      },
    ],
  },
  {
    name: "Task, storyboard e primi prototipi",
    status: "green",
    folder: "C3",
    deadline: new Date(2024, 10, 18),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C3/03 Task, storyboard e primi prototipi.pdf",
        type: "pdf",
      },
      {
        name: "Elaborato finale",
        src: "/assignments/C3/low_fidelity_prototype.pdf",
        type: "pdf",
      },
      {
        name: "Prototype #1",
        src: "https://www.figma.com/design/xoBPQwh6xyylGf6rbPrl4a/Prototipo-LowFidelity-WebApp?m=auto&t=iHQh8khZ6hSETdh6-1",
        type: "link",
        description: "Figma file",
      },
      {
        name: "Prototype #2",
        src: "https://www.figma.com/design/eSbYENZII8fWtErohwQhv3/Prototipo-LowFidelity-Mobile-App-%2B-SmartWatch?m=auto&t=iHQh8khZ6hSETdh6-1",
        type: "link",
        description: "Figma file",
      },
    ],
  },
  {
    name: "Raffinamento del prototipo",
    status: "green",
    folder: "C4",
    deadline: new Date(2024, 11, 2),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C4/04 Raffinamento del prototipo.pdf",
        type: "pdf",
      },
      {
        name: "Documento tecnico SafeWay",
        src: "/assignments/C4/documento_tecnico_safeway.pdf",
        type: "pdf",
      },
      {
        name: "SafeWay documento valutazione euristica",
        src: "/assignments/C4/safeway_documento_valutazione_euristica.pdf",
        type: "pdf",
      },
      {
        name: "Refined prototype",
        src: "https://www.figma.com/design/bdImHufZNshB73AFnrkUla/Prototipo-medium-fidelity-SafeWay?m=auto&t=iHQh8khZ6hSETdh6-1",
        type: "link",
        description: "Figma file",
      },
    ],
  },
  {
    name: "Valutazione euristica",
    status: "green",
    folder: "C5",
    deadline: new Date(2024, 11, 23),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C5/05 Valutazione euristica.pdf",
        type: "pdf",
      },
      {
        name: "Definizione dei task",
        src: "/assignments/C5/definizione_dei_task.pdf",
        type: "pdf",
      },
      {
        name: "Valutazione euristica",
        src: "/assignments/C5/valutazione_euristica_condivisa.pdf",
        type: "pdf",
      },
    ],
  },
  {
    name: "User testing",
    status: "green",
    folder: "C6",
    deadline: new Date(2025, 0, 29),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C6/06 User testing.pdf",
        type: "pdf",
      },
      {
        name: "User testing",
        src: "/assignments/C6/user_testing.pdf",
        type: "pdf",
      },
      {
        name: "Script - Usability testing",
        src: "/assignments/C6/script_usability_testing.pdf",
        type: "pdf",
      },
      {
        name: "Problemi riscontrati dalla valutazione euristica",
        src: "/assignments/C6/problemi_riscontrati_dalla_valutazione_euristica.pdf",
        type: "pdf",
      },
      {
        name: "Report - Modifica prototipo dopo la valutazione euristica",
        src: "/assignments/C6/report_modifica_prototipo_dopo_la_valutazione_euristica.pdf",
        type: "pdf",
      },
      {
        name: "Final prototype",
        src: "https://www.figma.com/design/JhFU1pc3n13uypjy6R7cDN/Prototipo-finale?m=auto&t=iHQh8khZ6hSETdh6-6",
        type: "link",
        description: "Figma file",
      },
    ],
  },
  {
    name: "Presentazione finale",
    status: "green",
    folder: "C7",
    deadline: new Date(2025, 1, 5),
    files: [
      {
        name: "Documento di specifica",
        src: "/assignments/C7/07 Presentazione finale.pdf",
        type: "pdf",
      },
      {
        name: "Presentazione finale",
        src: "/assignments/C7/presentazione_finale.pdf",
        type: "pdf",
      },
    ],
  },
] as {
  name: string;
  status: "green" | "yellow" | "red";
  folder: string;
  deadline: Date;
  files: {
    name: string;
    src: string;
    type: "pdf" | "link";
    description?: string;
  }[];
}[];
