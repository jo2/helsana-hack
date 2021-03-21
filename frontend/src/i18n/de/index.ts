export default {
  app: {
    user: {
      greeting: 'Willkommen, {p0}'
    },
    welcome: 'Willkommen beim {p0}',
    signUp: {
      headerText: 'Nutzerdaten festlegen',
      description: 'Bei Ihrer ersten Anmeldung im System müssen Sie Ihre persönlichen Daten angeben. Diese Daten werden in den von Ihnen ausgefüllten Formularen und zur Vereinszuordnung verwendet.',
      sendButton: 'Daten absenden',
      haveAccount: 'Sie haben schon einen Account?',
      signIn: 'Einloggen',
      username: {
        label: 'Nutzername',
        placeholder: 'Geben Sie einen Nutzername an',
        validation: 'Nutzername muss angegeben werden'
      },
      password: {
        label: 'Passwort',
        placeholder: 'Geben Sie ein Passwort an',
        validation: 'Passwort muss angegeben werden'
      },
      firstName: {
        label: 'Vorname',
        placeholder: 'Geben Sie Ihren Vornamen an',
        validation: 'Vorname muss angegeben werden'
      },
      lastName: {
        label: 'Nachname',
        placeholder: 'Geben Sie Ihren Nachnamen an',
        validation: 'Nachname muss angegeben werden'
      },
      street: {
        label: 'Straße',
        placeholder: 'Geben Sie Ihre Straße an',
        validation: 'Straße muss angegeben werden'
      },
      number: {
        label: 'Hausnummer',
        placeholder: 'Geben Sie Ihre Hausnummer an',
        validation: 'Hausnummer muss angegeben werden'
      },
      zipCode: {
        label: 'Postleitzahl',
        placeholder: 'Geben Sie Ihre Postleitzahl an',
        validation: 'Postleitzahl muss angegeben werden'
      },
      city: {
        label: 'Stadt',
        placeholder: 'Geben Sie Ihre Stadt an',
        validation: 'Stadt muss angegeben werden'
      },
      phone: {
        label: 'Telefon',
        placeholder: 'Geben Sie Ihre Telefonnummer an',
        validation: 'Telefonnummer muss angegeben werden'
      },
      mail: {
        label: 'E-Mail',
        placeholder: 'Geben Sie Ihre E-Mail-Adresse an',
        validation: 'E-Mail-Adresse muss angegeben werden'
      },
      club: {
        label: 'Verein',
        placeholder: 'Geben Sie den Verein an, dem Sie angehören'
      },
      activeUser: {
        label: 'Aktiver Züchter',
        placeholder: 'Sind Sie aktiver Züchter mit Zwinger?',
        yes: 'Ja',
        no: 'Nein'
      },
      cageName: {
        label: 'Zwingername',
        placeholder: 'Geben Sie den Namen Ihres Zwingers an',
        validation: 'Zwingername muss angegeben werden'
      },
      namePrepend: {
        label: 'Zwingernamensposition',
        placeholder: 'Geben Sie an, an welcher Position des Namens einer Katze der Name des Zwingers steht',
        prepend: 'vorne (bspw. Zwingers Foo)',
        append: 'hinten (bspw. Foo vom Zwinger)',
        validation: 'Zwingernamensposition muss angegeben werden'
      }
    },
    signIn: {
      'User does not exist': 'Nutzername oder Passwort sind falsch',
      'Incorrect username or password': 'Nutzername oder Passwort sind falsch',
      'User is not confirmed': 'Die E-Mail-Adresse muss noch bestätigt werden. Dazu haben wir an die von Ihnen angegebene' +
        ' E-Mail-Adresse einen sechsstelligen Bestätigungscode gesendet. Den müssen Sie im Feld unten eingeben.',
      'User already exists': 'Dieser Nutzername ist bereits vergeben',
      '1 validation error detected: Value at \'password\' failed to satisfy constraint: Member must have length greater than or equal to 6':
        'Passwort muss mindestens 10 Zeichen lang sein',
      'Invalid email address format': 'Format der E-Mail-Adresse ungültig'
    }
  },
  memberPayedList: {
    title: 'Bestätigung der Beitragszahlung bis zum {p0}'
  },
  personInput: {
    club: {
      label: 'Verein',
      validation: 'Verein fehlt'
    },
    memberId: {
      label: 'Mitgliedsnummer',
      validation: 'Mitgliedsnummer fehlt'
    },
    lastName: {
      label: 'Nachname',
      validation: 'Nachname fehlt'
    },
    firstName: {
      label: 'Vorname',
      validation: 'Vorname fehlt'
    },
    street: {
      label: 'Straße',
      validation: 'Straße fehlt'
    },
    number: {
      label: 'Hausnummer',
      validation: 'Hausnummer fehlt'
    },
    zipCode: {
      label: 'PLZ',
      validation: 'PLZ fehlt'
    },
    city: {
      label: 'Ort',
      validation: 'Ort fehlt'
    },
    phone: {
      label: 'Telefonnummer',
      validation: 'Telefonnummer fehlt'
    },
    mail: {
      label: 'E-Mail',
      validation: 'E-Mail fehlt'
    }
  },
  catInput: {
    name: {
      label: 'Name',
      hint: 'Bereits angelegte Katze auswählen oder neue Katze anlegen. Bestätigung der Eingabe mit "Enter".',
      validationPresent: 'Name fehlt',
      validationLength: 'Name der Katze muss mindestens 3 Buchstaben lang sein'
    },
    cageName: {
      label: 'Zwingername',
      hint: 'Diesen Wert nur ändern, wenn die Katze nicht aus dem eigenen Zwinger stammt',
      validation: 'Zwingername fehlt'
    },
    cageNamePosition: {
      label: 'Zwingername wird zum Namen der Katze',
      prepend: 'vorne angefügt',
      append: 'hinten angefügt'
    },
    race: {
      label: 'Rasse',
      validation: 'Rasse fehlt'
    },
    country: {
      label: 'Herkunftsland',
      validation: 'Herkunftsland fehlt',
      noResult: 'Kein Ergebnis gefunden'
    },
    birthDate: {
      label: 'Geburtsdatum',
      validationPresent: 'Geburtsdatum fehlt',
      validationForm: 'Geburtsdatum muss im Format TT.MM.JJJJ sein'
    },
    color: {
      label: 'Farbe',
      validation: 'Farbe fehlt'
    },
    studbookNumber: {
      label: 'Zuchtbuch-Nr.',
      hint: 'Zwei Buchstaben für den Verein, gefolgt von einem Bindestrich und einer Zahlenfolge',
      validationPresent: 'Zuchtbuch-Nr. fehlt',
      validationForm: 'Zuchtbuch-Nr. muss im Format DE-0123456789 sein'
    },
    chipNumber: {
      label: 'Chip-Nr.',
      hint: 'Eine Zahlenfolge',
      validationPresent: 'Chip-Nr. fehlt',
      validationForm: 'Chip-Nr. ist Optional, wenn sie angegeben wird, besteht sie aus 15 Ziffern'
    },
    gender: {
      label: 'Geschlecht',
      validation: 'Geschlecht fehlt',
      male: 'männlich',
      female: 'weiblich'
    },
    file: {
      label: 'Datei',
      sizeValidation: 'Datei darf nicht größer als 5MB sein',
      validation: 'Datei muss angegeben werden',
      hint: 'Wenn Sie hier eine neue Datei angeben, überschreiben sie die bisher hochgeladene Datei',
      showOldFile: 'Bisher hochgeladen'
    },
    breedingApproval: {
      label: 'Zuchtfreigabe'
    }
  },
  formControl: {
    title: 'Formularkontrolle {p0}',
    buttons: {
      continue: 'Weiter',
      save: 'Speichern',
      cancel: 'Abbrechen',
      reject: 'Abweisen',
      back: 'Zurück',
      close: 'Schließen',
      toOverview: 'Zurück zur Übersicht'
    },
    reject: {
      title: 'Antrag abweisen',
      message: 'Geben Sie eine Begründung für das Abweisen des Formulars an. Das Formular wird dann zur Korrektur an den Absender zurückgesendet.',
      placeholder: 'Begründung zur Abweisung',
      cancel: 'Abbrechen',
      confirm: 'Abweisen bestätigen'
    },
    step0: {
      title: 'Daten überprüfen'
    },
    step1: {
      title: 'Zahlung überprüfen'
    },
    step2: {
      title: 'Daten speichern'
    }
  },
  layout: {
    links: {
      welcome: 'Willkommen',
      forms: 'Formulare',
      formCheck: 'Formularkontrolle',
      about: 'About',
      clubManagement: 'Vereinsverwaltung',
      myForms: 'Meine Formulare',
      userdata: 'Nutzerdaten',
      logout: 'Ausloggen'
    },
    menu: {
      management: 'Verwaltung'
    }
  },
  breedingPopulationReport: {
    form: {
      title: 'Zuchtbestandsmeldung',
      accept: {
        label: 'Ich bestätige die wahrheitsgetreue Angabe aller Daten und erkenne die Zuchtrichtlinien und -bedingungen an.',
        validation: 'Bitte akzeptieren.'
      },
      cats: {
        title: 'Katze {p0} hinzufügen',
        add: 'Katze hinzufügen'
      }
    },
    check: {
      title: 'Zuchtbestandsmeldung',
      cage: 'Zwinger',
      cats: {
        title: 'Katzen',
        gender: {
          male: 'männlich',
          female: 'weiblich'
        },
        breedingApproval: {
          yes: 'Ja',
          no: 'Nein'
        }
      },
      table: {
        name: 'Name',
        cageName: 'Zwingername',
        race: 'Rasse',
        country: 'Herkunftsland',
        gender: 'Geschlecht',
        color: 'Farbe',
        birthDate: 'Geburtsdatum',
        chipNumber: 'Chip-Nr.',
        studbookNumber: 'Zuchtbuch-Nr.',
        breedingApproval: 'Zuchtfreigabe',
        file: 'Datei',
        showFile: 'Datei ansehen',
      }
    },
    errors: {
      noActiveMember: 'Als passives Mitglied im Verein können Sie leider keine Zuchtbestandsmeldung einreichen',
      notPaid: 'Sie haben Ihren Mitgliedsbeitrag für den Zeitraum vom {p0} bis {p1} nicht gezahlt und können daher keine neuen Formulare einreichen. Sollten Sie bereits bezahlt haben, wenden Sie sich bitte an die Kontaktperson Ihres Vereins. Sobald sie den Zahlungseingang bestätigt hat, sind sie für den besagten Zeitraum freigegeben.'
    }
  },
  cageNameRegistration: {
    form: {
      title: 'Zwingernamensregistrierung',
      subtitle: 'Ich beantrage hiermit folgenden Zwingernamen für mich zu registrieren und zu schützen:',
      nameSuggestion1: {
        label: 'Zwingernamenswunsch',
        validation: 'Namenswunsch fehlt'
      },
      nameSuggestion2: {
        label: 'Erste Alternative',
        validation: 'Erste Alternative fehlt'
      },
      nameSuggestion3: {
        label: 'Zweite Alternative',
        validation: 'Zweite Alternative fehlt'
      },
      nameSuggestion4: {
        label: 'Dritte Alternative',
        validation: 'Dritte Alternative fehlt'
      },
      cageNamePosition: {
        label: 'Zwingernamen zum Namen hinzufügen',
        prepend: 'voranstellen (z.B. {p0}s Pipilotta)',
        append: 'hinten anfügen (z.B. Pipilotta vom {p0})',
        cageName: 'Zwingername'
      },
      personalData: {
        title: 'Persönliche Daten',
        label: 'Persönliche Angaben'
      },
      costs: 'Ich erkläre mich mit der Speicherung der o.g. Daten einverstanden. Die einmalige Gebühr von 15,00 € werden auf das Vereinskonto überwiesen.'
    },
    check: {
      title: 'Zwingernamensregistrierung {p0}',
      nameSuggestions: 'Namenswünsche',
      nameSuggestion1: 'Namenswunsch',
      nameSuggestion2: 'Erste Alternative',
      nameSuggestion3: 'Zweite Alternative',
      nameSuggestion4: 'Dritte Alternative',
      cageNamePosition: {
        label: 'Zwingername wird zum Namen der Katze',
        prepend: 'vorne angefügt',
        append: 'hinten angefügt'
      }
    }
  },
  distinguishedMeritForm: {
    form: {
      title: 'Beantragung des Zuchttitels "RKV-Distinguished Merit" (RKV-DM)',
      cat: {
        title: 'Daten der Katze',
      },
      table: {
        title: 'Titel von Katze {p0}',
        catName: {
          label: 'Name der Katze',
          validation: 'Name der Katze fehlt'
        },
        cageName: {
          label: 'Zwingername',
          validation: 'Zwingername fehlt',
          hint: 'Diesen Wert nur ändern, wenn die Katze nicht aus dem eigenen Zwinger stammt'
        },
        winningDate: {
          label: 'Monat / Jahr, in dem der Titel erreicht wurde',
          validation: 'Datum fehlt'
        },
        catTitle: {
          label: 'Titel',
          validation: 'Titel fehlt'
        },
        file: {
          label: 'Neue Urkunde zum Titel',
          sizeValidation: 'Urkunde darf nicht größer als 5MB sein',
          validation: 'Urkunde muss angegeben werden',
          hint: 'Wenn Sie hier eine neue Datei angeben, überschreiben sie die bisher hochgeladene Datei',
          showOldFile: 'Bisher hochgeladen'
        }
      },
      buttons: {
        add: 'Titel hinzufügen'
      }
    },
    check: {
      title: 'Beantragung des Zuchttitels "RKV-Distinguished Merit" (RKV-DM)',
      cat: 'Katze',
      cage: 'Zwinger',
      cats: 'Katzen',
      table: {
        catName: 'Katze',
        cageName: 'Zwinger',
        winningDate: 'Titelerhalt',
        title: 'Titel',
        file: 'Urkunde',
        show: 'PDF Ansehen'
      }
    }
  },
  externalCoverage: {
    form: {
      title: 'Deckbescheinigung bei Fremddeckungen',
      description: 'Bitte füllen Sie diese Deckbescheinigung zusammen mit dem Eigentümer des Katers aus und senden diese zusammen ' +
        'mit der Wurfmeldung an unser Zuchtbuch.',
      fCat: 'Angabe zur Katze',
      mCat: 'Angabe zur Kater',
      ownerCat2: 'Katerbesitzer',
      coverStartDate: {
        label: 'Fühestmögliches Deckdatum',
        validationPresent: 'Fühestmögliches Deckdatum fehlt',
        validationForm: 'Fühestmögliches Deckdatum muss im Format TT.MM.JJJJ sein'
      },
      coverEndDate: {
        label: 'Spätestmögliches Deckdatum',
        validationPresent: 'Spätestmögliches Deckdatum fehlt',
        validationForm: 'Spätestmögliches Deckdatum muss im Format TT.MM.JJJJ sein'
      }
    },
    check: {
      title: 'Deckbescheinigung bei Fremddeckung',
      mCat: 'Kater',
      fCat: 'Katze',
      show: 'Stammbaum anzeigen',
      race: 'Rasse',
      color: 'Farbe',
      chipNumber: 'Chip-Nr.',
      studbookNumber: 'Zuchtbuch-Nr.',
      birthDate: 'Geburtsdatum',
      coverStartDate: 'Fühestmögliches Deckdatum',
      coverEndDate: 'Spätestmögliches Deckdatum',
      secondBreeder: 'Zweiter Züchter',
      showFile: 'Datei anzeigen',
      file: 'Datei'
    }
  },
  litterReport: {
    form: {
      title: 'Wurfmeldung mit Chip-Nummer',
      coverStartDate: {
        label: 'Fühestmögliches Deckdatum',
        validationPresent: 'Fühestmögliches Deckdatum fehlt',
        validationForm: 'Fühestmögliches Deckdatum muss im Format TT.MM.JJJJ sein'
      },
      coverEndDate: {
        label: 'Spätestmögliches Deckdatum',
        validationPresent: 'Spätestmögliches Deckdatum fehlt',
        validationForm: 'Spätestmögliches Deckdatum muss im Format TT.MM.JJJJ sein'
      },
      birthDate: {
        label: 'Wurfdatum',
        validationPresent: 'Wurfdatum fehlt',
        validationForm: 'Wurfdatum muss im Format TT.MM.JJJJ sein'
      },
      cageName: {
        label: 'Zwingername',
        validation: 'Zwingername fehlt'
      },
      fCat: 'Katze',
      mCat: 'Kater',
      kitten: {
        title: 'Kitten {p0} hinzufügen',
        add: 'Kitten hinzufügen'
      },
      costs: 'Die Kosten für die Eintragung der Wurfmeldung betragen {p0} €.'
    },
    check: {
      title: 'Wurfmeldung mit Chip-Nummer',
      cageName: 'Zwinger',
      mCat: 'Kater',
      fCat: 'Katze',
      race: 'Rasse',
      color: 'Farbe',
      chipNumber: 'Chip-Nr.',
      studbookNumber: 'Zuchtbuch-Nr.',
      birthDate: 'Geburtsdatum',
      litterDate: 'Wurfdatum',
      coverStartDate: 'Fühestmögliches Deckdatum',
      coverEndDate: 'Spätestmögliches Deckdatum',
      table: {
        title: 'Katzen',
        gender: 'Geschlecht',
        genderValues: {
          male: 'männlich',
          female: 'weiblich'
        },
        breedingApproval: 'Zuchtfreigabe',
        breedingApprovalValues: {
          yes: 'Ja',
          no: 'Nein'
        },
        name: 'Name',
        race: 'Rasse',
        color: 'Farbe',
        chipNumber: 'Chip-Nr.',
        studbookNumber: 'Zuchtbuch-Nr.',
        birthDate: 'Geburtsdatum'
      }
    }
  },
  titleCertificate: {
    form: {
      title: 'Titelurkundenantrag',
      wantedTitle: 'Zu beantragender Titel',
      cat: 'Katze, für die der Titel beantragt wird',
      successes: {
        title: 'Ausstellungserfolg {p0} angeben',
        success: {
          label: 'Bewertung',
          validation: 'Bewertung fehlt'
        },
        club: {
          label: 'Verein',
          validation: 'Verein fehlt'
        },
        city: {
          label: 'Ort',
          validation: 'Ort fehlt'
        },
        date: {
          label: 'Datum',
          validationPresent: 'Datum fehlt',
          validationForm: 'Datum muss im Format DD.MM.JJJJ sein'
        },
        certificateFile: {
          label: 'Richterbericht',
          sizeValidation: 'Richterbericht darf nicht größer als 5MB sein',
          validation: 'Richterbericht muss angegeben werden',
          hint: 'Wenn Sie hier eine neue Datei angeben, überschreiben sie die bisher hochgeladene Datei',
          showOldFile: 'Bisher hochgeladen'
        },
        imageFile: {
          label: 'Bild',
          sizeValidation: 'Bild darf nicht größer als 5MB sein',
          validation: 'Bild muss angegeben werden',
          hint: 'Wenn Sie hier eine neue Datei angeben, überschreiben sie die bisher hochgeladene Datei',
          showOldFile: 'Bisher hochgeladen'
        },
        add: 'Ausstellungserfolg hinzufügen'
      },
      sendingPhotos: 'Ich sende Fotos von meiner Katze per Email',
      scrapingPhotos: 'Ich bin damit einverstanden, dass Sie ein Foto meiner Katze von meiner Webseite nehmen ' +
        '(mit Copyright-Vermerk) und auf der RKV in NRW-Seite veröffentlichen.'
    },
    check: {
      title: 'Titelurkundenantrag',
      cage: 'Zwinger',
      cat: 'Beantragt für',
      chipNumber: 'Chip-Nr.',
      studbookNumber: 'Zuchtbuch-Nr.',
      birthDate: 'Geburtsdatum',
      applicationData: {
        title: 'Antragsdaten',
        wantedTitle: 'Beantragter Titel',
        sendingPhotos: {
          label: 'Fotos werden per E-Mail zugesendet',
          yes: 'Ja',
          no: 'Nein'
        },
        scrapingPhotos: {
          label: 'Fotos dürfen von der Webseite bezogen werden',
          yes: 'Ja',
          no: 'Nein'
        }
      },
      successes: {
        title: 'Ausstellungserfolge',
        success: 'Titel',
        date: 'Datum',
        city: 'Ort',
        club: 'Verein',
        certificateFile: 'Richterbericht',
        showPdf: 'PDF Anzeigen',
        imageFile: 'Bild',
        showImage: 'Bild anzeigen'
      }
    }
  },
  form: {
    buttons: {
      send: 'Absenden',
      cancel: 'Abbrechen',
      goHome: 'Zur Startseite'
    },
    rejected: {
      note: 'Ihr Formular wurde mit folgender Begründung abgelehnt'
    },
    success: 'Formular erfolgreich eingereicht',
    error: 'Ein Fehler ist aufgetreten'
  },
  check: {
    applicant: 'Antragssteller',
    mail: 'E-Mail',
    phone: 'Telefon',
    club: 'Verein',
    costs: 'Überweisung von {p0} über {p1} €',
    accept: 'Daten in Register aufnehmen',
    cageNameAppendWord: 'vom',
    file: {
      page: 'Seite'
    }
  },
  clubManagement: {
    payed: {
      title: 'Zahlungseingänge zu Mitgliedsbeiträgen',
      table: {
        user: 'Nutzer',
        paymentPeriod: 'Mitgliedsbeitrag für Zeitraum',
        action: 'bezahlt'
      }
    },
    joining: {
      title: 'Anträge auf Mitgliedschaft im System',
      table: {
        memberId: 'Mitgliedsnummer',
        user: 'Nutzer',
        action: 'aufnehmen'
      }
    }
  },
  formCheck: {
    title: 'Formulare zur Kontrolle',
    table: {
      id: 'ID',
      formType: 'Formulartyp',
      applicant: 'Antragssteller',
      date: 'Einreichungsdatum',
      state: 'Bearbeitungszustand',
      action: 'Aktionen'
    },
    state: {
      created: 'Erstellt',
      approved: 'Daten kontrolliert',
      paid: 'Bezahlt',
      done: 'Bearbeitung abgeschlossen',
      rejected: 'Abgewiesen',
      all: 'Alle anzeigen'
    },
    formType: {
      all: 'Alle anzeigen'
    },
    userName: {
      label: 'Name',
      all: 'Alle anzeigen'
    },
    action:  {
      view: 'Ansehen',
      viewFile: 'Generiertes Dokument anzeigen'
    },
    rejected: {
      waiting: 'Wartet auf Überarbeitung'
    }
  },
  myForms: {
    title: 'Meine Formulare',
    table: {
      id: 'ID',
      formType: 'Formulartyp',
      date: 'Einreichungsdatum',
      state: 'Bearbeitungszustand',
      action: 'Aktionen'
    },
    state: {
      created: 'Erstellt',
      approved: 'Daten kontrolliert',
      paid: 'Bezahlt',
      done: 'Bearbeitung abgeschlossen',
      rejected: 'Abgewiesen'
    },
    action:  {
      view: 'Ansehen',
      viewFile: 'Generiertes Dokument anzeigen'
    }
  },
  club: {
    contact: {
      title: 'Vorstand',
      phone: 'Telefon',
      mail: 'E-Mail',
      notConfirmed: 'Sie sind von dem von Ihnen angegebenen Verein noch nicht als Mitglied bestätigt worden. Um die Plattform nutzen zu können, ist dies allerdings notwendig.'
    }
  },
  userdata: {
    payment: {
      title: 'Mitgliedsbeiträge verwalten',
      create: 'Bezahlung anlegen',
      membershipFee: 'Mitgliedsbeitrag',
      paymentEndDate: {
        label: 'Wählen Sie einen Zeitraum aus',
        unpaid: 'Sie haben für den Zeitraum vom {p0} bis zum {p1} noch keine Zahlung im System hinterlegt. Solange keine Bezahlung hinterlegt ist, können Sie in diesem Zeitraum keine Formulare einreichen.',
        paid: 'Sie haben eine Zahlung für den Zeitraum vom {p0} bis zum {p1} angelegt. Diese wird momentan durch den Vereinsvorstand geprüft. Sobald die Prüfung abgeschlossen ist, können Sie Formulare einreichen.',
        verified: 'Der Vereinsvorstand hat den Zahlungseingang für den Zeitraum vom {p0} bis zum {p1} bestätigt.'
      }
    },
    change: {
      title: 'Nutzerdaten verwalten',
      firstName: {
        label: 'Vorname',
        placeholder: 'Geben Sie Ihren Vornamen an',
        validation: 'Vorname muss angegeben werden'
      },
      lastName: {
        label: 'Nachname',
        placeholder: 'Geben Sie Ihren Nachnamen an',
        validation: 'Nachname muss angegeben werden'
      },
      street: {
        label: 'Straße',
        placeholder: 'Geben Sie Ihre Straße an',
        validation: 'Straße muss angegeben werden'
      },
      number: {
        label: 'Hausnummer',
        placeholder: 'Geben Sie Ihre Hausnummer an',
        validation: 'Hausnummer muss angegeben werden'
      },
      zipCode: {
        label: 'Postleitzahl',
        placeholder: 'Geben Sie Ihre Postleitzahl an',
        validation: 'Postleitzahl muss angegeben werden'
      },
      city: {
        label: 'Stadt',
        placeholder: 'Geben Sie Ihre Stadt an',
        validation: 'Stadt muss angegeben werden'
      },
      phone: {
        label: 'Telefon',
        placeholder: 'Geben Sie Ihre Telefonnummer an',
        validation: 'Telefonnummer muss angegeben werden'
      },
      mail: {
        label: 'E-Mail',
        placeholder: 'Geben Sie Ihre E-Mail-Adresse an',
        validation: 'E-Mail-Adresse muss angegeben werden'
      },
      deleteTitle: 'Account löschen',
      deleteMessage: 'Sie sind im Begriff, Ihren Account zu löschen. Die Nutzung des Systems ist danach nicht mehr möglich. ' +
        'Dieser Schritt ist unwiderruflich. Die von Ihnen eingereichten Formulardaten werden anonymisiert weiter gespeichert, ' +
        'da der Verein sie für seine Arbeit benötigt. Kosten für eingereichte Formulare',
      updateSuccess: 'Nutzerdaten erfolgreich geändert',
      updateError: 'Fehler beim Ändern der Nutzerdaten',
      buttons: {
        hideMessage: 'Ok',
        update: 'Daten ändern',
        delete: 'Account löschen',
        cancel: 'Löschen abbrechen',
        confirmDelete: 'Unwiderruflich löschen'
      }
    }
  }
};
